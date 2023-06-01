import styled from 'styled-components';
import HomeLayout from '@/ui/page-directory/HomeLayout';
import PlatformSchedule from '@/ui/PlatformSchedule';
import { axios } from '@/lib/axios';
import { CreatorInfo } from '@/pages/api/v1/creator-infos/list';
import { Schedule } from '@/pages/api/v2/schedules';
import { GetServerSideProps } from 'next';
import { getNow } from '@/lib/datetime';

type YouTubePageProps = {
    creatorInfos: CreatorInfo[],
    schedules: Schedule[],
};

export default function YouTubePage(props: YouTubePageProps) {
    return (
        <HomeLayout asideCreatorInfos={props.creatorInfos} >
            <PlatformSchedule platform="youtube" schedules={props.schedules} />
        </HomeLayout>
    );
}

export const getServerSideProps: GetServerSideProps<YouTubePageProps> = async (ctx) => {
    const creatorInfos = await axios.get(`/api/v1/creator-infos/list`);

    const queryParam = [
        `time=${getNow()}`,
        `day=${ctx.query?.offset || "0"}`,
        `provider=YOUTUBE`,
    ];

    const schedules = await axios.get(`/api/v2/schedules?${queryParam.join('&')}`);

    return {
        props: {
            creatorInfos: creatorInfos.data,
            schedules: schedules.data.schedules,
        },
    };
}
