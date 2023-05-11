import styled from 'styled-components';
import { PlatformSchedule as PlatformScheduleType } from '@/pages/api/v1/schedules/list';
import ScheduleList from './ScheduleList';

const Container = styled.div`
    margin: 20px 0px 0px 0px;
`;

const Image = styled.img`
    height: 18px;
    margin: 9px 0px;
`;

export default function ExtendedPlatformSchedule(props: { platform: string, schedule: PlatformScheduleType }) {
    const schedules = props.schedule.schedules.filter(s => (s.broadcastLink !== ""));
    return (
        <Container>
            <Image src={`/images/icons/platforms/${props.platform}-full.svg`} alt={`${props.platform} icon`} />
            <ScheduleList schedule={props.schedule} />
        </Container>
    );
}
