import styled from 'styled-components';

export default function Banner() {
    const Container = styled.div`
        grid-area: banner;
        border: 1px dotted gray;
    `;

    return (
        <Container>
        Banner
        </Container>
    );
}
