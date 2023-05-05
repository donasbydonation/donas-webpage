import styled from 'styled-components';

const Container = styled.div`
    grid-area: title;
    padding: 0px 26px;
    display: flex;
    align-items: flex-end;
`;

const Image = styled.img`
    width: 70px;
    height: 29px;
    margin: 0px 8px 6px 0px;
`;

const Text = styled.span`
    font-size: 16px;
    font-weight: 600;
`;

const DateText = styled.span`
    color: #FF3363;
`;

export default function Title() {
    const date = new Date();
    return (
        <Container>
            <Image src="/images/home/live-icon.svg" alt="Live broadcasting schedule" />
            <Text>
                <DateText>{`${date.getMonth() + 1}월 ${date.getDate()}일`}</DateText>
                {"의 편성표"}
            </Text>
        </Container>
    );
}
