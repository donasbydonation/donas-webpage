import { useState } from 'react';
import styled from 'styled-components';
import { CaretRightFill, CaretLeftFill } from 'react-bootstrap-icons';
import Link from 'next/link';
import ExtendPlatformButton from './ExtendPlatformButton';

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
    justify-content: space-between;
`;

const LinkContainer = styled.div`
    display: flex;
    align-items: center;
`;

const Button = styled.button`
    background: none;
    border: none;
    padding: 6px 0px 2px 0px;
`;

export default function ScheduleHeader(props: {platform: string[]}) {
    const [extend, setExtend] = useState(false);
    const onClickOpen = () => { setExtend(true); };
    const onClickClose = () => { setExtend(false); };

    return (
        <HeaderContainer>
            {
                (props.platform.length === 1) ? (
                    <>
                        <Link href={`${props.platform.at(0)}`} >
                            <Image
                                src={`/images/icons/platforms/${props.platform.at(0)}-full.svg`}
                                alt={`${props.platform.at(0)} icon`}
                            />
                        </Link>
                        <ExtendPlatformButton platform={props.platform} />
                    </>
                ) : (
                    (extend) ? (
                        <LinkContainer>
                            {props.platform.map((p, i) => (
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
                        </LinkContainer>
                    ) : (
                        <LinkContainer>
                            <Link href={`${props.platform.at(0)}`} >
                                <Image
                                    src={`/images/icons/platforms/${props.platform.at(0)}-full.svg`}
                                    alt={`${props.platform.at(0)} icon`}
                                />
                            </Link>
                            <Button onClick={onClickOpen} >
                                <RightArrow />
                            </Button>
                        </LinkContainer>
                    )
                )
            }
        </HeaderContainer>
    );
}
