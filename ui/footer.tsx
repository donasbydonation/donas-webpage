import styled from 'styled-components'

const CopyrightContainer = styled.div`
    color: black;
    font-size: 15px;
    background-color: #FFFFFF;
    text-align: right;
`;

export default function Footer() {
    return (
        <div>
            <CopyrightContainer>
                © {new Date().getFullYear()} Donas. All rights reserved.
            </CopyrightContainer>
        </div>
    );
}
