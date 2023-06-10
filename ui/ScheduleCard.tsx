import styled from 'styled-components';
import { Schedule } from '@/pages/api/v2/schedules';
import BroadcastLink from './BroadcastLink';
import Link from 'next/link';

const Container = styled.div`
    padding: 11px;
    display: grid;
    height: 140px;
    width: calc(20% - 30px);
    min-width: 275px;
    flex-shrink: 0;
    margin: 13px 13px;
    grid-template:
        "image  creator"    auto
        "image  time-and-link"    23px
        "desc   desc"       auto
       / 58px   auto;
    background-color: #F2F2F2;
    border-radius: 7px;
`;

const Image = styled.img`
    grid-area: image;
    width: 46px;
    height: 46px;
    border-radius: 50%;
    &:hover{   box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
               transform: scale(1.1);
               transition: box-shadow 0.3s ease, 
               transform 0.3s ease;
               border: 2px solid #f2f2f2; }
`;

const CreatorAndLink = styled.div`
    grid-area: creator;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
`;

const ScheduledTimeAndLink = styled.div`
    grid-area: time-and-link;
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
`;

const CreatorName = styled.h4`
    font-size: 17px;
    font-weight: 700;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    overflow: hidden;
    line-break: anywhere;
    height: 27px;
`;

const LinkContainer = styled.div`
    width: 70px;
`;

const ScheduledTime = styled.div`
    font-size: 16px;
    font-weight: 600;
    color: #FF3363;
`;

const Description = styled.p`
    grid-area: desc;
    font-size: 16px;
    font-weight: 500;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    height: 50px;
    margin: 15px 0px 0px 0px;
    padding: 0px 5px 0px 5px;
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
            <Link href={"/user/"+props.schedule.creatorName}>
                <Image src={props.schedule.profileImage} alt={props.schedule.creatorName} />
            </Link>
            <CreatorAndLink>
                <CreatorName>{props.schedule.creatorName}</CreatorName>
            </CreatorAndLink>
            <ScheduledTimeAndLink>
                <ScheduledTime>{convdate(props.schedule.scheduledTime)}</ScheduledTime>
                <LinkContainer>
                        {props.schedule.platforms.filter(p => (p.broadcastLink !== "")).map((platform, idx) => (
                            <BroadcastLink platform={platform.provider} broadcastLink={platform.broadcastLink} key={idx} />
                        ))}
                </LinkContainer>
            </ScheduledTimeAndLink>
            <Description>{props.schedule.description}</Description>
        </Container>
    );
}
