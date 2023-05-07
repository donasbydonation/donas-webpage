import { ReactNode } from 'react';
import styled from 'styled-components';
import Aside from '@/ui/Aside';
import Banner from '@/ui/Banner';
import ScheduleTitle from '@/ui/ScheduleTitle';
import DatePagination from '@/ui/DatePagination';
import { CreatorInfo } from '@/pages/api/v1/creator-infos/list';

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
`;

type HomeLayoutProps = {
    asideCreatorInfos: CreatorInfo[],
    children: ReactNode,
};

export default function HomeLayout(props: HomeLayoutProps) {
    return (
        <StyledGrid>
            <Aside creatorInfos={props.asideCreatorInfos} />
            <Banner />
            <ScheduleTitle />
            <DatePagination />
            <StyledMain>
                {props.children}
            </StyledMain>
        </StyledGrid>
    );
}
