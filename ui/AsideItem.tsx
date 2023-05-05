import styled from 'styled-components';
import { CreatorInfo, Platform } from '@/pages/api/v1/creator-infos/list';

function BroadcastLink(props: {platform: Platform}) {
    const Link = styled.a`
        display: inline-flex;
        align-items: center;
        justify-content: center;
        border-radius: 8px;
        text-decoration: none;
        color: black;
        margin-left: 5px;
    `;

    const Icon = styled.img`
        width: 18px;
        height: 18px;
    `;

    return (
        <Link href={props.platform.broadcastLink} target="_blank">
            <Icon src={`/images/icons/platforms/${props.platform.provider.toLowerCase()}.svg`} />
        </Link>
    );
}

export default function AsideItem(props: {creatorInfo: CreatorInfo}) {
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

    return (
        <Container>
            <Image src={props.creatorInfo.profileImage} alt={`${props.creatorInfo.name}`}/>
            <Body>
                <Title>
                    {props.creatorInfo.name}
                </Title>
                <div>
                    {props.creatorInfo.platforms.map((platform, idx) => (
                        <BroadcastLink platform={platform} key={idx} />
                    ))}
                </div>
            </Body>
        </Container>
    );
}
