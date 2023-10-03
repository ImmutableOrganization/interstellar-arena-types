
export const _gunOptions = ['Rifle', 'Shotgun', 'SMG', 'Sniper'] as const;
export type GunOption = (typeof _gunOptions)[number];

export type UserStatsType = {
    username: string;
    userUid: string;
    kills: number;
    deaths: number;
    loadout: GunOption;
};
