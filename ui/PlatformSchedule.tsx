import styled from 'styled-components';
import { PlatformSchedule as PlatformScheduleType } from '@/pages/api/v1/schedules/list';
import ScheduleCard from './ScheduleCard';
import PlatformSchedulePagination from './PlatformSchedulePagination';
import ExtendPlatformButton from './ExtendPlatformButton';

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

const Footer = styled.div`
    display: flex;
    padding: 3px 0px 16px 0px;
    align-items: center;
    justify-content: space-between;
`;

export default function PlatformSchedule(props: { platform: string, schedule: PlatformScheduleType }) {
    return (
        <Container>
            <Image src={`/images/icons/platforms/${props.platform}-full.svg`} alt={`${props.platform} icon`} />
            <List>
                {props.schedule.schedules.map((schedule, idx) => (
                    <ScheduleCard schedule={schedule} key={idx} />
                ))}
            </List>
            <Footer>
                <span>{" "}</span>
                <PlatformSchedulePagination
                    eventKey={`${props.platform}-idx`}
                    totalPages={props.schedule.totalPage}
                    defaultPage={props.schedule.recommendPage}
                />
                <ExtendPlatformButton platform={props.platform} />
            </Footer>
        </Container>
    );
}
