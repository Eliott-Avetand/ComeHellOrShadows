export const MEDIA_TYPE = {
    avatar: 'avatar',
    banner: 'banner',
}

export type MEDIA_TYPE = typeof MEDIA_TYPE[keyof typeof MEDIA_TYPE];

export const MEDIA_SCOPE = {
    global: 'global',
    private: 'private',
}

export type MEDIA_SCOPE = typeof MEDIA_SCOPE[keyof typeof MEDIA_SCOPE];