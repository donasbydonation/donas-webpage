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
`;

const Button = styled.button`
    background: none;
    border: none;
    padding: 6px 0px 2px 0px;
`;

export default function ScheduleHeader(props: {platform: string, additional?: string[]}) {
    const [extend, setExtend] = useState(false);
    const onClickOpen = () => { setExtend(true); };
    const onClickClose = () => { setExtend(false); };

    return (
        <HeaderContainer>
            <Link href={props.platform} >
                <Image
                    src={`/images/icons/platforms/${props.platform}-full.svg`}
                    alt={`${props.platform} icon`}
                />
            </Link>
            {
                (!!props.additional)
                ? (
                    (extend)
                    ? (
                        <>
                            {props.additional?.map((p, i) => (
                                <Link href={p} key={i} >
                                    <Image
                                        src={`/images/icons/platforms/${p}-full.svg`}
                                        alt={`${p} icon`}
                                    />
                                </Link>
                            ))}
                            <Button onClick={onClickClose} >
                                <LeftArrow />
                            </Button>
                        </>
                    ) : (
                        <Button onClick={onClickOpen} >
                            <RightArrow />
                        </Button>
                    )
                ) : (
                    <></>
                )
            }
        </HeaderContainer>
    );
}
