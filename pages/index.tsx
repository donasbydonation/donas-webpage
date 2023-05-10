import styled from 'styled-components';
import HomeLayout from '@/ui/page-directory/HomeLayout';
import PlatformSchedule from '@/ui/PlatformSchedule';
import { axios } from '@/lib/axios';
import { CreatorInfo } from '@/pages/api/v1/creator-infos/list';
import { PlatformSchedule as PlatformScheduleType } from '@/pages/api/v1/schedules/list';
import { GetServerSideProps } from 'next';
import { getNow } from '@/lib/datetime';

type HomePageProps = {
    creatorInfos: CreatorInfo[],
    afreecaSchedules: PlatformScheduleType,
    twitchSchedules: PlatformScheduleType,
    youtubeSchedules: PlatformScheduleType,
};

export default function HomePage(props: HomePageProps) {
    return (
        <HomeLayout asideCreatorInfos={props.creatorInfos} >
            <PlatformSchedule platform="afreeca" schedule={props.afreecaSchedules} />
            <PlatformSchedule platform="twitch" schedule={props.twitchSchedules} />
            <PlatformSchedule platform="youtube" schedule={props.youtubeSchedules} />
        </HomeLayout>
    );
}

export const getServerSideProps: GetServerSideProps<HomePageProps> = async (ctx) => {
    const creatorInfos = await axios.get(`/api/v1/creator-infos/list`);

    const commonScheduleQueryParam = [
        `time=${getNow()}`,
        `day=${ctx.query?.offset || "0"}`,
    ];

    // Preflight: get recommendPage
    const preflightQueryParam = [
        ...commonScheduleQueryParam,
        `page=0`,
        `size=0`,
        `provider=TOTAL`,
    ];
    const preflight = await axios.get(`/api/v1/schedules/list?${preflightQueryParam.join('&')}`);

    // Afreeca schedules
    const afreecaScheduleQueryParam = [
        ...commonScheduleQueryParam,
        `page=${preflight.data.afreeca.recommendPage}`,
        `provider=AFREECA`,
    ];
    const afreecaSchedule = await axios.get(`/api/v1/schedules/list?${afreecaScheduleQueryParam.join('&')}`);

    // Twtich schedules
    const twitchScheduleQueryParam = [
        ...commonScheduleQueryParam,
        `page=${preflight.data.twitch.recommendPage}`,
        `provider=TWITCH`,
    ];
    const twitchSchedule = await axios.get(`/api/v1/schedules/list?${twitchScheduleQueryParam.join('&')}`);

    // Youtube schedules
    const youtubeScheduleQueryParam = [
        ...commonScheduleQueryParam,
        `page=${preflight.data.youtube.recommendPage}`,
        `provider=YOUTUBE`,
    ];
    const youtubeSchedule = await axios.get(`/api/v1/schedules/list?${youtubeScheduleQueryParam.join('&')}`);

    return {
        props: {
            creatorInfos: creatorInfos.data,
            afreecaSchedules: afreecaSchedule.data.afreeca,
            twitchSchedules: twitchSchedule.data.twitch,
            youtubeSchedules: youtubeSchedule.data.youtube,
        },
    };
}
