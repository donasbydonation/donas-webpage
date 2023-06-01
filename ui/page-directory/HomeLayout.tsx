import { useState, useEffect, ReactNode } from 'react';
import styled from 'styled-components';
import CreatorList from '@/ui/CreatorList';
import Banner from '@/ui/Banner';
import ScheduleTitle from '@/ui/ScheduleTitle';
import DatePagination from '@/ui/DatePagination';
import AsideToggle from '@/ui/AsideToggle';
import { CreatorInfo } from '@/pages/api/v1/creator-infos/list';
import { useMediaQuery } from 'react-responsive';

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

const StyledAside = styled.aside`
    grid-area: aside;
`;

const StyledMain = styled.main`
    grid-area: main;
`;

type HomeLayoutProps = {
    asideCreatorInfos: CreatorInfo[],
    children: ReactNode,
};

export default function HomeLayout(props: HomeLayoutProps) {
    const [desktop, setDesktop] = useState(true);
    const isDesktop = useMediaQuery({query: '(min-width: 780px)'});

    useEffect(() => {
        if (isDesktop) {
            setDesktop(true);
        } else {
            setDesktop(false);
        }
    }, [isDesktop]);

    return (
        <Container>
            {(desktop) ? (
                <FullGrid>
                    <StyledAside>
                        <CreatorList creatorInfos={props.asideCreatorInfos} />
                    </StyledAside>
                    <Banner />
                    <ScheduleTitle />
                    <DatePagination />
                    <StyledMain>
                        {props.children}
                    </StyledMain>
                </FullGrid>
            ) : (
                <MobileGrid>
                    <StyledAside>
                        <AsideToggle creatorInfos={props.asideCreatorInfos} />
                    </StyledAside>
                    <Banner />
                    <ScheduleTitle />
                    <DatePagination />
                    <StyledMain>
                        {props.children}
                    </StyledMain>
                </MobileGrid>
            )}
        </Container>
    );
}
