import { useState, useEffect } from 'react';
import styled from 'styled-components';
import CreatorList from '@/ui/CreatorList';
import AsideToggle from '@/ui/AsideToggle';
import UserBanner from '@/ui/UserBanner';
import UserScheduleList from '@/ui/UserScheduleList';
import { axios } from '@/lib/axios';
import { CreatorInfo } from '@/pages/api/v1/creator-infos/list';
import { Schedules} from '@/pages/api/v2/creators/[id]/schedules';
import { GetServerSideProps } from 'next';
import { getNow } from '@/lib/datetime';
import { useRouter } from 'next/router'
import { useMediaQuery } from 'react-responsive';

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

const MobileGrid = styled.div`
    display: grid;
    grid-template:
        "aside  main"   auto
       / 32px   auto;
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
    schedules: Schedules,
};

export default function UserPage(props: UserPageProps) {
    const router = useRouter()
    const { id } = router.query
    const [desktop, setDesktop] = useState(true);
    const isDesktop = useMediaQuery({query: '(min-width: 780px)'});

    useEffect(() => {
        if (isDesktop) {
            setDesktop(true);
        } else {
            setDesktop(false);
        }
    }, [isDesktop]);

    let targetInfo = null;
    for (const userinfo of props.creatorInfos){
        if (userinfo.creatorId == Number(id)){
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
        {(desktop) ? (
            <FullGrid>
                <StyledAside>
                    <CreatorList creatorInfos={props.creatorInfos} />
                </StyledAside>
                <StyledMain>
                    <UserBanner creatorInfo={targetInfo}/>
                    <UserScheduleList schedules={props.schedules.schedules}/>
                </StyledMain>
            </FullGrid>
        ) : (
            <MobileGrid>
                <StyledAside>
                    <AsideToggle creatorInfos={props.creatorInfos} />
                </StyledAside>
                <StyledMain>
                    <UserBanner creatorInfo={targetInfo}/>
                    <UserScheduleList schedules={props.schedules.schedules}/>
                </StyledMain>
            </MobileGrid>
        )}
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
    ];

    const schedules = (await axios.get(`/api/v2/creators/${ctx.params?.id}/schedules?${scheduleQueryParam.join('&')}`)).data;

    return {
        props: {
            creatorInfos: creatorInfos.data,
            schedules,
        },
    };
}
