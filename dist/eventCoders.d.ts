import { GameEvents } from "./events.js";
import { RoundStates } from "./lobby.js";
import { GameServerToClient } from "./socket.js";
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
export declare const encodeFireLaser: (gun: GunOption, data: Parameters<GameServerToClient['game:fireLaser']>['0']) => string;
export declare const encodeFireLaserHit: (data: Parameters<GameServerToClient['game:fireLaserHit']>['0']) => string;
export declare const encodeFireLaserHitZombie: (data: Parameters<GameServerToClient['game:fireLaserHitZombie']>['0']) => string;
export declare const encodePlayerStatus: (data: Parameters<GameServerToClient['game:playerStatus']>['0']) => string;
export declare const encodeCharacterMove: (data: Parameters<GameServerToClient['game:characterMove']>['0']) => string;
export declare const encodePlayerRespawn: (data: Parameters<GameServerToClient['game:playerRespawn']>['0']) => string;
export declare const encodePlayerSwitchWeapon: (data: Parameters<GameServerToClient['game:playerSwitchWeapon']>['0']) => string;
export declare const encodePlayerReloadWeaponFired: (data: Parameters<GameServerToClient['game:playerReloadWeaponFired']>['0']) => string;
export declare const encodePlayerReloadWeaponComplete: (data: Parameters<GameServerToClient['game:playerReloadWeaponComplete']>['0']) => string;
export declare const encodeGetEntitiesCallback: (data: Parameters<GameServerToClient['game:getEntitiesCallback']>['0']) => string;
export declare const encodePlayerBuyItem: (data: Parameters<GameServerToClient['game:playerBuyItem']>['0']) => string;
export declare const encodeGameStarted: (data: Parameters<GameServerToClient['game:gameStarted']>['0']) => string;
export declare const encodeGameEnded: (data: Parameters<GameServerToClient['game:gameEnded']>['0']) => string;
export declare const encodeEntities: (data: Parameters<GameServerToClient['game:entities']>['0']) => string;
export declare const encodeZombieRoundUpdate: (data: Parameters<GameServerToClient['game:zombieRoundUpdate']>['0']) => string;
export declare const encodeUserDisconnected: (data: Parameters<GameServerToClient['game:userDisconnected']>['0']) => string;
export declare const encodeZombieAttack: (data: Parameters<GameServerToClient['game:zombieAttack']>['0']) => string;
export declare const encodePointsUpdate: (data: Parameters<GameServerToClient['game:pointsUpdate']>['0']) => string;
export declare const decodePlayerStatus: (value: string) => {
    event: GameEvents;
    playerId: string;
    health: number;
    dead: boolean;
    gun: "AK-47" | "AKMS" | "AK-101" | "M4 Rifle" | "M4 Carbine" | "M4 Commando" | "Browning HP" | "P226" | "G18" | "M9" | "Desert Eagle" | ".357 Magnum" | "44 Magnum" | "S&W Model 36" | "Model 29" | "Mossberg 590" | "W1200" | "Sawed Off" | "Remington 870" | "M24" | "L96A1" | "N2 SRS" | "MP5K" | "MP5" | "MP7" | "UMP";
};
export declare const decodeCharacterMove: (data: string) => {
    event: GameEvents;
    socketId: string;
    position: number[];
    rotation: number[];
    cameraRotation: number[];
    keysPressed: any;
};
export declare const decodeFireLaser: (value: string) => {
    event: GameEvents;
    gun: "AK-47" | "AKMS" | "AK-101" | "M4 Rifle" | "M4 Carbine" | "M4 Commando" | "Browning HP" | "P226" | "G18" | "M9" | "Desert Eagle" | ".357 Magnum" | "44 Magnum" | "S&W Model 36" | "Model 29" | "Mossberg 590" | "W1200" | "Sawed Off" | "Remington 870" | "M24" | "L96A1" | "N2 SRS" | "MP5K" | "MP5" | "MP7" | "UMP";
    senderuuid: string;
    position: [number, number, number];
    rotation: [number, number, number];
    start: Vector3;
    hitPoint: Vector3;
    name: string;
} | undefined;
export declare const decodeFireLaserHit: (value: string) => {
    event: GameEvents;
    hitPlayerID: string;
    hitPlayerHealth: number;
    laserShooterID: string;
};
export declare const decodeFireLaserHitZombie: (value: string) => {
    event: GameEvents;
    laserShooterID: string;
    hitZombieID: string;
};
export declare const decodePlayerRespawn: (value: string) => {
    event: GameEvents;
    playerId: string;
};
export declare const decodePlayerSwitchWeapon: (value: string) => {
    event: GameEvents;
    playerId: string;
    gun: "AK-47" | "AKMS" | "AK-101" | "M4 Rifle" | "M4 Carbine" | "M4 Commando" | "Browning HP" | "P226" | "G18" | "M9" | "Desert Eagle" | ".357 Magnum" | "44 Magnum" | "S&W Model 36" | "Model 29" | "Mossberg 590" | "W1200" | "Sawed Off" | "Remington 870" | "M24" | "L96A1" | "N2 SRS" | "MP5K" | "MP5" | "MP7" | "UMP";
};
export declare const decodePlayerReloadWeaponFired: (value: string) => {
    event: GameEvents;
    playerId: string;
};
export declare const decodePlayerReloadWeaponComplete: (value: string) => {
    event: GameEvents;
    playerId: string;
    gunAmmo: number;
};
export declare const decodeGetEntitiesCallback: (value: string) => {
    event: GameEvents;
    entities: any;
};
export declare const decodePlayerBuyItem: (value: string) => {
    event: GameEvents;
    lobbyID: string;
    playerId: string;
    itemID: string;
};
export declare const decodeGameStarted: (value: string) => {
    event: GameEvents;
    lobbyID: string;
};
export declare const decodeGameEnded: (value: string) => {
    event: GameEvents;
    lobbyID: string;
};
export declare const decodeEntities: (value: string) => {
    event: GameEvents;
    entities: any;
};
export declare const decodeZombieRoundUpdate: (value: string) => {
    event: GameEvents;
    round: number;
};
export declare const decodeUserDisconnected: (value: string) => {
    event: GameEvents;
    playerId: string;
};
export declare const decodeZombieAttack: (value: string) => {
    event: GameEvents;
    zombieID: string;
};
export declare const decodePointsUpdate: (value: string) => {
    event: GameEvents;
    points: Record<string, number>;
};
