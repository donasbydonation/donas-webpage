import styled from 'styled-components';
import Aside from '@/ui/Aside';
import Banner from '@/ui/Banner';
import { axios } from '@/lib/axios';
import { CreatorInfo } from '@/pages/api/v1/creator-infos/list';

const StyledGrid = styled.div`
    margin-top: 47px;
    display: grid;
    grid-template:
        "aside banner"  162px
        "aside title"   53px
        "aside date"    44px
        "aside main"    auto
        / 283px auto;
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

export default function Home(props: { creatorInfos: CreatorInfo[] }) {
    return (
        <StyledGrid>
            <Aside creatorInfos={props.creatorInfos} />
            <Banner />
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

export async function getServerSideProps() {
    const creatorInfos = await axios.get(`http://localhost:3000/api/v1/creator-infos/list`);

    return {
        props: {
            creatorInfos: creatorInfos.data,
        },
    };
}
