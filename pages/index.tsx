import styled from 'styled-components'

const StyledGrid = styled.div`
    margin-top: 47px;
    display: grid;
    grid-template:
        "aside banner"  162px
        "aside title"   53px
        "aside date"    44px
        "aside main"    500px
        / 15% 85%;
`;

const StyledAside = styled.aside`
    grid-area: aside;
    border: 1px dotted gray;
`;

const StyledBanner = styled.div`
    grid-area: banner;
    border: 1px dotted gray;
`;

const StyledTitle = styled.div`
    grid-area: title;
    border: 1px dotted gray;
`;

const StyledDate = styled.div`
    grid-area: date;
    border: 1px dotted gray;
`;

const StyledMain = styled.main`
    grid-area: main;
    border: 1px dotted gray;
`;

export default function Home() {
  return (
    <StyledGrid>
        <StyledAside>
        aside
        </StyledAside>
        <StyledBanner>
        banner
        </StyledBanner>
        <StyledTitle>
        title
        </StyledTitle>
        <StyledDate>
        date
        </StyledDate>
        <StyledMain>
        main
        </StyledMain>
    </StyledGrid>
  );
}
