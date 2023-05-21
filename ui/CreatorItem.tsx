import styled from 'styled-components';
import { CreatorInfo } from '@/pages/api/v1/creator-infos/list';
import BroadcastLink from './BroadcastLink';

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const Image = styled.img`
    width: 34px;
    height: 34px;
    border-radius: 50%;
`;

const Body = styled.div`
    width: 184px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const Title = styled.h3`
    font-size: 15px;
    font-weight: 600;
`;

export default function CreatorItem(props: {creatorInfo: CreatorInfo}) {
    return (
        <Container>
            <Image src={props.creatorInfo.profileImage} alt={`${props.creatorInfo.name}`}/>
            <Body>
                <Title>
                    {props.creatorInfo.name}
                </Title>
                <div>
                    {props.creatorInfo.platforms.filter(p => (p.broadcastLink !== "")).map((platform, idx) => (
                        <BroadcastLink platform={platform} key={idx} />
                    ))}
                </div>
            </Body>
        </Container>
    );
}
