import styled from 'styled-components';
import { useSearchParams } from 'next/navigation';

const Container = styled.div`
    display: flex;
    align-items: flex-end;
    height: 53px;
`;

const Image = styled.img`
    width: 70px;
    height: 29px;
    margin: 0px 8px 6px 0px;
`;

const Text = styled.span`
    font-size: 16px;
    font-weight: 700;
`;

const DateText = styled.span`
    color: #FF3363;
`;

export default function ScheduleTitle() {
    const date = new Date();
    const searchParams = useSearchParams();
    date.setDate(date.getDate() + parseInt(searchParams.get("offset") || "0"));
    date.setHours(date.getHours() - 12);

    return (
        <Container>
            <Image src="/images/home/live-icon.svg" alt="Live broadcasting schedule" />
            <Text>
                <DateText>{`${date.getMonth() + 1}월 ${date.getDate()}일`}</DateText>
                {"의 방송 공지"}
            </Text>
        </Container>
    );
}
