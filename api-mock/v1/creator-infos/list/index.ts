import type { ResponseBodyDTO } from '@/pages/api/v1/creator-infos/list';

export const data: ResponseBodyDTO = [
    {
        "creatorId": 1,
        "name": "송이1",
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
        "name": "송이2",
        "profileImage": "https://boost-bucket-test.s3.amazonaws.com/creator-infos/e7453a69-14fc-49e7-a1fc-ea8eb958ec14.png",
        "platforms": [
            {
                "platformId": 3,
                "provider": "TWITCH",
                "broadcastLink": "Hello"
            },
            {
                "platformId": 4,
                "provider": "YOUTUBE",
                "broadcastLink": "Hello"
            }
        ]
    },
    {
        "creatorId": 3,
        "name": "송이3",
        "profileImage": "https://boost-bucket-test.s3.amazonaws.com/creator-infos/05180eb6-bd62-46d0-ad47-7ac23514a39c.png",
        "platforms": [
            {
                "platformId": 5,
                "provider": "AFREECA",
                "broadcastLink": "Hello"
            },
            {
                "platformId": 6,
                "provider": "YOUTUBE",
                "broadcastLink": "Hello"
            }
        ]
    },
    {
        "creatorId": 4,
        "name": "송이4",
        "profileImage": "https://boost-bucket-test.s3.amazonaws.com/creator-infos/e7453a69-14fc-49e7-a1fc-ea8eb958ec14.png",
        "platforms": [
            {
                "platformId": 7,
                "provider": "TWITCH",
                "broadcastLink": "Hello"
            },
            {
                "platformId": 8,
                "provider": "AFREECA",
                "broadcastLink": "Hello"
            }
        ]
    },
];
