import { ReactNode } from 'react';
import styled from 'styled-components';

const Container = styled.div`
    font-size: 13px;
    padding: 7px;
    background-color: #F2F2F2;
    margin: auto;
`;

export default function NoData(props: {children: ReactNode}) {
    return (
        <Container>{props.children}</Container>
    );
}
