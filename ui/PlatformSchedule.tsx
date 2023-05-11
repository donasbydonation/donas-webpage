import styled from 'styled-components';
import { PlatformSchedule as PlatformScheduleType } from '@/pages/api/v1/schedules/list';
import PlatformSchedulePagination from './PlatformSchedulePagination';
import ExtendPlatformButton from './ExtendPlatformButton';
import ScheduleList from './ScheduleList';

const Container = styled.div`
    margin: 20px 0px 0px 0px;
`;

const Image = styled.img`
    height: 18px;
    margin: 9px 0px;
`;

const Footer = styled.div`
    display: flex;
    padding: 3px 0px 16px 0px;
    align-items: center;
    justify-content: space-between;
`;

export type PlatformScheduleProps = {platform: string, schedule: PlatformScheduleType, selectedPage: number};

export default function PlatformSchedule(props: PlatformScheduleProps) {
    return (
        <Container>
            <Image src={`/images/icons/platforms/${props.platform}-full.svg`} alt={`${props.platform} icon`} />
            <ScheduleList schedule={props.schedule} />
            <Footer>
                <span>{" "}</span>
                <PlatformSchedulePagination
                    eventKey={`${props.platform}Idx`}
                    totalPages={props.schedule.totalPage}
                    selectedPage={props.selectedPage}
                />
                <ExtendPlatformButton platform={props.platform} />
            </Footer>
        </Container>
    );
}
