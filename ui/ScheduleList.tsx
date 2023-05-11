import styled from 'styled-components';
import { PlatformSchedule as PlatformScheduleType } from '@/pages/api/v1/schedules/list';
import ScheduleCard from './ScheduleCard';
import NoData from './NoData';

const List = styled.div`
    display: flex;
    min-height: 183px;
    align-items: center;
    flex-wrap: wrap;
`;

export default function ScheduleList(props: {schedule: PlatformScheduleType}) {
    const schedules = props.schedule.schedules.filter(s => (s.broadcastLink !== ""));
    return (
        <List>
            {
                (schedules.length !== 0)
                ? schedules.map((schedule, idx) => (<ScheduleCard schedule={schedule} key={idx} />))
                : <NoData>일정이 없습니다.</NoData>
            }
        </List>
    );
}
