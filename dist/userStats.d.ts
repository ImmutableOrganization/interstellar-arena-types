export declare const _gunOptions: readonly ["Rifle", "Shotgun", "SMG", "Sniper"];
export type GunOption = (typeof _gunOptions)[number];
export type UserStatsType = {
    username: string;
    userUid: string;
    kills: number;
    deaths: number;
    loadout: GunOption;
};
