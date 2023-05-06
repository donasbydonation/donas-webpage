import type { NextApiRequest, NextApiResponse } from 'next';
import { ErrorResponse } from '@/lib/axios';

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
    afreeca: SchedulePage,
    twitch: SchedulePage,
    youtube: SchedulePage,
};

export type ResponseBodyDTO = ErrorResponse|AllSchedulePages;

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

const mockData: ResponseBodyDTO = {
    "twitch": {
        "totalPage": 5,
        "recommendPage": 4,
        "schedules": [
            {
                "creatorName": "creator-name15",
                "profileImage": "https://yt3.ggpht.com/bHK1E0WBTePF6n5EgRTnEIcmqbnHeuJ8_2NZz5WwB5ggOZlAzWHCwK7_6rlcJeqp0Lci4bHq7w=s176-c-k-c0x00ffffff-no-rj-mo",
                "provider": "TWITCH",
                "broadcastLink": "broadcastLink15",
                "title": "title15",
                "bannerImage": "bannerImage15",
                "description": "description15",
                "scheduledTime": "2023-05-03T15:00:00Z"
            },
            {
                "creatorName": "creator-name16",
                "profileImage": "https://yt3.ggpht.com/bHK1E0WBTePF6n5EgRTnEIcmqbnHeuJ8_2NZz5WwB5ggOZlAzWHCwK7_6rlcJeqp0Lci4bHq7w=s176-c-k-c0x00ffffff-no-rj-mo",
                "provider": "TWITCH",
                "broadcastLink": "broadcastLink16",
                "title": "title16",
                "bannerImage": "bannerImage16",
                "description": "description16",
                "scheduledTime": "2023-05-03T16:00:00Z"
            },
            {
                "creatorName": "creator-name15",
                "profileImage": "https://yt3.ggpht.com/bHK1E0WBTePF6n5EgRTnEIcmqbnHeuJ8_2NZz5WwB5ggOZlAzWHCwK7_6rlcJeqp0Lci4bHq7w=s176-c-k-c0x00ffffff-no-rj-mo",
                "provider": "TWITCH",
                "broadcastLink": "broadcastLink15",
                "title": "title15",
                "bannerImage": "bannerImage15",
                "description": "description15",
                "scheduledTime": "2023-05-03T15:00:00Z"
            },
            {
                "creatorName": "creator-name16",
                "profileImage": "https://yt3.ggpht.com/bHK1E0WBTePF6n5EgRTnEIcmqbnHeuJ8_2NZz5WwB5ggOZlAzWHCwK7_6rlcJeqp0Lci4bHq7w=s176-c-k-c0x00ffffff-no-rj-mo",
                "provider": "TWITCH",
                "broadcastLink": "broadcastLink16",
                "title": "title16",
                "bannerImage": "bannerImage16",
                "description": "description16",
                "scheduledTime": "2023-05-03T16:00:00Z"
            },
            {
                "creatorName": "creator-name15",
                "profileImage": "https://yt3.ggpht.com/bHK1E0WBTePF6n5EgRTnEIcmqbnHeuJ8_2NZz5WwB5ggOZlAzWHCwK7_6rlcJeqp0Lci4bHq7w=s176-c-k-c0x00ffffff-no-rj-mo",
                "provider": "TWITCH",
                "broadcastLink": "broadcastLink15",
                "title": "title15",
                "bannerImage": "bannerImage15",
                "description": "description15",
                "scheduledTime": "2023-05-03T15:00:00Z"
            },
        ]
    },
    "afreeca": {
        "totalPage": 4,
        "recommendPage": 3,
        "schedules": [
            {
                "creatorName": "creator-name15",
                "profileImage": "https://yt3.ggpht.com/bHK1E0WBTePF6n5EgRTnEIcmqbnHeuJ8_2NZz5WwB5ggOZlAzWHCwK7_6rlcJeqp0Lci4bHq7w=s176-c-k-c0x00ffffff-no-rj-mo",
                "provider": "AFREECA",
                "broadcastLink": "broadcastLink15",
                "title": "title15",
                "bannerImage": "bannerImage15",
                "description": "description15",
                "scheduledTime": "2023-05-03T15:00:00Z"
            },
            {
                "creatorName": "creator-name18",
                "profileImage": "https://yt3.ggpht.com/bHK1E0WBTePF6n5EgRTnEIcmqbnHeuJ8_2NZz5WwB5ggOZlAzWHCwK7_6rlcJeqp0Lci4bHq7w=s176-c-k-c0x00ffffff-no-rj-mo",
                "provider": "AFREECA",
                "broadcastLink": "broadcastLink18",
                "title": "title18",
                "bannerImage": "bannerImage18",
                "description": "description18",
                "scheduledTime": "2023-05-03T18:00:00Z"
            },
        ]
    },
    "youtube": {
        "totalPage": 2,
        "recommendPage": 2,
        "schedules": [
            {
                "creatorName": "creator-name15",
                "profileImage": "https://yt3.ggpht.com/bHK1E0WBTePF6n5EgRTnEIcmqbnHeuJ8_2NZz5WwB5ggOZlAzWHCwK7_6rlcJeqp0Lci4bHq7w=s176-c-k-c0x00ffffff-no-rj-mo",
                "provider": "YOUTUBE",
                "broadcastLink": "broadcastLink15",
                "title": "title15",
                "bannerImage": "bannerImage15",
                "description": "description15",
                "scheduledTime": "2023-05-03T15:00:00Z"
            },
            {
                "creatorName": "creator-name19",
                "profileImage": "https://yt3.ggpht.com/bHK1E0WBTePF6n5EgRTnEIcmqbnHeuJ8_2NZz5WwB5ggOZlAzWHCwK7_6rlcJeqp0Lci4bHq7w=s176-c-k-c0x00ffffff-no-rj-mo",
                "provider": "YOUTUBE",
                "broadcastLink": "broadcastLink19",
                "title": "title19",
                "bannerImage": "bannerImage19",
                "description": "description19",
                "scheduledTime": "2023-05-03T19:00:00Z"
            },
        ]
    }
};
