import type { NextApiRequest, NextApiResponse } from 'next';
import { ErrorResponse } from '@/lib/axios';
import { data } from '@/api-mock/v2/schedules';

export type Platform = {
    provider: "AFREECA"|"TWITCH"|"YOUTUBE",
    broadcastLink: string,
};

export type Schedule = {
    creatorName: string,
    profileImage: string,
    platforms: Platform[],
    title: string,
    bannerImage: string,
    description: string,
    scheduledTime: string,
};

export type OkResponse = {
    totalPage: number,
    recommendPage: number,
    nowPage: number,
    schedules: Schedule[],
};

export type ResponseBodyDTO = ErrorResponse|OkResponse;

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
