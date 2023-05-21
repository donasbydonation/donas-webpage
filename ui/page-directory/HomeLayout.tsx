import { ReactNode } from 'react';
import styled from 'styled-components';
import Aside from '@/ui/Aside';
import Banner from '@/ui/Banner';
import ScheduleTitle from '@/ui/ScheduleTitle';
import DatePagination from '@/ui/DatePagination';
import { CreatorInfo } from '@/pages/api/v1/creator-infos/list';
import MediaQuery from 'react-responsive';

const Container = styled.div`
    padding-top: 47px;
    min-height: calc(100vh - 32px);
`;

const FullGrid = styled.div`
    display: grid;
    grid-template:
        "aside  banner  banner  banner" auto
        "aside  .       title   ."      53px
        "aside  .       date    ."      44px
        "aside  .       main    ."      auto
       / 283px  26px    auto    26px;
`;

const MobileGrid = styled.div`
    display: grid;
    grid-template:
        "aside  banner  banner  banner" auto
        "aside  .       title   ."      53px
        "aside  .       date    ."      44px
        "aside  .       main    ."      auto
       / 32px   26px    auto    26px;
`;

const StyledMain = styled.main`
    grid-area: main;
`;

function NotResponsive(props: {children: ReactNode}) {
    return (
        <>
            <Banner />
            <ScheduleTitle />
            <DatePagination />
            <StyledMain>
                {props.children}
            </StyledMain>
        </>
    );
}

type HomeLayoutProps = {
    asideCreatorInfos: CreatorInfo[],
    children: ReactNode,
};

export default function HomeLayout(props: HomeLayoutProps) {
    return (
        <Container>
            {/* Full display */}
            <MediaQuery minWidth={780} >
                <FullGrid>
                    <Aside creatorInfos={props.asideCreatorInfos} />
                    <NotResponsive>
                        {props.children}
                    </NotResponsive>
                </FullGrid>
            </MediaQuery>
            {/* Mobile display */}
            <MobileGrid>
                <Aside creatorInfos={props.asideCreatorInfos} />
                <NotResponsive>
                    {props.children}
                </NotResponsive>
            </MobileGrid>
        </Container>
    );
}
