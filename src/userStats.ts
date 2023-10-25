
export const _gunOptions = ['Rifle', 'Shotgun', 'SMG', 'Sniper'] as const;
export type GunOption = (typeof _gunOptions)[number];

export type UserStatsType = {
    username: string;
    userUid: string;
    kills: number;
    deaths: number;
    loadout: GunOption;
};

export const GunConfig: Record<GunOption, { 
    damage: number;
    fireRate: number;
    range: number;
    ammoCapacity: number;
}> = {
    Rifle: {
        damage: 30,
        fireRate: 100,
        range: 1000,
        ammoCapacity: 30,
    },
    SMG: {
        damage: 20,
        fireRate: 50,
        range: 1000,
        ammoCapacity: 60,
    },
    Shotgun: {
        damage: 15,
        fireRate: 300,
        range: 600,
        ammoCapacity: 8,
    },
    Sniper: {
        damage: 100,
        fireRate: 500,
        range: 5000,
        ammoCapacity: 10,
    },
};
