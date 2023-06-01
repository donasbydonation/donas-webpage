import styled from 'styled-components';
import HomeLayout from '@/ui/page-directory/HomeLayout';
import AllSchedules from '@/ui/AllSchedules';
import { axios } from '@/lib/axios';
import { CreatorInfo } from '@/pages/api/v1/creator-infos/list';
import { OkResponse } from '@/pages/api/v2/schedules';
import { GetServerSideProps } from 'next';
import { getNow } from '@/lib/datetime';

type HomePageProps = {
    creatorInfos: CreatorInfo[],
    schedules: OkResponse,
};

export default function HomePage(props: HomePageProps) {
    return (
        <HomeLayout asideCreatorInfos={props.creatorInfos} >
            <AllSchedules
                totalPage={props.schedules.totalPage}
                schedules={props.schedules.schedules}
                selectedPage={props.schedules.nowPage}
            />
        </HomeLayout>
    );
}

export const getServerSideProps: GetServerSideProps<HomePageProps> = async (ctx) => {
    const creatorInfos = await axios.get(`/api/v1/creator-infos/list`);

    const queryParamIdx = ctx.query ? (ctx.query[`scheduleIdx`] as string) : "";
    const page = parseInt(queryParamIdx) || -1;

    const scheduleQueryParam = [
        `time=${getNow()}`,
        `page=${page}`,
        `size=15`,
        `day=${ctx.query?.offset || "0"}`,
        `provider=TOTAL`,
    ];

    const schedules = (await axios.get(`/api/v2/schedules?${scheduleQueryParam.join('&')}`)).data;

    return {
        props: {
            creatorInfos: creatorInfos.data,
            schedules,
        },
    };
}
