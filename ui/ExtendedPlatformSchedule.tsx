import styled from 'styled-components';
import { PlatformSchedule as PlatformScheduleType } from '@/pages/api/v1/schedules/list';
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

export default function ExtendedPlatformSchedule(props: { platform: string, schedule: PlatformScheduleType }) {
    const additionalPlatforms = removeItemAll(["afreeca", "twitch", "youtube"], props.platform);

    return (
        <Container>
            <ScheduleHeader platform={props.platform} additional={additionalPlatforms} />
            <ScheduleList schedule={props.schedule} />
        </Container>
    );
}
