import type { ResponseBodyDTO } from '@/pages/api/v2/creators/[id]/schedules';
export type Platform = {
    provider: "AFREECA"|"TWITCH"|"YOUTUBE",
    broadcastLink: string,
};

export type Schedule = {
    scheduleId: number,
    title: string,
    bannerImage: string,
    description: string,
    scheduledTime: string,
}

export type Schedules = {
    creatorId: number,
    creatorName: string,
    profileImage: string,
    platforms: Platform[],
    schedules: Schedule[],
};
export const data: ResponseBodyDTO = {
    "creatorId": 2,
    "creatorName": "",
    "profileImage": "",
    "platforms": [
        {
            "provider": "TWITCH",
            "broadcastLink": "broadcastLink16"
        }
    ],
    "schedules": [
        {
            "scheduleId": 1,
            "title": "안녕하세용",
            "bannerImage": "https://yt3.ggpht.com/bHK1E0WBTePF6n5EgRTnEIcmqbnHeuJ8_2NZz5WwB5ggOZlAzWHCwK7_6rlcJeqp0Lci4bHq7w=s176-c-k-c0x00ffffff-no-rj-mo",
            "description": "방송입니다. 방송이에요. 왜 줄바꿈이 안되지",
            "scheduledTime": "2023-05-03T15:00:00Z"
        },
    ]
};
