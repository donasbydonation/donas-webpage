import styled from 'styled-components';
import HomeLayout from '@/ui/page-directory/HomeLayout';
import PlatformSchedule, { PlatformScheduleProps } from '@/ui/PlatformSchedule';
import { axios } from '@/lib/axios';
import { CreatorInfo } from '@/pages/api/v1/creator-infos/list';
import { PlatformSchedule as PlatformScheduleType } from '@/pages/api/v1/schedules/list';
import { GetServerSideProps } from 'next';
import { getNow } from '@/lib/datetime';

type HomePageProps = {
    creatorInfos: CreatorInfo[],
    platforms: PlatformScheduleProps[],
};

export default function HomePage(props: HomePageProps) {
    return (
        <HomeLayout asideCreatorInfos={props.creatorInfos} >
            {props.platforms.map((p, i) => (
                <PlatformSchedule
                    platform={p.platform}
                    schedule={p.schedule}
                    selectedPage={p.selectedPage}
                    key={i}
                />
            ))}
        </HomeLayout>
    );
}

export const getServerSideProps: GetServerSideProps<HomePageProps> = async (ctx) => {
    const creatorInfos = await axios.get(`/api/v1/creator-infos/list`);

    const commonScheduleQueryParam = [
        `time=${getNow()}`,
        `day=${ctx.query?.offset || "0"}`,
        `provider=TOTAL`,
    ];

    // Preflight: get recommendPage
    const preflightQueryParam = [
        ...commonScheduleQueryParam
    ];
    const preflight = (await axios.get(`/api/v1/schedules/list?${preflightQueryParam.join('&')}`)).data;

    const getPlatformScheduleProps = async (platform: string) => {
        const recommendPage = preflight[platform].recommendPage;
        const queryParamIdx = ctx.query ? (ctx.query[`${platform}Idx`] as string) : "";
        const selectedPage = parseInt(queryParamIdx) || recommendPage;

        const scheduleQueryParam = [
            ...commonScheduleQueryParam,
            `page=${selectedPage - 1}`,
        ];

        return {
            platform,
            schedule: (await axios.get(`/api/v1/schedules/list?${scheduleQueryParam.join('&')}`)).data[platform],
            selectedPage,
        };
    };

    return {
        props: {
            creatorInfos: creatorInfos.data,
            platforms: [
                await getPlatformScheduleProps("afreeca"),
                await getPlatformScheduleProps("twitch"),
                await getPlatformScheduleProps("youtube"),
            ]
        },
    };
}
