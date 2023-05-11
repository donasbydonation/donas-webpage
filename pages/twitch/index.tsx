import styled from 'styled-components';
import HomeLayout from '@/ui/page-directory/HomeLayout';
import ExtendedPlatformSchedule from '@/ui/ExtendedPlatformSchedule';
import { axios } from '@/lib/axios';
import { CreatorInfo } from '@/pages/api/v1/creator-infos/list';
import { PlatformSchedule as PlatformScheduleType } from '@/pages/api/v1/schedules/list';
import { GetServerSideProps } from 'next';
import { getNow } from '@/lib/datetime';

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

export const getServerSideProps: GetServerSideProps<TwitchPageProps> = async (ctx) => {
    const creatorInfos = await axios.get(`/api/v1/creator-infos/list`);

    const queryParam = [
        `time=${getNow()}`,
        `day=${ctx.query?.offset || "0"}`,
        `provider=TWITCH`,
    ];

    const schedules = await axios.get(`/api/v1/schedules/list?${queryParam.join('&')}`);

    return {
        props: {
            creatorInfos: creatorInfos.data,
            schedules: schedules.data.twitch,
        },
    };
}
