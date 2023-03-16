import Link from 'next/link'
import styled from 'styled-components'
import Header from '@/ui/header'

const StyledNav = styled.nav`
    position: fixed;
    display: flex;
    justify-content: space-between;
    background: #F9F9F9;
    width: 100%;
    height: 60px;
    padding: 0 10%;
`

const StyledLink = styled(Link)`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 100px;
    height: 100%;
    cursor: pointer;
    font-size: 18px;
    font-weight: bold;
    color: black;
    text-decoration: none;
    &:hover{ background: #EEEEEE; }
`

export default function GlobalNav(){
    return (
        <StyledNav>
            <Header />
            <div>
                <StyledLink href="https://soulcalmfunny.notion.site/0265c96352964f298b9e600bcbbd8e9b">
                    공지사항
                </StyledLink>
                <StyledLink href="https://soulcalmfunny.notion.site/6c9c74f386e54f42b5763d4b74b672ce">
                    고객센터
                </StyledLink>
                {/* TODO: Refactoring required - Link element below is moved from `/src/components/Top.tsx` */}
                {/*
                <Link href="/auth/login">
                    <button style={{
                                    cursor:"pointer",
                                    width:"110px",
                                    height:"45px",
                                    textAlign:"center",
                                    background:"white",
                                    borderRadius:"30px",
                                    fontSize:"18px",
                                    fontWeight:"bold",
                                    backgroundColor:"#fffff",
                                    border: "2px solid #ff3363",
                                    color:"#ff3363"
                                    }}>
                            로그인
                    </button>
                </Link>
                */}
            </div>
        </StyledNav>
    )
}
