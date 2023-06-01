import styled from 'styled-components';
import { Schedule } from '@/pages/api/v2/schedules';
import ScheduleCard from './ScheduleCard';
import NoData from './NoData';

const List = styled.div`
    display: flex;
    min-height: 183px;
    /*align-items: center;*/
    flex-wrap: wrap;
`;

export default function ScheduleList(props: {schedules: Schedule[]}) {
    return (
        <List>
            {
                (props.schedules.length !== 0)
                ? props.schedules.map((s, i) => (<ScheduleCard schedule={s} key={i} />))
                : <NoData>일정이 없습니다.</NoData>
            }
        </List>
    );
}
