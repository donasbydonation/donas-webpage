import styled from 'styled-components';
import HomeLayout from '@/ui/page-directory/HomeLayout';
import ExtendedPlatformSchedule from '@/ui/ExtendedPlatformSchedule';
import { axios } from '@/lib/axios';
import { CreatorInfo } from '@/pages/api/v1/creator-infos/list';
import { PlatformSchedule as PlatformScheduleType } from '@/pages/api/v1/schedules/list';
import { GetServerSideProps } from 'next';

type YouTubePageProps = {
    creatorInfos: CreatorInfo[],
    schedules: PlatformScheduleType,
};

export default function YouTubePage(props: YouTubePageProps) {
    return (
        <HomeLayout asideCreatorInfos={props.creatorInfos} >
            <ExtendedPlatformSchedule platform="youtube" schedule={props.schedules} />
        </HomeLayout>
    );
}

export const getServerSideProps: GetServerSideProps<YouTubePageProps> = async (ctx) => {
    const creatorInfos = await axios.get(`/api/v1/creator-infos/list`);

    const commonScheduleQueryParam = [
        `time=${encodeURIComponent(new Date().toISOString())}`,
        `day=${ctx.query?.offset || "0"}`,
        `provider=YOUTUBE`,
    ];

    // Preflight: get recommendPage
    const preflightQueryParam = [
        ...commonScheduleQueryParam,
        `size=10`,
    ];
    const preflight = await axios.get(`/api/v1/schedules/list?${preflightQueryParam.join('&')}`);

    // Youtube schedules
    const queryParam = [
        ...commonScheduleQueryParam,
        `size=${preflight.data.youtube.totalPage * 10}`,
    ];
    const schedules = await axios.get(`/api/v1/schedules/list?${queryParam.join('&')}`);

    return {
        props: {
            creatorInfos: creatorInfos.data,
            schedules: schedules.data.youtube,
        },
    };
}
