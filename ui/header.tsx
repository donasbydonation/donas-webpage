import styled from 'styled-components'
import Link from 'next/link';

const LogoImg = styled.img`
    height: 20px;
    width: 122px;
`;

export default function Header(){
    return (
        <header>
            <Link href="/">
                <LogoImg src= "/images/logo.svg" alt="Donas logo" />
            </Link>
        </header>
    )
}
