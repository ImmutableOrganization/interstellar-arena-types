import { encodeFireLaser, encodeFireLaserHit, encodeCharacterMove, encodePlayerStatus, encodePlayerRespawn, encodePlayerSwitchWeapon, encodePlayerReloadWeaponFired, encodePlayerReloadWeaponComplete, encodeGameStarted, encodeGameEnded, encodeUserDisconnected, decodeFireLaser, decodeCharacterMove, decodePlayerStatus, decodeFireLaserHit, decodePlayerRespawn, decodePlayerSwitchWeapon, decodePlayerReloadWeaponFired, decodePlayerReloadWeaponComplete, decodeGameStarted, decodeGameEnded, decodeUserDisconnected } from './eventCoders.js';
import { GameServerToClient } from './socket.js';
export declare enum EventConstants {
    END_OF_EVENT = "|"
}
export declare enum SocketEvents {
    Game = "game",
    Error = "error",
    Tick = "tick"
}
export declare enum SerializedSocketEvents {
    Game = "0",
    Error = "2",
    Tick = "3"
}
export declare enum GameEvents {
    FireLaser = "fireLaser",
    FireLaserHit = "fireLaserHit",
    CharacterMove = "characterMove",
    PlayerRespawn = "playerRespawn",
    PlayerSwitchWeapon = "playerSwitchWeapon",
    PlayerReloadWeaponFired = "playerReloadWeaponFired",
    PlayerReloadWeaponComplete = "playerReloadWeaponComplete",
    GameStarted = "gameStarted",
    GameEnded = "gameEnded",
    UserDisconnected = "userDisconnected",
    PlayerStatus = "playerStatus"
}
export declare enum SerializedGameEvents {
    FireLaser = "00",
    FireLaserHit = "01",
    CharacterMove = "03",
    PlayerRespawn = "04",
    PlayerSwitchWeapon = "05",
    PlayerReloadWeaponFired = "06",
    PlayerReloadWeaponComplete = "07",
    GameStarted = "10",
    GameEnded = "11",
    UserDisconnected = "14",
    PlayerStatus = "15"
}
export declare enum ErrorEvents {
    LobbyNotFound = "lobbyNotFound",
    PlayerNotInLobby = "playerNotInLobby",
    LobbyFull = "lobbyFull",
    PlayerInLobbyAlready = "playerInLobbyAlready",
    NoLobbyFound = "no lobby found",
    NoPlayerFound = "no player found",
    Dead = "dead"
}
export declare enum SerializedErrorEvents {
    LobbyFull = "3",
    NoPlayerFound = "6",
    Dead = "7"
}
export type SerializedEvent = SerializedGameEvents | SerializedErrorEvents;
export declare const serializedEventMap: Record<keyof GameServerToClient, string>;
export type SerializedTickEvent = `${SerializedSocketEvents.Tick}${EventConstants.END_OF_EVENT}${string}`;
type EncoderFunction = typeof encodeFireLaser | typeof encodeFireLaserHit | typeof encodeCharacterMove | typeof encodePlayerStatus | typeof encodePlayerRespawn | typeof encodePlayerSwitchWeapon | typeof encodePlayerReloadWeaponFired | typeof encodePlayerReloadWeaponComplete | typeof encodeGameStarted | typeof encodeGameEnded | typeof encodeUserDisconnected;
type DecoderFunction = typeof decodeFireLaser | typeof decodeCharacterMove | typeof decodePlayerStatus | typeof decodeFireLaserHit | typeof decodePlayerRespawn | typeof decodePlayerSwitchWeapon | typeof decodePlayerReloadWeaponFired | typeof decodePlayerReloadWeaponComplete | typeof decodeGameStarted | typeof decodeGameEnded | typeof decodeUserDisconnected;
export declare const decodeEventMap: Record<SerializedGameEvents, DecoderFunction>;
export declare const encodeEventMap: Record<GameEvents, EncoderFunction>;
export declare const encodeEvent: (event: keyof GameServerToClient) => string;
export declare function encodeEncodedEvents(events: SerializedEvent[]): SerializedTickEvent;
export declare const decodeEncodedEvents: (combinedEvents: SerializedTickEvent) => ({
    event: GameEvents;
    gun: "AK-47" | "AKMS" | "AK-101" | "M4 Rifle" | "M4 Carbine" | "M4 Commando" | "Browning HP" | "P226" | "G18" | "M9" | "Desert Eagle" | ".357 Magnum" | "44 Magnum" | "S&W Model 36" | "Model 29" | "Mossberg 590" | "W1200" | "Sawed Off" | "Remington 870" | "M24" | "L96A1" | "N2 SRS" | "MP5K" | "MP5" | "MP7" | "UMP";
    senderuuid: string | undefined;
    position: [number, number, number];
    rotation: [number, number, number];
    start: import("three").Vector3;
    hitPoint: import("three").Vector3;
    name: string;
} | {
    event: GameEvents;
    socketId: string | undefined;
    position: number[];
    rotation: number[];
    cameraRotation: number[];
    keysPressed: any;
} | {
    event: GameEvents;
    hitPlayerID: string | undefined;
    hitPlayerHealth: number;
    laserShooterID: string | undefined;
} | {
    event: GameEvents;
    playerId: string;
} | {
    event: GameEvents;
    playerId: string | undefined;
    gun: "AK-47" | "AKMS" | "AK-101" | "M4 Rifle" | "M4 Carbine" | "M4 Commando" | "Browning HP" | "P226" | "G18" | "M9" | "Desert Eagle" | ".357 Magnum" | "44 Magnum" | "S&W Model 36" | "Model 29" | "Mossberg 590" | "W1200" | "Sawed Off" | "Remington 870" | "M24" | "L96A1" | "N2 SRS" | "MP5K" | "MP5" | "MP7" | "UMP";
} | {
    event: GameEvents;
    playerId: string | undefined;
    gunAmmo: number;
} | {
    event: GameEvents;
    lobbyID: string;
} | undefined)[];
export {};
