import { RoundStates } from "./lobby.js";
import { ServerToClient } from "./socket.js";
import { Vector3 } from "three";
import { GunOption } from "./userStats.js";
export declare const arrayOfNumbersToFixed: (arr: number[]) => (string | number)[];
export declare const serializedGunMap: Record<GunOption, string>;
export declare const deserializeGunMap: {
    [k: string]: string;
};
export declare const serializedBoolMap: (value: true | false) => "0" | "1";
export declare const deserializeBoolMap: (value: string) => boolean;
export declare const serializedRoundStateMap: Record<RoundStates, string>;
export declare const deserializeRoundStateMap: {
    [k: string]: string;
};
export declare const encodeFireLaser: (gun: GunOption, data: Parameters<ServerToClient['game:fireLaser']>['0']) => string;
export declare const encodeFireLaserHit: (data: Parameters<ServerToClient['game:fireLaserHit']>['0']) => string;
export declare const encodeFireLaserHitZombie: (data: Parameters<ServerToClient['game:fireLaserHitZombie']>['0']) => string;
export declare const encodePlayerStatus: (data: Parameters<ServerToClient['game:playerStatus']>['0']) => string;
export declare const encodeCharacterMove: (data: Parameters<ServerToClient['game:characterMove']>['0']) => string;
export declare const encodePlayerRespawn: (data: Parameters<ServerToClient['game:playerRespawn']>['0']) => string;
export declare const encodePlayerSwitchWeapon: (data: Parameters<ServerToClient['game:playerSwitchWeapon']>['0']) => string;
export declare const encodePlayerReloadWeaponFired: (data: Parameters<ServerToClient['game:playerReloadWeaponFired']>['0']) => string;
export declare const encodePlayerReloadWeaponComplete: (data: Parameters<ServerToClient['game:playerReloadWeaponComplete']>['0']) => string;
export declare const encodeGetEntitiesCallback: (data: Parameters<ServerToClient['game:getEntitiesCallback']>['0']) => string;
export declare const encodePlayerBuyItem: (data: Parameters<ServerToClient['game:playerBuyItem']>['0']) => string;
export declare const encodeGameStarted: (data: Parameters<ServerToClient['game:gameStarted']>['0']) => string;
export declare const encodeGameEnded: (data: Parameters<ServerToClient['game:gameEnded']>['0']) => string;
export declare const encodeEntities: (data: Parameters<ServerToClient['game:entities']>['0']) => string;
export declare const encodeZombieRoundUpdate: (data: Parameters<ServerToClient['game:zombieRoundUpdate']>['0']) => string;
export declare const encodeUserDisconnected: (data: Parameters<ServerToClient['game:userDisconnected']>['0']) => string;
export declare const encodeZombieAttack: (data: Parameters<ServerToClient['game:zombieAttack']>['0']) => string;
export declare const encodePointsUpdate: (data: Parameters<ServerToClient['game:pointsUpdate']>['0']) => string;
export declare const decodePlayerStatus: (value: string) => {
    playerId: string;
    health: number;
    dead: boolean;
};
export declare const decodeCharacterMove: (data: string) => {
    socketId: string;
    position: number[];
    rotation: number[];
    cameraRotation: number[];
    keysPressed: any;
};
export declare const decodeFireLaser: (value: string) => {
    gun: "AK-47" | "AKMS" | "AK-101" | "M4 Rifle" | "M4 Carbine" | "M4 Commando" | "Browning HP" | "P226" | "G18" | "M9" | "Desert Eagle" | ".357 Magnum" | "44 Magnum" | "S&W Model 36" | "Model 29" | "Mossberg 590" | "W1200" | "Sawed Off" | "Remington 870" | "M24" | "L96A1" | "N2 SRS" | "MP5K" | "MP5" | "MP7" | "UMP";
    senderuuid: string;
    position: [number, number, number];
    rotation: [number, number, number];
    start: Vector3;
    hitPoint: Vector3;
    name: string;
} | undefined;
export declare const decodeFireLaserHit: (value: string) => {
    hitPlayerID: string;
    hitPlayerHealth: number;
    laserShooterID: string;
};
export declare const decodeFireLaserHitZombie: (value: string) => {
    laserShooterID: string;
    hitZombieID: string;
};
export declare const decodePlayerRespawn: (value: string) => {
    playerId: string;
};
export declare const decodePlayerSwitchWeapon: (value: string) => {
    playerId: string;
    gun: "AK-47" | "AKMS" | "AK-101" | "M4 Rifle" | "M4 Carbine" | "M4 Commando" | "Browning HP" | "P226" | "G18" | "M9" | "Desert Eagle" | ".357 Magnum" | "44 Magnum" | "S&W Model 36" | "Model 29" | "Mossberg 590" | "W1200" | "Sawed Off" | "Remington 870" | "M24" | "L96A1" | "N2 SRS" | "MP5K" | "MP5" | "MP7" | "UMP";
};
export declare const decodePlayerReloadWeaponFired: (value: string) => {
    playerId: string;
};
export declare const decodePlayerReloadWeaponComplete: (value: string) => {
    playerId: string;
    gunAmmo: number;
};
export declare const decodeGetEntitiesCallback: (value: string) => {
    entities: any;
};
export declare const decodePlayerBuyItem: (value: string) => {
    lobbyID: string;
    playerId: string;
    itemID: string;
};
export declare const decodeGameStarted: (value: string) => {
    lobbyID: string;
};
export declare const decodeGameEnded: (value: string) => {
    lobbyID: string;
};
export declare const decodeEntities: (value: string) => {
    entities: any;
};
export declare const decodeZombieRoundUpdate: (value: string) => {
    round: number;
};
export declare const decodeUserDisconnected: (value: string) => {
    playerId: string;
};
export declare const decodeZombieAttack: (value: string) => {
    zombie: any;
};
export declare const decodePointsUpdate: (value: string) => {
    points: number;
};
