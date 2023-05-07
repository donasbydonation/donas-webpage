import styled from 'styled-components';
import { Search } from 'react-bootstrap-icons';
import { CreatorInfo } from '@/pages/api/v1/creator-infos/list';
import AsideItem from './AsideItem';

const AsideContainer = styled.aside`
    grid-area: aside;
    > * {
        & {
            height: 55px;
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 10px 18px;
        }
    }
`;

const AsideHeader = styled.div`
    font-size: 17px;
    font-weight: bold;
`;

const Button = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    background: none;
    cursor: pointer;
`;


export default function Aside(props: {creatorInfos: CreatorInfo[]}) {
    const onClickSearch = () => {
        // TODO: search button
        console.warn("TODO");
    };

    return (
        <AsideContainer>
            <AsideHeader>
                <span>크리에이터 목록</span>
                <Button onClick={onClickSearch}>
                    <Search />
                </Button>
            </AsideHeader>
            {props.creatorInfos.map((creatorInfo, idx) => (
                <AsideItem creatorInfo={creatorInfo} key={idx} />
            ))}
        </AsideContainer>
    );
}
