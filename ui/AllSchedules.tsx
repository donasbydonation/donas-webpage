import styled from 'styled-components';
import { Schedule } from '@/pages/api/v2/schedules';
import AllSchedulePagination from './AllSchedulePagination';
import ScheduleList from './ScheduleList';
import ScheduleHeader from './ScheduleHeader';

// const Container = styled.div`
//     margin: 20px 0px 0px 0px;
// `;

const Footer = styled.div`
    display: flex;
    padding: 3px 0px 16px 0px;
    align-items: center;
    justify-content: center;
`;

export type AllSchedulesProps = {totalPage: number, selectedPage: number, schedules: Schedule[]};

export default function AllSchedules(props: AllSchedulesProps) {
    return (
        <div>
            <ScheduleHeader platform={["afreeca", "twitch", "youtube"]} />
            <ScheduleList schedules={props.schedules} />
            <Footer>
                <AllSchedulePagination
                    eventKey={`scheduleIdx`}
                    totalPage={props.totalPage}
                    selectedPage={props.selectedPage}
                />
            </Footer>
        </div>
    );
}
