import styled from 'styled-components';
import Link from 'next/link';
import { useCallback, ReactNode } from 'react';
import { useSearchParams, usePathname } from 'next/navigation';

const Container = styled.div`
    > * {
        & {
            margin-left: 24px;
        }
        &:first-child {
            margin-left: 0px;
        }
    }
`;

const StyledLink = styled(Link)`
    color: #B3B3B3;
    text-decoration: none;
`;

function Picker(props: {href: string, selected: boolean, children: ReactNode}) {
    return (
        <>
            <StyledLink
                href={props.href}
                style={props.selected ? {color: "#666666"} : undefined}
                scroll={false}
            >
                {props.children}
            </StyledLink>
        </>
    );
}

type AllSchedulePaginationProps = {eventKey: string, totalPage: number, selectedPage: number};

export default function AllSchedulePagination(props: AllSchedulePaginationProps) {
    const pathname = usePathname();
    const searchParams = useSearchParams()!;

    const createQueryString = useCallback((pageNum: number, offset: number = 0) => {
            const params = new URLSearchParams(searchParams);
            const moveTo = (1 <= pageNum + offset) && (pageNum + offset <= props.totalPage)
                ? pageNum + offset
                : pageNum;
            params.set(props.eventKey, `${moveTo}`);
            return params.toString();
        },
        [searchParams],
    );

    const isSelected = useCallback((pageNum: number) => {
            return props.selectedPage === pageNum;
        },
        [searchParams],
    );

    const pages = Array(props.totalPage).fill(1).map((val, idx) => (val + idx));

    return (
        <Container>
            <Picker
                href={`${pathname}?${createQueryString(1)}`}
                selected={false}
            >
            {"<<"}
            </Picker>
            <Picker
                href={`${pathname}?${createQueryString(props.selectedPage, -1)}`}
                selected={false}
            >
            {"<"}
            </Picker>
            {pages.map((pageNum, idx) => (
                <Picker
                    key={idx}
                    href={`${pathname}?${createQueryString(pageNum)}`}
                    selected={isSelected(pageNum)}
                >
                {pageNum}
                </Picker>
            ))}
            <Picker
                href={`${pathname}?${createQueryString(props.selectedPage, 1)}`}
                selected={false}
            >
            {">"}
            </Picker>
            <Picker
                href={`${pathname}?${createQueryString(props.totalPage)}`}
                selected={false}
            >
            {">>"}
            </Picker>
        </Container>
    );
}
