import styled from 'styled-components';
import { useCallback } from 'react';
import { useSearchParams, usePathname } from 'next/navigation';
import Link from 'next/link';

const Container = styled.div`
    grid-area: date;
    display: flex;
    align-items: flex-end;
    font-size: 16px;
    font-weight: 550;
`;

const StyledDatePicker = styled(Link)`
    margin-right: 20px;
    cursor: pointer;
    color:  #666666;
    text-decoration: none;

    &:hover{
        color : #FF3363;
    }
`;

const StyledPickedDate = styled(StyledDatePicker)`
    color : #FF3363;
    text-decoration: underline;
    text-underline-offset: 6px;
`;

function DatePicker(props: {offset: number}) {
    const date = new Date();
    date.setDate(date.getDate() + props.offset);

    const pathname = usePathname();
    const searchParams = useSearchParams()!;
    const createQueryString = useCallback(() => {
            const params = new URLSearchParams(searchParams);
            params.set('offset', `${props.offset}`);
            return params.toString();
        },
        [searchParams],
    );

    return (
        <>
            {(parseInt(searchParams.get("offset") || "0")) === props.offset
                ? <StyledPickedDate href={pathname + '?' + createQueryString()}>{date.getDate()}일</StyledPickedDate>
                : <StyledDatePicker href={pathname + '?' + createQueryString()}>{date.getDate()}일</StyledDatePicker>
            }
        </>
    );
}

export default function DateBar() {
    const pages = Array(5).fill(0);
    const searchParams = useSearchParams();

    return (
        <Container>
            {pages.map((el, idx) => (
                <DatePicker key={idx} offset={idx}/>
            ))}
        </Container>
    );
}
