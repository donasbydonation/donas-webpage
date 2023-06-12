import styled from 'styled-components';
import { Schedule } from '@/pages/api/v2/creators/[id]/schedules';
import BroadcastLink from './BroadcastLink';
import Link from 'next/link';
import { now } from 'moment-timezone';

const Container = styled.div`
    padding: 15px;
    height: 115px;
    width: calc(20% - 50px);
    min-width: 275px;
    flex-shrink: 0;
    margin: 10px 20px;
    background-color: #F2F2F2;
    border-radius: 7px;
    text-align: center;
`;

const ScheduledTime = styled.div`
    font-size: 16px;
    font-weight: 600;
    color: #FF3363;
    padding: 0px 0px 0px 5px;
`;

const Description = styled.p`
    font-size: 16px;
    font-weight: 500;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    height: 60px;
    margin: 0px 0px 0px 0px;
    padding: 15px 5px 0px 5px;
`;

function convdate(utc: string): string {
    const date = new Date(utc);
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const toString = (i: number) => ((i > 9 ? '' : '0') + i);
    return `${toString(year)}.${toString(month)}.${toString(day)} / ${toString(hours)}:${toString(minutes)}`;
}

export default function ScheduleCard(props: {schedule: Schedule}) {
    return (
        <Container>
                <ScheduledTime>{convdate(props.schedule.scheduledTime)}</ScheduledTime>
            <Description>{props.schedule.description}</Description>
        </Container>
    );
}