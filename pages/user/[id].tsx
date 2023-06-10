import styled from 'styled-components';
import CreatorList from '@/ui/CreatorList';
import Banner from '@/ui/Banner';
import { axios } from '@/lib/axios';
import { CreatorInfo } from '@/pages/api/v1/creator-infos/list';
import { OkResponse } from '@/pages/api/v2/schedules';
import { GetServerSideProps } from 'next';
import { getNow } from '@/lib/datetime';
import { useRouter } from 'next/router'

const FullGrid = styled.div`
    display: grid;
    grid-template:
        "aside  main"   auto
       / 283px  auto;
`;

const StyledAside = styled.aside`
    grid-area: aside;
`;

const StyledMain = styled.div`
    grid-area: main;
    & > * {
        margin: 0px 26px;
    }
    & > *:first-child {
        margin: 0px 0px;
    }
    & > *:last-child {
        margin: 20px 26px;
    }
`;

type HomePageProps = {
    creatorInfos: CreatorInfo[],
    schedules: OkResponse,
};

export default function HomePage(props: HomePageProps) {
    const router = useRouter()
    const { id } = router.query
    
    let targetInfo = null;
    for (const userinfo of props.creatorInfos){
        if (userinfo.name == id){
            targetInfo = userinfo;
            break;
        }
    }

    return (
        <FullGrid>
            <StyledAside>
                <CreatorList creatorInfos={props.creatorInfos} />
            </StyledAside>
            <StyledMain>
                <Banner></Banner>
                
                {targetInfo?.name}
            </StyledMain>
        </FullGrid>
    );
}

export const getServerSideProps: GetServerSideProps<HomePageProps> = async (ctx) => {
    const creatorInfos = await axios.get(`/api/v1/creator-infos/list`);

    const queryParamIdx = ctx.query ? (ctx.query[`scheduleIdx`] as string) : "";
    const page = (parseInt(queryParamIdx) || 0) - 1;

    const scheduleQueryParam = [
        `time=${getNow()}`,
        `page=${page}`,
        `size=25`,
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
