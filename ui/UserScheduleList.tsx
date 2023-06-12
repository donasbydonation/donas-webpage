import React from 'react';
import styled from 'styled-components';
import UserScheduleCard from './UserScheduleCard';
import NoData from './NoData';
import { Schedule } from '@/pages/api/v2/creators/[id]/schedules';


const Container = styled.div`
    width: 100%;
    min-width: 400px;
    justify-content: start;
    background-color: #ffffff;
    padding: 20px 0px 0px 20px;
`;

const List = styled.div`
    display: flex;
    min-height: 183px;
    /*align-items: center;*/
    flex-wrap: wrap;
`;

const Title = styled.h3`
    font-size: 18px;
    font-weight: 500;
    margin: 0px 0px 10px 10px;
`;


type UserProps = {
    schedules: Schedule[];
};

export default function UserScheduleList(props: UserProps) {
    return (
        <Container>
            <Title>
                일정 +
            </Title>
            <List>
            {
                (props.schedules.length !== 0)
                ? props.schedules.map((s, i) => (<UserScheduleCard schedule={s} key={i} />))
                : <NoData>일정이 없습니다.</NoData>
            }
        </List>
        </Container>
    );
}