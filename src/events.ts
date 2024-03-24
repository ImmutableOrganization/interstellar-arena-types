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
  export  type PlayerBuyItemParams = {
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
  export  type PlayerRespawnParams = {
    _player: lobby['players'][string];
    _laserShooterID: string;
    _scoreboard: lobby['scoreBoard'];
  };
  export type GetEntitiesCallbackParams = {
    entities: lobby['entities'];
  };
  export  type EntitiesParams = {
    added: SpawnableEntity[];
    removed: string[];
    modified: Record<string, Partial<SpawnableEntity>>;
  };
  export  type ScoreBoardUpdateParams = {
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
  } & LobbyServerToClient &
    GameServerToClient &
    {
      'error:lobbyIdAlreadyExists': () => void;
      'error:lobbyNotFound': () => void;
      'error:playerNotInLobby': () => void;
      'error:lobbyFull': () => void;
      'error:playerInLobbyAlready': () => void;
      'error:no lobby found': () => void;
      'error:no player found': () => void;
      'error:dead': () => void;
    };

  export enum SocketEvents {
    Game = 'game',
    Lobbies = 'lobbies',
    Error = 'error',
  }
  export enum GameEvents {
    FireLaser = 'fireLaser',
    FireLaserHit = 'fireLaserHit',
    FireLaserHitZombie = 'fireLaserHitZombie',
    CharacterMove = 'characterMove',
    PlayerRespawn = 'playerRespawn',
    PlayerSwitchWeapon = 'playerSwitchWeapon',
    PlayerReloadWeaponFired = 'playerReloadWeaponFired',
    PlayerReloadWeaponComplete = 'playerReloadWeaponComplete',
    GetEntitiesCallback = 'getEntitiesCallback',
    PlayerBuyItem = 'playerBuyItem',
    GameStarted = 'gameStarted',
    GameEnded = 'gameEnded',
    Entities = 'entities',
    ZombieRoundUpdate = 'zombieRoundUpdate',
    UserDisconnected = 'userDisconnected',
    PlayerStatus = 'playerStatus',
    ZombieAttack = 'zombieAttack',
    ScoreBoardUpdate = 'scoreBoardUpdate',
    PointsUpdate = 'pointsUpdate',
  }
  
  export  enum SerializedSocketEvents {
    Game = '0',
    Lobbies = '1',
    Error = '2',
  }
  
  export enum SerializedGameEvents {
    FireLaser = '00',
    FireLaserHit = '01',
    FireLaserHitZombie = '02',
    CharacterMove = '03',
    PlayerRespawn = '04',
    PlayerSwitchWeapon = '05',
    PlayerReloadWeaponFired = '06',
    PlayerReloadWeaponComplete = '07',
    GetEntitiesCallback = '08',
    PlayerBuyItem = '09',
    GameStarted = '10',
    GameEnded = '11',
    Entities = '12',
    ZombieRoundUpdate = '13',
    UserDisconnected = '14',
    PlayerStatus = '15',
    ZombieAttack = '16',
    ScoreBoardUpdate = '17',
    PointsUpdate = '18',
  }
  
  export enum LobbyEvents {
    CreatedLobby = 'createdLobby',
    JoinedLobby = 'joinedLobby',
    NewPlayerJoinedLobby = 'newPlayerJoinedLobby',
    LeftLobby = 'leftLobby',
    GetLobbiesCallback = 'getLobbiesCallback',
  }
  
  export enum SerializedLobbyEvents {
    CreatedLobby = '00',
    JoinedLobby = '01',
    NewPlayerJoinedLobby = '02',
    LeftLobby = '03',
    GetLobbiesCallback = '04',
  }
  
  export  enum SerializedErrorEvents {
    LobbyIdAlreadyExists = '0',
    LobbyNotFound = '1',
    PlayerNotInLobby = '2',
    LobbyFull = '3',
    PlayerInLobbyAlready = '4',
    NoLobbyFound = '5',
    NoPlayerFound = '6',
    Dead = '7',
  }
  
  export  enum ErrorEvents {
    LobbyIdAlreadyExists = 'lobbyIdAlreadyExists',
    LobbyNotFound = 'lobbyNotFound',
    PlayerNotInLobby = 'playerNotInLobby',
    LobbyFull = 'lobbyFull',
    PlayerInLobbyAlready = 'playerInLobbyAlready',
    NoLobbyFound = 'no lobby found',
    NoPlayerFound = 'no player found',
    Dead = 'dead',
  }
  
  export type SerializedEvent =
    | `${SerializedSocketEvents.Game}${SerializedGameEvents}`
    | `${SerializedSocketEvents.Lobbies}${SerializedLobbyEvents}`
    | `${SerializedSocketEvents.Error}${SerializedErrorEvents}`;
  

  export const deserializedEventMap: Record<SerializedEvent, keyof ServerToClient> = {
    '000': `${SocketEvents.Game}:${GameEvents.FireLaser}` as const,
    '001': `${SocketEvents.Game}:${GameEvents.FireLaserHit}`,
    '002': `${SocketEvents.Game}:${GameEvents.FireLaserHitZombie}`,
    '003': `${SocketEvents.Game}:${GameEvents.CharacterMove}`,
    '004': `${SocketEvents.Game}:${GameEvents.PlayerRespawn}`,
    '005': `${SocketEvents.Game}:${GameEvents.PlayerSwitchWeapon}`,
    '006': `${SocketEvents.Game}:${GameEvents.PlayerReloadWeaponFired}`,
    '007': `${SocketEvents.Game}:${GameEvents.PlayerReloadWeaponComplete}`,
    '008': `${SocketEvents.Game}:${GameEvents.GetEntitiesCallback}`,
    '009': `${SocketEvents.Game}:${GameEvents.PlayerBuyItem}`,
    '010': `${SocketEvents.Game}:${GameEvents.GameStarted}`,
    '011': `${SocketEvents.Game}:${GameEvents.GameEnded}`,
    '012': `${SocketEvents.Game}:${GameEvents.Entities}`,
    '013': `${SocketEvents.Game}:${GameEvents.ZombieRoundUpdate}`,
    '014': `${SocketEvents.Game}:${GameEvents.UserDisconnected}`,
    '015': `${SocketEvents.Game}:${GameEvents.PlayerStatus}`,
    '016': `${SocketEvents.Game}:${GameEvents.ZombieAttack}`,
    '017': `${SocketEvents.Game}:${GameEvents.ScoreBoardUpdate}`,
    '018': `${SocketEvents.Game}:${GameEvents.PointsUpdate}`,
    '100': `${SocketEvents.Lobbies}:${LobbyEvents.CreatedLobby}`,
    '101': `${SocketEvents.Lobbies}:${LobbyEvents.JoinedLobby}`,
    '102': `${SocketEvents.Lobbies}:${LobbyEvents.NewPlayerJoinedLobby}`,
    '103': `${SocketEvents.Lobbies}:${LobbyEvents.LeftLobby}`,
    '104': `${SocketEvents.Lobbies}:${LobbyEvents.GetLobbiesCallback}`,
    '20': `${SocketEvents.Error}:${ErrorEvents.LobbyIdAlreadyExists}`,
    '21': `${SocketEvents.Error}:${ErrorEvents.LobbyNotFound}`,
    '22': `${SocketEvents.Error}:${ErrorEvents.PlayerNotInLobby}`,
    '23': `${SocketEvents.Error}:${ErrorEvents.LobbyFull}`,
    '24': `${SocketEvents.Error}:${ErrorEvents.PlayerInLobbyAlready}`,
    '25': `${SocketEvents.Error}:${ErrorEvents.NoLobbyFound}`,
    '26': `${SocketEvents.Error}:${ErrorEvents.NoPlayerFound}`,
    '27': `${SocketEvents.Error}:${ErrorEvents.Dead}`,
  } as const;
  
  export const serializedEventMap: Record<keyof ServerToClient, string> = {
    'game:fireLaser': SerializedSocketEvents.Game + SerializedGameEvents.FireLaser,
    'game:fireLaserHit': SerializedSocketEvents.Game + SerializedGameEvents.FireLaserHit,
    'game:fireLaserHitZombie': SerializedSocketEvents.Game + SerializedGameEvents.FireLaserHitZombie,
    'game:characterMove': SerializedSocketEvents.Game + SerializedGameEvents.CharacterMove,
    'game:playerRespawn': SerializedSocketEvents.Game + SerializedGameEvents.PlayerRespawn,
    'game:playerSwitchWeapon': SerializedSocketEvents.Game + SerializedGameEvents.PlayerSwitchWeapon,
    'game:playerReloadWeaponFired': SerializedSocketEvents.Game + SerializedGameEvents.PlayerReloadWeaponFired,
    'game:playerReloadWeaponComplete': SerializedSocketEvents.Game + SerializedGameEvents.PlayerReloadWeaponComplete,
    'game:getEntitiesCallback': SerializedSocketEvents.Game + SerializedGameEvents.GetEntitiesCallback,
    'game:playerBuyItem': SerializedSocketEvents.Game + SerializedGameEvents.PlayerBuyItem,
    'game:gameStarted': SerializedSocketEvents.Game + SerializedGameEvents.GameStarted,
    'game:gameEnded': SerializedSocketEvents.Game + SerializedGameEvents.GameEnded,
    'game:entities': SerializedSocketEvents.Game + SerializedGameEvents.Entities,
    'game:zombieRoundUpdate': SerializedSocketEvents.Game + SerializedGameEvents.ZombieRoundUpdate,
    'game:userDisconnected': SerializedSocketEvents.Game + SerializedGameEvents.UserDisconnected,
    'game:playerStatus': SerializedSocketEvents.Game + SerializedGameEvents.PlayerStatus,
    'game:zombieAttack': SerializedSocketEvents.Game + SerializedGameEvents.ZombieAttack,
    'game:scoreBoardUpdate': SerializedSocketEvents.Game + SerializedGameEvents.ScoreBoardUpdate,
    'game:pointsUpdate': SerializedSocketEvents.Game + SerializedGameEvents.PointsUpdate,
    'lobbies:createdLobby': SerializedSocketEvents.Lobbies + SerializedLobbyEvents.CreatedLobby,
    'lobbies:joinedLobby': SerializedSocketEvents.Lobbies + SerializedLobbyEvents.JoinedLobby,
    'lobbies:newPlayerJoinedLobby': SerializedSocketEvents.Lobbies + SerializedLobbyEvents.NewPlayerJoinedLobby,
    'lobbies:leftLobby': SerializedSocketEvents.Lobbies + SerializedLobbyEvents.LeftLobby,
    'lobbies:getLobbiesCallback': SerializedSocketEvents.Lobbies + SerializedLobbyEvents.GetLobbiesCallback,
    'error:lobbyIdAlreadyExists': SerializedSocketEvents.Error + SerializedErrorEvents.LobbyIdAlreadyExists,
    'error:lobbyNotFound': SerializedSocketEvents.Error + SerializedErrorEvents.LobbyNotFound,
    'error:playerNotInLobby': SerializedSocketEvents.Error + SerializedErrorEvents.PlayerNotInLobby,
    'error:lobbyFull': SerializedSocketEvents.Error + SerializedErrorEvents.LobbyFull,
    'error:playerInLobbyAlready': SerializedSocketEvents.Error + SerializedErrorEvents.PlayerInLobbyAlready,
    'error:no lobby found': SerializedSocketEvents.Error + SerializedErrorEvents.NoLobbyFound,
    'error:no player found': SerializedSocketEvents.Error + SerializedErrorEvents.NoPlayerFound,
    'error:dead': SerializedSocketEvents.Error + SerializedErrorEvents.Dead,
  } as const;
  
  export const eventSerializer = (event: keyof ServerToClient) => {
    return serializedEventMap[event];
  };
  
  export const serializedGunMap: Record<GunOption, string> = {
    '.357 Magnum': '00',
    '44 Magnum': '01',
    'AK-101': '02',
    'AK-47': '03',
    AKMS: '04',
    'Browning HP': '05',
    'Desert Eagle': '06',
    G18: '07',
    L96A1: '08',
    M24: '09',
    'M4 Carbine': '10',
    'M4 Commando': '11',
    'M4 Rifle': '12',
    M9: '13',
    MP5: '14',
    MP5K: '15',
    MP7: '16',
    'Model 29': '17',
    'Mossberg 590': '18',
    'N2 SRS': '19',
    P226: '20',
    'Remington 870': '21',
    'S&W Model 36': '22',
    'Sawed Off': '23',
    UMP: '24',
    W1200: '25',
  } as const;