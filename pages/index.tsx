import styled from 'styled-components';
import Aside from '@/ui/Aside';
import Banner from '@/ui/Banner';
import ScheduleTitle from '@/ui/ScheduleTitle';
import DatePagination from '@/ui/DatePagination';
import PlatformScheduleBar from '@/ui/PlatformScheduleBar';
import { axios } from '@/lib/axios';
import { CreatorInfo } from '@/pages/api/v1/creator-infos/list';
import { PlatformSchedule } from '@/pages/api/v1/schedules/list';
import { GetServerSideProps } from 'next';

const StyledGrid = styled.div`
    margin-top: 47px;
    display: grid;
    grid-template:
        "aside  banner  banner  banner" auto
        "aside  .       title   ."      53px
        "aside  .       date    ."      44px
        "aside  .       main    ."      auto
       / 283px  26px    auto    26px;
`;

const StyledMain = styled.main`
    grid-area: main;
    border: 1px dotted gray;
`;

type HomeProps = {
    creatorInfos: CreatorInfo[],
    afreecaSchedules: PlatformSchedule,
    twitchSchedules: PlatformSchedule,
    youtubeSchedules: PlatformSchedule,
};

export default function Home(props: HomeProps) {
    return (
        <StyledGrid>
            <Aside creatorInfos={props.creatorInfos} />
            <Banner />
            <ScheduleTitle />
            <DatePagination />
            <StyledMain>
                <PlatformScheduleBar platform="afreeca" schedule={props.afreecaSchedules} />
                <PlatformScheduleBar platform="twitch" schedule={props.twitchSchedules} />
                <PlatformScheduleBar platform="youtube" schedule={props.youtubeSchedules} />
            </StyledMain>
        </StyledGrid>
    );
}

export async function getServerSideProps(ctx: GetServerSideProps) {
    const baseUrl = "http://localhost:3000"
    const creatorInfos = await axios.get(`${baseUrl}/api/v1/creator-infos/list`);

    const commonScheduleQueryParam = [
        `time=${encodeURIComponent(new Date().toISOString())}`,
        `day=${ctx.query?.offset || "0"}`,
    ];

    // Preflight: get recommendPage
    const preflightQueryParam = [
        ...commonScheduleQueryParam,
        `page=0`,
        `size=0`,
        `provider=TOTAL`,
    ];
    const preflight = await axios.get(`${baseUrl}/api/v1/schedules/list?${preflightQueryParam.join('&')}`);

    // Afreeca schedules
    const afreecaScheduleQueryParam = [
        ...commonScheduleQueryParam,
        `page=${preflight.data.afreeca.recommendPage}`,
        `provider=AFREECA`,
    ];
    const afreecaSchedule = await axios.get(`${baseUrl}/api/v1/schedules/list?${afreecaScheduleQueryParam.join('&')}`);

    // Twtich schedules
    const twitchScheduleQueryParam = [
        ...commonScheduleQueryParam,
        `page=${preflight.data.twitch.recommendPage}`,
        `provider=TWITCH`,
    ];
    const twitchSchedule = await axios.get(`${baseUrl}/api/v1/schedules/list?${twitchScheduleQueryParam.join('&')}`);

    // Youtube schedules
    const youtubeScheduleQueryParam = [
        ...commonScheduleQueryParam,
        `page=${preflight.data.youtube.recommendPage}`,
        `provider=YOUTUBE`,
    ];
    const youtubeSchedule = await axios.get(`${baseUrl}/api/v1/schedules/list?${youtubeScheduleQueryParam.join('&')}`);

    return {
        props: {
            creatorInfos: creatorInfos.data,
            afreecaSchedules: afreecaSchedule.data.afreeca,
            twitchSchedules: twitchSchedule.data.twitch,
            youtubeSchedules: youtubeSchedule.data.youtube,
        },
    };
}
