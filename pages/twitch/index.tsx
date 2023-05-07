import styled from 'styled-components';
import HomeLayout from '@/ui/page-directory/HomeLayout';
import ExtendedPlatformSchedule from '@/ui/ExtendedPlatformSchedule';
import { axios } from '@/lib/axios';
import { CreatorInfo } from '@/pages/api/v1/creator-infos/list';
import { PlatformSchedule as PlatformScheduleType } from '@/pages/api/v1/schedules/list';
import { GetServerSideProps } from 'next';

type TwitchPageProps = {
    creatorInfos: CreatorInfo[],
    schedules: PlatformScheduleType,
};

export default function TwitchPage(props: TwitchPageProps) {
    return (
        <HomeLayout asideCreatorInfos={props.creatorInfos} >
            <ExtendedPlatformSchedule platform="twitch" schedule={props.schedules} />
        </HomeLayout>
    );
}

export const getServerSideProps: GetServerSideProps<HomeProps> = async (ctx) => {
    const baseUrl = "http://localhost:3000"
    const creatorInfos = await axios.get(`${baseUrl}/api/v1/creator-infos/list`);

    const commonScheduleQueryParam = [
        `time=${encodeURIComponent(new Date().toISOString())}`,
        `day=${ctx.query?.offset || "0"}`,
        `provider=TWITCH`,
    ];

    // Preflight: get recommendPage
    const preflightQueryParam = [
        ...commonScheduleQueryParam,
        `size=10`,
    ];
    const preflight = await axios.get(`${baseUrl}/api/v1/schedules/list?${preflightQueryParam.join('&')}`);

    // Twitch schedules
    const queryParam = [
        ...commonScheduleQueryParam,
        `size=${preflight.data.twitch.totalPage * 10}`,
    ];
    const schedules = await axios.get(`${baseUrl}/api/v1/schedules/list?${queryParam.join('&')}`);

    return {
        props: {
            creatorInfos: creatorInfos.data,
            schedules: schedules.data.twitch,
        },
    };
}
