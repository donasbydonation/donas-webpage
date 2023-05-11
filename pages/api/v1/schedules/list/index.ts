import type { NextApiRequest, NextApiResponse } from 'next';
import { ErrorResponse } from '@/lib/axios';
import { data } from '@/api-mock/v1/schedules/list';

export type Schedule = {
    creatorName: string,
    profileImage: string,
    provider: "AFREECA"|"TWITCH"|"YOUTUBE",
    broadcastLink: string,
    title: string,
    bannerImage: string,
    description: string,
    scheduledTime: string,
};

export type PlatformSchedule = {
    totalPage: number,
    recommendPage: number,
    schedules: Schedule[],
};

export type AllPlatformSchedules = {
    afreeca: PlatformSchedule,
    twitch: PlatformSchedule,
    youtube: PlatformSchedule,
};

export type ResponseBodyDTO = ErrorResponse|AllPlatformSchedules;

export default function handler(req: NextApiRequest, res: NextApiResponse<ResponseBodyDTO>)  {
    if (process.env.NODE_ENV === "development") {
        res.status(200).json(data);
    } else {
        res.status(403).json({
            name: "FORBIDDEN",
            httpStatus: "FORBIDDEN",
            message: "Error message from Next.js: API call must be routed to apiserver"
        });
    }
}
