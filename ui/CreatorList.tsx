import styled from 'styled-components';
import { Search } from 'react-bootstrap-icons';
import { CreatorInfo } from '@/pages/api/v1/creator-infos/list';
import CreatorItem from './CreatorItem';

const Container = styled.div`
    position: fixed;
    height: 100%;
    width: 283px;
`;

const Header = styled.div`
    font-size: 17px;
    font-weight: bold;
    height: 55px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px 18px;
`;

const Body = styled.div`
    height: calc(100% - 87px);
    overflow: scroll;
`;

const Button = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    background: none;
    cursor: pointer;
`;

export default function CreatorList(props: {creatorInfos: CreatorInfo[]}) {
    const onClickSearch = () => {
        // TODO: search button
        console.warn("TODO");
    };

    return (
        <Container>
            <Header>
                <span>크리에이터 목록</span>
                <Button onClick={onClickSearch}>
                    <Search />
                </Button>
            </Header>
            <Body>
                {props.creatorInfos.map((creatorInfo, idx) => (
                    <CreatorItem creatorInfo={creatorInfo} key={idx} />
                ))}
            </Body>
        </Container>
    );
}
