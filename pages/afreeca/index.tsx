import styled from 'styled-components';
import HomeLayout from '@/ui/page-directory/HomeLayout';
import ExtendedPlatformSchedule from '@/ui/ExtendedPlatformSchedule';
import { axios } from '@/lib/axios';
import { CreatorInfo } from '@/pages/api/v1/creator-infos/list';
import { PlatformSchedule as PlatformScheduleType } from '@/pages/api/v1/schedules/list';
import { GetServerSideProps } from 'next';
import { getNow } from '@/lib/datetime';

type AfreecaPageProps = {
    creatorInfos: CreatorInfo[],
    schedules: PlatformScheduleType,
};

export default function AfreecaPage(props: AfreecaPageProps) {
    return (
        <HomeLayout asideCreatorInfos={props.creatorInfos} >
            <ExtendedPlatformSchedule platform="afreeca" schedule={props.schedules} />
        </HomeLayout>
    );
}

export const getServerSideProps: GetServerSideProps<AfreecaPageProps> = async (ctx) => {
    const creatorInfos = await axios.get(`/api/v1/creator-infos/list`);

    const queryParam = [
        `time=${getNow()}`,
        `day=${ctx.query?.offset || "0"}`,
        `provider=AFREECA`,
    ];

    const schedules = await axios.get(`/api/v1/schedules/list?${queryParam.join('&')}`);

    return {
        props: {
            creatorInfos: creatorInfos.data,
            schedules: schedules.data.afreeca,
        },
    };
}
