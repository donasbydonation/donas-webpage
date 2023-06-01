import styled from 'styled-components';
import { Schedule } from '@/pages/api/v2/schedules';

const Container = styled.div`
    padding: 11px;
    display: grid;
    width: calc(20% - 30px);
    min-width: 165px;
    flex-shrink: 0;
    margin: 13px 15px;
    grid-template:
        "image  creator"    auto
        "image  time"       23px
        "desc   desc"       auto
       / 58px   auto;
    background-color: #F2F2F2;
`;

const Image = styled.img`
    grid-area: image;
    width: 46px;
    height: 46px;
    border-radius: 50%;
`;

const CreatorName = styled.h4`
    grid-area: creator;
    font-size: 18px;
    font-weight: 700;
`;

const ScheduledTime = styled.div`
    grid-area: time;
    font-size: 15px;
    font-weight: 600;
    color: #FF3363;
`;

const Description = styled.p`
    grid-area: desc;
    font-size: 15px;
    font-weight: 500;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
    min-height: 78px;
    margin: 15px 0px 0px 0px;
`;

function convdate(utc: string): string {
    const date = new Date(utc);
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const toString = (i: number) => ((i > 9 ? '' : '0') + i);
    return `${toString(hours)}:${toString(minutes)}`;
}

export default function ScheduleCard(props: {schedule: Schedule}) {
    return (
        <Container>
            <Image src={props.schedule.profileImage} alt={props.schedule.creatorName} />
            <CreatorName>{props.schedule.creatorName}</CreatorName>
            <ScheduledTime>{convdate(props.schedule.scheduledTime)}</ScheduledTime>
            <Description>{props.schedule.description}</Description>
        </Container>
    );
}
