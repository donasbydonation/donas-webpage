import styled from 'styled-components';
import { Schedule } from '@/pages/api/v2/schedules';
import ScheduleList from './ScheduleList';
import ScheduleHeader from './ScheduleHeader';

// Source: https://stackoverflow.com/a/5767357
function removeItemAll(arr: string[], value: string) {
    let i = 0;
    while (i < arr.length) {
        if (arr[i] === value) {
            arr.splice(i, 1);
        } else {
            ++i;
        }
    }
    return arr;
}

const Container = styled.div`
    margin: 20px 0px 0px 0px;
`;

export default function PlatformSchedule(props: { platform: string, schedules: Schedule[] }) {
    const additionalPlatforms = removeItemAll(["afreeca", "twitch", "youtube"], props.platform);

    return (
        <Container>
            <ScheduleHeader platform={[props.platform, ...additionalPlatforms]} extendable={true} />
            <ScheduleList schedules={props.schedules} />
        </Container>
    );
}
