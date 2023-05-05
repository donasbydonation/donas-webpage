import styled from 'styled-components'

const LogoImg = styled.img`
    height: 20px;
    width: 122px;
`

export default function Header(){
    return (
        <header>
            <LogoImg src= "/images/logo.svg" alt="Donas logo" />
        </header>
    )
}
