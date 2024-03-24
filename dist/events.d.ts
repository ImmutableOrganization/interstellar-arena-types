import { Laser, SpawnableEntity } from "gameObjects.js";
import { lobby } from "lobby.js";
import { GunOption } from "userStats.js";
export type NewPlayerJoinedLobbyParams = {
    player: lobby['players'][string];
    scoreBoard: lobby['scoreBoard'];
};
export type LobbyServerToClient = {
    'lobbies:newPlayerJoinedLobby': (value: NewPlayerJoinedLobbyParams) => void;
    'lobbies:getLobbiesCallback': (value: Record<string, lobby>) => void;
    'lobbies:leftLobby': () => void;
    'lobbies:joinedLobby': (value: lobby) => void;
    'lobbies:createdLobby': (value: lobby) => void;
};
export type EntityChangeSet = {
    added: SpawnableEntity[];
    removed: string[];
    modified: Record<string, Partial<SpawnableEntity>>;
};
export type PlayerBuyItemParams = {
    playerId: string;
    item: GunOption;
    points: number;
};
export type SendCharacterMoveParams = {
    lobbyID: string;
    playerId: string;
    movement: {
        keysPressed: Record<string, boolean>;
        position: [number, number, number];
        rotation: [number, number, number];
        cameraRotation: [number, number, number];
    };
};
export type BuyItemParams = {
    lobbyID: string;
    playerId: string;
    itemID: string;
};
export type ReloadWeaponParams = {
    lobbyID: string;
    playerId: string;
};
export type FireLaserParams = {
    lobbyID: string;
    playerId: string;
};
export type ZombieAttackParams = {
    zombie: SpawnableEntity;
};
export type FireLaserHitZombieParams = {
    laserShooterID: string;
    hitZombieID: string;
};
export type FireLaserHitParams = {
    hitPlayerID: string;
    hitPlayerHealth: number;
    laserShooterID: string;
};
export type PlayerReloadWeaponFiredParams = {
    playerId: string;
};
export type PlayerReloadWeaponCompleteParams = {
    playerId: string;
    gunAmmo: number;
};
export type PlayerStatusParams = {
    playerId: string;
    health: number;
    dead: boolean;
};
export type PlayerSwitchWeaponParams = {
    playerId: string;
    gun: GunOption;
};
export type CharacterMoveParams = {
    socketId: string;
    keysPressed: Record<string, boolean>;
    position: [number, number, number];
    rotation: [number, number, number];
    cameraRotation: [number, number, number];
};
export type PlayerRespawnParams = {
    _player: lobby['players'][string];
    _laserShooterID: string;
    _scoreboard: lobby['scoreBoard'];
};
export type GetEntitiesCallbackParams = {
    entities: lobby['entities'];
};
export type EntitiesParams = {
    added: SpawnableEntity[];
    removed: string[];
    modified: Record<string, Partial<SpawnableEntity>>;
};
export type ScoreBoardUpdateParams = {
    scoreBoard: lobby['scoreBoard'];
};
export type GetEntitiesParams = {
    lobbyID: string;
};
export type GameServerToClient = {
    'game:playerBuyItem': (value: PlayerBuyItemParams) => void;
    'game:zombieAttack': (value: ZombieAttackParams) => void;
    'game:fireLaserHitZombie': (value: FireLaserHitZombieParams) => void;
    'game:fireLaserHit': (value: FireLaserHitParams) => void;
    'game:playerReloadWeaponFired': (value: PlayerReloadWeaponFiredParams) => void;
    'game:playerReloadWeaponComplete': (value: PlayerReloadWeaponCompleteParams) => void;
    'game:playerStatus': (value: PlayerStatusParams) => void;
    'game:playerSwitchWeapon': (value: PlayerSwitchWeaponParams) => void;
    'game:characterMove': (value: CharacterMoveParams) => void;
    'game:playerRespawn': (value: PlayerRespawnParams) => void;
    'game:fireLaser': (laser: Laser, ammo: number) => void;
    'game:pointsUpdate': (value: lobby['game']['zombie']['points']) => void;
    'game:zombieRoundUpdate': (value: lobby['game']['zombie']['roundData']) => void;
    'game:gameStarted': (value: lobby) => void;
    'game:gameEnded': (value: lobby) => void;
    'game:getEntitiesCallback': (value: GetEntitiesCallbackParams) => void;
    'game:entities': (value: EntitiesParams) => void;
    'game:scoreBoardUpdate': (value: ScoreBoardUpdateParams) => void;
};
export type ServerToClient = {
    'game:userDisconnected': (socketID: string) => void;
} & LobbyServerToClient & GameServerToClient & {
    'error:lobbyIdAlreadyExists': () => void;
    'error:lobbyNotFound': () => void;
    'error:playerNotInLobby': () => void;
    'error:lobbyFull': () => void;
    'error:playerInLobbyAlready': () => void;
    'error:no lobby found': () => void;
    'error:no player found': () => void;
    'error:dead': () => void;
};
export declare enum SocketEvents {
    Game = "game",
    Lobbies = "lobbies",
    Error = "error"
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
    ScoreBoardUpdate = "scoreBoardUpdate",
    PointsUpdate = "pointsUpdate"
}
export declare enum SerializedSocketEvents {
    Game = "0",
    Lobbies = "1",
    Error = "2"
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
    ScoreBoardUpdate = "17",
    PointsUpdate = "18"
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
export type SerializedEvent = `${SerializedSocketEvents.Game}${SerializedGameEvents}` | `${SerializedSocketEvents.Lobbies}${SerializedLobbyEvents}` | `${SerializedSocketEvents.Error}${SerializedErrorEvents}`;
export declare const deserializedEventMap: Record<SerializedEvent, keyof ServerToClient>;
export declare const serializedEventMap: Record<keyof ServerToClient, string>;
export declare const eventSerializer: (event: keyof ServerToClient) => string;
export declare const serializedGunMap: Record<GunOption, string>;
