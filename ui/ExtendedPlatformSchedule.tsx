import styled from 'styled-components';
import { PlatformSchedule as PlatformScheduleType } from '@/pages/api/v1/schedules/list';
import ScheduleCard from './ScheduleCard';
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
    flex-wrap: wrap;
    min-height: 183px;
    align-items: center;
`;

export default function ExtendedPlatformSchedule(props: { platform: string, schedule: PlatformScheduleType }) {
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
        </Container>
    );
}
