import moment from 'moment-timezone';

export function getNow(): string {
    return moment().tz("Asia/Seoul").format().replace('+', encodeURIComponent('+'));
}
