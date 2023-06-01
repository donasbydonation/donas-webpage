import styled from 'styled-components';
import { Schedule } from '@/pages/api/v2/schedules';
import BroadcastLink from './BroadcastLink';

const Container = styled.div`
    padding: 11px;
    display: grid;
    width: calc(20% - 30px);
    min-width: 165px;
    flex-shrink: 0;
    margin: 13px 15px;
    grid-template:
        "image  creator-and-link"    auto
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

const CreatorAndLink = styled.div`
    grid-area: creator-and-link;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
`;

const CreatorName = styled.h4`
    font-size: 18px;
    font-weight: 700;
`;

const LinkContainer = styled.div`
    width: 70px;
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
            <CreatorAndLink>
                <CreatorName>{props.schedule.creatorName}</CreatorName>
                <LinkContainer>
                    {props.schedule.platforms.filter(p => (p.broadcastLink !== "")).map((platform, idx) => (
                        <BroadcastLink platform={platform.provider} broadcastLink={platform.broadcastLink} key={idx} />
                    ))}
                </LinkContainer>
            </CreatorAndLink>
            <ScheduledTime>{convdate(props.schedule.scheduledTime)}</ScheduledTime>
            <Description>{props.schedule.description}</Description>
        </Container>
    );
}
