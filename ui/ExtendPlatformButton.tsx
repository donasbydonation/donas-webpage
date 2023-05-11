import styled from 'styled-components';
import Link from 'next/link';
import { useCallback, ReactNode } from 'react';
import { useSearchParams, usePathname } from 'next/navigation';
import { useRouter } from 'next/router';

const Container = styled.button`
    border: none;
    font-size: 13px;
    cursor: pointer;
`;

export default function ExtendPlatformButton(props: {platform: string}) {
    const router = useRouter();

    const onClickButton = () => {
        router.push(`/${props.platform}`);
    };

    return (
        <Container onClick={onClickButton}>
            일정 더보기
        </Container>
    );
}
