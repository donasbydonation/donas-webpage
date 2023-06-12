import styled from 'styled-components';
import { CreatorInfo } from '@/pages/api/v1/creator-infos/list';
import BroadcastLink from './BroadcastLink';

const Container = styled.div`
    width: 100%;
    min-width: 400px;
    height: 140px;
    display: flex;
    align-items: center;
    justify-content: start;
    background-color: #f8f8f8;
    padding: 20px 20px 20px 20px;
`;

const Body = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0px 0px 50px 0px;
`;

const Image = styled.img`
    width: 100px;
    height: 100px;
    border-radius: 50%;
    align-self: center;
    margin: 0px 0px 0px 15px;
`;

const Title = styled.h3`
    font-size: 18px;
    font-weight: 500;
    margin: 0px 0px 0px 20px;
`;

export default function UserBanner(props: {creatorInfo: CreatorInfo}) {
    return (
        <Container>
            <Image src={props.creatorInfo.profileImage} alt={`${props.creatorInfo.name}`}/>
            <Body>
                <Title>
                    {props.creatorInfo.name}
                </Title>
                <div style={{margin:"0px 10px 0px 0px"}}>
                    {props.creatorInfo.platforms.filter(p => (p.broadcastLink !== "")).map((platform, idx) => (
                        <BroadcastLink platform={platform.provider} broadcastLink={platform.broadcastLink} key={idx} />
                    ))}
                </div>
            </Body>
        </Container>
    );
}
