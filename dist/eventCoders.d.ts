import { GameEvents } from './events.js';
import { GameServerToClient } from './socket.js';
import { Vector3 } from 'three';
import { GunOption } from './userStats.js';
export type EncodedPlayerIds = string[];
export declare const arrayOfNumbersToFixed: (arr: number[]) => (string | number)[];
export declare const serializedGunMap: Record<GunOption, string>;
export declare const deserializeGunMap: {
    [k: string]: string;
};
export declare const serializedBoolMap: (value: true | false) => "0" | "1";
export declare const deserializeBoolMap: (value: string) => boolean;
export declare const encodeKeysPressedMap: (keysPressed: Record<string, boolean>) => string[];
export declare const encodeFireLaser: (gun: GunOption, data: Parameters<GameServerToClient['game:fireLaser']>['0']) => string;
export declare const encodeFireLaserHit: (data: Parameters<GameServerToClient['game:fireLaserHit']>['0']) => string;
export declare const encodePlayerStatus: (data: Parameters<GameServerToClient['game:playerStatus']>['0']) => string;
export declare const encodeCharacterMove: (data: Parameters<GameServerToClient['game:characterMove']>['0']) => string;
export declare const encodePlayerRespawn: (data: Parameters<GameServerToClient['game:playerRespawn']>['0']) => string;
export declare const encodePlayerSwitchWeapon: (data: Parameters<GameServerToClient['game:playerSwitchWeapon']>['0']) => string;
export declare const encodePlayerReloadWeaponFired: (data: Parameters<GameServerToClient['game:playerReloadWeaponFired']>['0']) => string;
export declare const encodePlayerReloadWeaponComplete: (data: Parameters<GameServerToClient['game:playerReloadWeaponComplete']>['0']) => string;
export declare const encodeGameStarted: (data: Parameters<GameServerToClient['game:gameStarted']>['0']) => string;
export declare const encodeGameEnded: (data: Parameters<GameServerToClient['game:gameEnded']>['0']) => string;
export declare const encodeUserDisconnected: (data: Parameters<GameServerToClient['game:userDisconnected']>['0']) => string;
export declare const decodePlayerStatus: (value: string) => {
    event: GameEvents;
    playerId: string | undefined;
    health: number;
    dead: boolean;
    gun: "AK-47" | "AKMS" | "AK-101" | "M4 Rifle" | "M4 Carbine" | "M4 Commando" | "Browning HP" | "P226" | "G18" | "M9" | "Desert Eagle" | ".357 Magnum" | "44 Magnum" | "S&W Model 36" | "Model 29" | "Mossberg 590" | "W1200" | "Sawed Off" | "Remington 870" | "M24" | "L96A1" | "N2 SRS" | "MP5K" | "MP5" | "MP7" | "UMP";
};
export declare const decodeCharacterMove: (data: string) => {
    event: GameEvents;
    socketId: string | undefined;
    position: number[];
    rotation: number[];
    cameraRotation: number[];
    keysPressed: any;
};
export declare const decodeFireLaser: (value: string) => {
    event: GameEvents;
    gun: "AK-47" | "AKMS" | "AK-101" | "M4 Rifle" | "M4 Carbine" | "M4 Commando" | "Browning HP" | "P226" | "G18" | "M9" | "Desert Eagle" | ".357 Magnum" | "44 Magnum" | "S&W Model 36" | "Model 29" | "Mossberg 590" | "W1200" | "Sawed Off" | "Remington 870" | "M24" | "L96A1" | "N2 SRS" | "MP5K" | "MP5" | "MP7" | "UMP";
    senderuuid: string | undefined;
    position: [number, number, number];
    rotation: [number, number, number];
    start: Vector3;
    hitPoint: Vector3;
    name: string;
} | undefined;
export declare const decodeFireLaserHit: (value: string) => {
    event: GameEvents;
    hitPlayerID: string | undefined;
    hitPlayerHealth: number;
    laserShooterID: string | undefined;
};
export declare const decodePlayerRespawn: (value: string) => {
    event: GameEvents;
    playerId: string;
};
export declare const decodePlayerSwitchWeapon: (value: string) => {
    event: GameEvents;
    playerId: string | undefined;
    gun: "AK-47" | "AKMS" | "AK-101" | "M4 Rifle" | "M4 Carbine" | "M4 Commando" | "Browning HP" | "P226" | "G18" | "M9" | "Desert Eagle" | ".357 Magnum" | "44 Magnum" | "S&W Model 36" | "Model 29" | "Mossberg 590" | "W1200" | "Sawed Off" | "Remington 870" | "M24" | "L96A1" | "N2 SRS" | "MP5K" | "MP5" | "MP7" | "UMP";
};
export declare const decodePlayerReloadWeaponFired: (value: string) => {
    event: GameEvents;
    playerId: string;
};
export declare const decodePlayerReloadWeaponComplete: (value: string) => {
    event: GameEvents;
    playerId: string | undefined;
    gunAmmo: number;
};
export declare const decodeGameStarted: (value: string) => {
    event: GameEvents;
    lobbyID: string;
};
export declare const decodeGameEnded: (value: string) => {
    event: GameEvents;
    lobbyID: string;
};
export declare const decodeUserDisconnected: (value: string) => {
    event: GameEvents;
    playerId: string;
};
