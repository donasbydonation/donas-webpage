import type { NextApiRequest, NextApiResponse } from 'next';
import { ErrorResponse } from '@/lib/axios';
import { data } from '@/api-mock/v1/creator-infos/list';

export type Platform = {
    platformId: number,
    provider: "AFREECA"|"TWITCH"|"YOUTUBE",
    broadcastLink: string,
};

export type CreatorInfo = {
    creatorId: number,
    name: string,
    profileImage: string,
    platforms: Platform[],
};

export type ResponseBodyDTO = CreatorInfo[]|ErrorResponse;

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
