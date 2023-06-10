import styled from 'styled-components';
import CreatorList from '@/ui/CreatorList';
import UserBanner from '@/ui/UserBanner';
import UserScheduleList from '@/ui/UserScheduleList';
import { axios } from '@/lib/axios';
import { CreatorInfo } from '@/pages/api/v1/creator-infos/list';
import { OkResponse } from '@/pages/api/v2/schedules';
import { GetServerSideProps } from 'next';
import { getNow } from '@/lib/datetime';
import { useRouter } from 'next/router'


const Container = styled.div`
    padding-top: 47px;
    min-height: calc(100vh - 32px);
`;

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
        margin: 0px 0px;
    }
    & > *:first-child {
        margin: 0px 0px;
    }
    & > *:last-child {
        margin: 0px 0px;
    }
`;


type UserPageProps = {
    creatorInfos: CreatorInfo[],
    schedules: OkResponse,
};

export default function UserPage(props: UserPageProps) {
    const router = useRouter()
    const { id } = router.query
    
    let targetInfo = null;
    for (const userinfo of props.creatorInfos){
        if (userinfo.name == id){
            targetInfo = userinfo;
            break;
        }
    }

    if (targetInfo == null){
        router.push("/");
        return null;
    }
    else {
        return (
        <Container>
            <FullGrid>
                <StyledAside>
                    <CreatorList creatorInfos={props.creatorInfos} />
                </StyledAside>
                <StyledMain>
                    <UserBanner creatorInfo={targetInfo}/>
                    <UserScheduleList schedules={props.schedules.schedules}/>
                </StyledMain>
            </FullGrid>
        </Container>

        );
    }
}

export const getServerSideProps: GetServerSideProps<UserPageProps> = async (ctx) => {
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
