import Link from 'next/link'
import styled from 'styled-components'
import Header from '@/ui/header'

const StyledNav = styled.nav`
    position: fixed;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: #FFFFFF;
    width: 100%;
    height: 47px;
    padding: 0px 16.46px;
`;

const StyledLink = styled(Link)`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    padding: 5px;
    font-size: 15.3px;
    font-weight: bold;
    color: #4D4D4D;
    text-decoration: none;
    &:hover{ background: #EEEEEE; }
`;

const LinkContainer = styled.div`
    display: inline-flex;
    justify-content: space-between;
    width: 143.22px;
`;

export default function GlobalNav(){
    return (
        <StyledNav>
            <Header />
            <LinkContainer>
                <StyledLink href="https://soulcalmfunny.notion.site/0265c96352964f298b9e600bcbbd8e9b">
                    공지사항
                </StyledLink>
                <StyledLink href="https://soulcalmfunny.notion.site/6c9c74f386e54f42b5763d4b74b672ce">
                    고객센터
                </StyledLink>
            </LinkContainer>
        </StyledNav>
    )
}
