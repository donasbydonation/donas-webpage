import { useState } from 'react';
import styled from 'styled-components';
import { CaretRightFill, CaretLeftFill } from 'react-bootstrap-icons';
import Link from 'next/link';

const Image = styled.img`
    height: 18px;
    margin: 9px 9px 9px 0px;
`;

const RightArrow = styled(CaretRightFill)`
    color: #999999;
`;

const LeftArrow = styled(CaretLeftFill)`
    color: #999999;
`;

const HeaderContainer = styled.div`
    display: flex;
    align-items: center;
    &>* {
        margin-right: 10px;
    }
`;

const Button = styled.button`
    background: none;
    border: none;
    padding: 6px 0px 2px 0px;
`;

export default function ScheduleHeader(props: {platform: string[], extendable?: boolean}) {
    const [platformList, setPlatformList] = useState(props.extendable ? [props.platform[0]] : props.platform);
    const [extend, setExtend] = useState(false);

    const onClickOpen = () => {
        setPlatformList(props.platform);
        setExtend(true);
    };

    const onClickClose = () => {
        setPlatformList([props.platform[0]]);
        setExtend(false);
    };

    return (
        <HeaderContainer>
            {platformList.map((p, i) => (
                <Link href={p} key={i} >
                    <Image
                        src={`/images/icons/platforms/${p}-full.svg`}
                        alt={`${p} icon`}
                    />
                </Link>
            ))}
            {(props.extendable) ? (
                (extend) ? (
                    <Button onClick={onClickClose}><LeftArrow /></Button>
                ) : (
                    <Button onClick={onClickOpen}><RightArrow /></Button>
                )
            ) : (
                <></>
            )}
        </HeaderContainer>
    );
}
