import styled from 'styled-components';
import { Platform } from '@/pages/api/v1/creator-infos/list';

const Container = styled.a`
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

export default function BroadcastLink(props: {platform: string, broadcastLink: string}) {
    return (
        <Container href={props.broadcastLink} target="_blank">
            <Icon src={`/images/icons/platforms/${props.platform.toLowerCase()}.svg`} />
        </Container>
    );
}
