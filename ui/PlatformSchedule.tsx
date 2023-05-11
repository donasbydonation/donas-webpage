import styled from 'styled-components';
import { PlatformSchedule as PlatformScheduleType } from '@/pages/api/v1/schedules/list';
import ScheduleCard from './ScheduleCard';
import PlatformSchedulePagination from './PlatformSchedulePagination';
import ExtendPlatformButton from './ExtendPlatformButton';
import NoData from './NoData';

const Container = styled.div`
    margin: 20px 0px 0px 0px;
`;

const Image = styled.img`
    height: 18px;
    margin: 9px 0px;
`;

const List = styled.div`
    display: flex;
    min-height: 183px;
    align-items: center;
    flex-wrap: wrap;
`;

const Footer = styled.div`
    display: flex;
    padding: 3px 0px 16px 0px;
    align-items: center;
    justify-content: space-between;
`;

export type PlatformScheduleProps = {platform: string, schedule: PlatformScheduleType, selectedPage: number};

export default function PlatformSchedule(props: PlatformScheduleProps) {
    const schedules = props.schedule.schedules.filter(s => (s.broadcastLink !== ""));
    return (
        <Container>
            <Image src={`/images/icons/platforms/${props.platform}-full.svg`} alt={`${props.platform} icon`} />
            <List>
                {
                    (schedules.length !== 0)
                    ? schedules.map((schedule, idx) => (<ScheduleCard schedule={schedule} key={idx} />))
                    : <NoData>일정이 없습니다.</NoData>
                }
            </List>
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
