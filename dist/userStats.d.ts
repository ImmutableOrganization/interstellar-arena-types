export declare const _gunOptions: readonly ["AssaultRifle_1", "AssaultRifle_2", "AssaultRifle_3", "AssaultRifle_4", "AssaultRifle_5", "AssaultRifle2_1", "AssaultRifle2_2", "AssaultRifle2_3", "AssaultRifle2_4", "Bullpup_1", "Bullpup_2", "Pistol_1", "Pistol_2", "Pistol_3", "Pistol_4", "Pistol_5", "Pistol_6", "Revolver_1", "Revolver_2", "Revolver_3", "Revolver_4", "Revolver_5", "Shotgun_1", "Shotgun_2", "Shotgun_3", "Shotgun_4", "Shotgun_SawedOff", "Shotgun_ShortStock", "SniperRifle_1", "SniperRifle_2", "SniperRifle_3", "SniperRifle_4", "SniperRifle_5", "SniperRifle_6", "SubmachineGun_1", "SubmachineGun_2", "SubmachineGun_3", "SubmachineGun_4", "SubmachineGun_5"];
export type GunOption = (typeof _gunOptions)[number];
export type UserStatsType = {
    username: string;
    userUid: string;
    kills: number;
    deaths: number;
    loadout: GunOption;
};
export declare const GunConfig: Record<GunOption, {
    damage: number;
    fireRate: number;
    range: number;
    ammoCapacity: number;
}>;
