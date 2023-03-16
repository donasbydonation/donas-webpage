import styled from 'styled-components'

const CopyrightContainer = styled.div`
    color: white;
    font-size: 10px;
    background-color: #ff3363;
`

export default function Footer(){
return (
        <div>
            <img src={"/images/landing/background09.jpg"} alt="footer-image" />
            <CopyrightContainer>
                © {new Date().getFullYear()} Donas. All rights reserved.
            </CopyrightContainer>
        </div>
    );
}
