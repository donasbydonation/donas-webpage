import styled from 'styled-components';
import { useCallback, ReactNode } from 'react';
import { useSearchParams, usePathname } from 'next/navigation';
import Link from 'next/link';

const Container = styled.div`
    grid-area: date;
    display: flex;
    align-items: flex-end;
    font-size: 16px;
    font-weight: 550;
`;

const StyledLink = styled(Link)`
    margin-right: 20px;
    cursor: pointer;
    color:  #666666;
    text-decoration: none;

    &:hover{
        color : #FF3363;
    }
`;

function Picker(props: {href: string, selected: boolean, children: ReactNode}) {
    const selectedStyle = {
        color: "#FF3363",
        textDecoration: "underline",
        textUnderlineOffset: "6px",
    };

    return (
        <>
            <StyledLink
                href={props.href}
                style={props.selected ? selectedStyle : undefined}
                scroll={false}
            >
                {props.children}
            </StyledLink>
        </>
    );
}

export default function DatePagination() {
    const pages = Array(5).fill(0).map((val, idx) => (val + idx));
    const currentPage = () => (parseInt(searchParams.get('offset') || `${0}`));

    const pathname = usePathname();
    const searchParams = useSearchParams()!;
    const createQueryString = useCallback((offset: number) => {
            const params = new URLSearchParams(searchParams);
            params.set('offset', `${offset}`);
            return params.toString();
        },
        [searchParams],
    );

    const createDateText = (offset: number):number => {
        const date = new Date();
        date.setDate(date.getDate() + offset);
        return date.getDate();
    };

    const isSelected = useCallback((offset: number) => {
            return currentPage() === offset;
        },
        [searchParams]
    );

    return (
        <Container>
            {pages.map((offset, idx) => (
                <Picker
                    key={idx}
                    href={`${pathname}?${createQueryString(offset)}`}
                    selected={isSelected(offset)}
                >
                {createDateText(offset)}
                </Picker>
            ))}
        </Container>
    );
}
