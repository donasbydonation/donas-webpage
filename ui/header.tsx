import styled from 'styled-components'

const LogoImg = styled.img`
    height: 60px;
    width: 171px;
`

export default function Header(){
    return (
        <header>
            <LogoImg src= "/images/logo.png" alt="logo" />
        </header>
    )
}
