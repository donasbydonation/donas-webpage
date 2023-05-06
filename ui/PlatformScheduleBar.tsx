import styled from 'styled-components';
import { PlatformSchedule } from '@/pages/api/v1/schedules/list';
import ScheduleCard from './ScheduleCard';
import Pagination from './Pagination';

const Container = styled.div`
    margin: 20px 0px 0px 0px;
    border: 1px dotted black;
`;

const Image = styled.img`
    height: 18px;
    margin: 9px 0px;
`;

const List = styled.div`
    display: flex;
`;

const Footer = styled.div`
    display: flex;
    padding: 16px 0px;
    align-items: center;
    justify-content: space-between;
`;

export default function PlatformScheduleBar(props: { platform: string, schedule: PlatformSchedule }) {
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
            <Pagination />
            <button>일정 더보기</button>
            </Footer>
        </Container>
    );
}
