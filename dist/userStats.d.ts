export declare const _gunOptions: readonly ["AK-47", "AKMS", "AK-101", "M4 Rifle", "M4 Carbine", "M4 Commando", "Browning HP", "P226", "G18", "M9", "Desert Eagle", ".357 Magnum", "44 Magnum", "S&W Model 36", "Model 29", "Mossberg 590", "W1200", "Sawed Off", "Remington 870", "M24", "L96A1", "N2 SRS", "MP5-5K", "MP5", "MP7", "UMP"];
export type GunOption = (typeof _gunOptions)[number];
export type UserStatsType = {
    username: string;
    userUid: string;
    kills: number;
    deaths: number;
    loadout: GunOption;
    skin: string;
};
export declare const GunConfig: Record<GunOption, {
    damage: number;
    fireRate: number;
    range: number;
    ammoCapacity: number;
    requiresLevel: number;
    type: 'Assault Rifle' | 'Pistol' | 'Revolver' | 'Shotgun' | 'Sniper Rifle' | 'Submachine Gun';
}>;
