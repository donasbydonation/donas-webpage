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
                style={props.selected ? {color: "#666666"} : null}
                scroll={false}
            >
                {props.children}
            </StyledLink>
        </>
    );
}

type PlatformSchedulePaginationProps = {eventKey: string, totalPages: number, defaultPage: number};

export default function PlatformSchedulePagination(props: PlatformSchedulePaginationProps) {
    const pathname = usePathname();
    const searchParams = useSearchParams()!;
    const currentPage = () => (parseInt(searchParams.get(props.eventKey) || `${props.defaultPage}`));

    const createQueryString = useCallback((pageNum: number, offset: number = 0) => {
            const params = new URLSearchParams(searchParams);
            const moveTo = (1 <= pageNum + offset) && (pageNum + offset <= props.totalPages)
                ? pageNum + offset
                : pageNum;
            params.set(props.eventKey, `${moveTo}`);
            return params.toString();
        },
        [searchParams],
    );

    const isSelected = useCallback((pageNum: numer) => {
            return currentPage() === pageNum;
        },
        [searchParams],
    );

    const pages = Array(props.totalPages).fill(1).map((val, idx) => (val + idx));

    return (
        <Container>
            <Picker
                href={`${pathname}?${createQueryString(1)}`}
                selected={false}
            >
            {"<<"}
            </Picker>
            <Picker
                href={`${pathname}?${createQueryString(currentPage(), -1)}`}
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
                href={`${pathname}?${createQueryString(currentPage(), 1)}`}
                selected={false}
            >
            {">"}
            </Picker>
            <Picker
                href={`${pathname}?${createQueryString(props.totalPages)}`}
                selected={false}
            >
            {">>"}
            </Picker>
        </Container>
    );
}
