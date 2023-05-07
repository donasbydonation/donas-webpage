import type { NextApiRequest, NextApiResponse } from 'next';
import { ErrorResponse } from '@/lib/axios';

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
        res.status(200).json(mockData);
    } else {
        res.status(403).json({
            name: "FORBIDDEN",
            httpStatus: "FORBIDDEN",
            message: "Error message from Next.js: API call must be routed to apiserver"
        });
    }
}

const mockData: ResponseBodyDTO = [
    {
        "creatorId": 1,
        "name": "송이12",
        "profileImage": "https://boost-bucket-test.s3.amazonaws.com/creator-infos/05180eb6-bd62-46d0-ad47-7ac23514a39c.png",
        "platforms": [
            {
                "platformId": 1,
                "provider": "TWITCH",
                "broadcastLink": "Hello"
            },
            {
                "platformId": 2,
                "provider": "AFREECA",
                "broadcastLink": "Hello"
            }
        ]
    },
    {
        "creatorId": 2,
        "name": "송이",
        "profileImage": "https://boost-bucket-test.s3.amazonaws.com/creator-infos/e7453a69-14fc-49e7-a1fc-ea8eb958ec14.png",
        "platforms": [
            {
                "platformId": 3,
                "provider": "TWITCH",
                "broadcastLink": "Hello"
            },
            {
                "platformId": 4,
                "provider": "AFREECA",
                "broadcastLink": "Hello"
            }
        ]
    }
];
