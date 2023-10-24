
export const _gunOptions = ['Rifle', 'Shotgun', 'SMG', 'Sniper'] as const;
export type GunOption = (typeof _gunOptions)[number];

export type UserStatsType = {
    username: string;
    userUid: string;
    kills: number;
    deaths: number;
    loadout: GunOption;
};

export const GunConfig: Record<GunOption, { damage: number; fireRate: number; range: number }> = {
    Rifle: {
        damage: 30,
        fireRate: 100,
        range: 1000,
    },
    Shotgun: {
        damage: 20,
        fireRate: 500,
        range: 1000,
    },
    SMG: {
        damage: 15,
        fireRate: 50,
        range: 600,
    },
    Sniper: {
        damage: 100,
        fireRate: 500,
        range: 1000,
    },
};
