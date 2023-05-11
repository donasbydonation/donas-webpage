import styled from 'styled-components';
import { PlatformSchedule as PlatformScheduleType } from '@/pages/api/v1/schedules/list';
import ScheduleCard from './ScheduleCard';

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
`;

export default function ExtendedPlatformSchedule(props: { platform: string, schedule: PlatformScheduleType }) {
    return (
        <Container>
            <Image src={`/images/icons/platforms/${props.platform}-full.svg`} alt={`${props.platform} icon`} />
            <List>
                {props.schedule.schedules.filter(s => (s.broadcastLink !== "")).map((schedule, idx) => (
                    <ScheduleCard schedule={schedule} key={idx} />
                ))}
            </List>
        </Container>
    );
}
