import styled from 'styled-components';

const StyledImg = styled.img`
    width: 100%;
`;

export default function Banner() {
    return (
        <StyledImg src="/images/home/banner.png" alt="Donas banner image" />
    );
}
