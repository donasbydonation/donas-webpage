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

export default function BroadcastLink(props: {platform: Platform}) {
    return (
        <Container href={props.platform.broadcastLink} target="_blank">
            <Icon src={`/images/icons/platforms/${props.platform.provider.toLowerCase()}.svg`} />
        </Container>
    );
}
