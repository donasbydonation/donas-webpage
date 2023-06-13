import styled from 'styled-components';
import { CreatorInfo } from '@/pages/api/v1/creator-infos/list';
import BroadcastLink from './BroadcastLink';
import Link from 'next/link';

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 55px;
    padding: 10px 18px;
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
            <Link href={"/user/"+props.creatorInfo.creatorId}>
                <Image src={props.creatorInfo.profileImage} alt={`${props.creatorInfo.name}`}/>
            </Link>
            <Body>
                <Link href={"/user/"+props.creatorInfo.creatorId} style={{"textDecoration":"none", "color":"black"}}>
                    <Title>
                        {props.creatorInfo.name}
                    </Title>
                </Link>
                <div>
                    {props.creatorInfo.platforms.filter(p => (p.broadcastLink !== "")).map((platform, idx) => (
                        <BroadcastLink platform={platform.provider} broadcastLink={platform.broadcastLink} key={idx} />
                    ))}
                </div>
            </Body>
            
        </Container>
    );
}
