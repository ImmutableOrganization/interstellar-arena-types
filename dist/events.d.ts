import { encodeFireLaser, encodeFireLaserHit, encodeFireLaserHitZombie, encodeCharacterMove, encodePlayerStatus, encodePlayerRespawn, encodePlayerSwitchWeapon, encodePlayerReloadWeaponFired, encodePlayerReloadWeaponComplete, encodeGetEntitiesCallback, encodePlayerBuyItem, encodeGameStarted, encodeGameEnded, encodeEntities, encodeZombieRoundUpdate, encodeUserDisconnected, encodeZombieAttack, encodePointsUpdate } from "./eventCoders.js";
import { GameServerToClient } from "./socket.js";
export declare enum EventConstants {
    END_OF_EVENT = "|"
}
export declare enum SocketEvents {
    Game = "game",
    Lobbies = "lobbies",
    Error = "error",
    Tick = "tick"
}
export declare enum SerializedSocketEvents {
    Game = "0",
    Lobbies = "1",
    Error = "2",
    Tick = "3"
}
export declare enum GameEvents {
    FireLaser = "fireLaser",
    FireLaserHit = "fireLaserHit",
    FireLaserHitZombie = "fireLaserHitZombie",
    CharacterMove = "characterMove",
    PlayerRespawn = "playerRespawn",
    PlayerSwitchWeapon = "playerSwitchWeapon",
    PlayerReloadWeaponFired = "playerReloadWeaponFired",
    PlayerReloadWeaponComplete = "playerReloadWeaponComplete",
    GetEntitiesCallback = "getEntitiesCallback",
    PlayerBuyItem = "playerBuyItem",
    GameStarted = "gameStarted",
    GameEnded = "gameEnded",
    Entities = "entities",
    ZombieRoundUpdate = "zombieRoundUpdate",
    UserDisconnected = "userDisconnected",
    PlayerStatus = "playerStatus",
    ZombieAttack = "zombieAttack",
    PointsUpdate = "pointsUpdate"
}
export declare enum SerializedGameEvents {
    FireLaser = "00",
    FireLaserHit = "01",
    FireLaserHitZombie = "02",
    CharacterMove = "03",
    PlayerRespawn = "04",
    PlayerSwitchWeapon = "05",
    PlayerReloadWeaponFired = "06",
    PlayerReloadWeaponComplete = "07",
    GetEntitiesCallback = "08",
    PlayerBuyItem = "09",
    GameStarted = "10",
    GameEnded = "11",
    Entities = "12",
    ZombieRoundUpdate = "13",
    UserDisconnected = "14",
    PlayerStatus = "15",
    ZombieAttack = "16",
    PointsUpdate = "17"
}
export declare enum LobbyEvents {
    CreatedLobby = "createdLobby",
    JoinedLobby = "joinedLobby",
    NewPlayerJoinedLobby = "newPlayerJoinedLobby",
    LeftLobby = "leftLobby",
    GetLobbiesCallback = "getLobbiesCallback"
}
export declare enum SerializedLobbyEvents {
    CreatedLobby = "00",
    JoinedLobby = "01",
    NewPlayerJoinedLobby = "02",
    LeftLobby = "03",
    GetLobbiesCallback = "04"
}
export declare enum ErrorEvents {
    LobbyIdAlreadyExists = "lobbyIdAlreadyExists",
    LobbyNotFound = "lobbyNotFound",
    PlayerNotInLobby = "playerNotInLobby",
    LobbyFull = "lobbyFull",
    PlayerInLobbyAlready = "playerInLobbyAlready",
    NoLobbyFound = "no lobby found",
    NoPlayerFound = "no player found",
    Dead = "dead"
}
export declare enum SerializedErrorEvents {
    LobbyIdAlreadyExists = "0",
    LobbyNotFound = "1",
    PlayerNotInLobby = "2",
    LobbyFull = "3",
    PlayerInLobbyAlready = "4",
    NoLobbyFound = "5",
    NoPlayerFound = "6",
    Dead = "7"
}
export type SerializedEvent = SerializedGameEvents | SerializedLobbyEvents | SerializedErrorEvents;
export declare const serializedEventMap: Record<keyof GameServerToClient, string>;
export type SerializedTickEvent = `${SerializedSocketEvents.Tick}${EventConstants.END_OF_EVENT}${string}`;
type EncoderFunction = typeof encodeFireLaser | typeof encodeFireLaserHit | typeof encodeFireLaserHitZombie | typeof encodeCharacterMove | typeof encodePlayerStatus | typeof encodePlayerRespawn | typeof encodePlayerSwitchWeapon | typeof encodePlayerReloadWeaponFired | typeof encodePlayerReloadWeaponComplete | typeof encodeGetEntitiesCallback | typeof encodePlayerBuyItem | typeof encodeGameStarted | typeof encodeGameEnded | typeof encodeEntities | typeof encodeZombieRoundUpdate | typeof encodeUserDisconnected | typeof encodeZombieAttack | typeof encodePointsUpdate;
export declare const encodeEventMap: Record<GameEvents, EncoderFunction>;
export declare const encodeEvent: (event: keyof GameServerToClient) => string;
export declare function encodeEncodedEvents(events: SerializedEvent[]): SerializedTickEvent;
export declare const decodeEncodedEvents: (combinedEvents: SerializedTickEvent) => ({
    event: GameEvents;
    gun: "AK-47" | "AKMS" | "AK-101" | "M4 Rifle" | "M4 Carbine" | "M4 Commando" | "Browning HP" | "P226" | "G18" | "M9" | "Desert Eagle" | ".357 Magnum" | "44 Magnum" | "S&W Model 36" | "Model 29" | "Mossberg 590" | "W1200" | "Sawed Off" | "Remington 870" | "M24" | "L96A1" | "N2 SRS" | "MP5K" | "MP5" | "MP7" | "UMP";
    senderuuid: string;
    position: [number, number, number];
    rotation: [number, number, number];
    start: import("three").Vector3;
    hitPoint: import("three").Vector3;
    name: string;
} | {
    event: GameEvents;
    socketId: string;
    position: number[];
    rotation: number[];
    cameraRotation: number[];
    keysPressed: any;
} | {
    event: GameEvents;
    hitPlayerID: string;
    hitPlayerHealth: number;
    laserShooterID: string;
} | {
    event: GameEvents;
    laserShooterID: string;
    hitZombieID: string;
} | {
    event: GameEvents;
    playerId: string;
} | {
    event: GameEvents;
    entities: any;
} | {
    event: GameEvents;
    lobbyID: string;
} | {
    event: GameEvents;
    round: number;
} | {
    event: GameEvents;
    zombie: any;
} | {
    event: GameEvents;
    points: number;
} | undefined)[];
export {};
