import { encodeFireLaser, encodeFireLaserHit, encodeFireLaserHitZombie, encodeCharacterMove, encodePlayerStatus, encodePlayerRespawn, encodePlayerSwitchWeapon, encodePlayerReloadWeaponFired, encodePlayerReloadWeaponComplete, encodeGetEntitiesCallback, encodePlayerBuyItem, encodeGameStarted, encodeGameEnded, encodeEntities, encodeZombieRoundUpdate, encodeUserDisconnected, encodeZombieAttack, encodePointsUpdate, decodeFireLaser, decodeCharacterMove, decodePlayerStatus, decodeFireLaserHit, decodeFireLaserHitZombie, decodePlayerRespawn, decodePlayerSwitchWeapon, decodePlayerReloadWeaponFired, decodePlayerReloadWeaponComplete, decodeGetEntitiesCallback, decodePlayerBuyItem, decodeGameStarted, decodeGameEnded, decodeEntities, decodeZombieRoundUpdate, decodeUserDisconnected, decodeZombieAttack, decodePointsUpdate } from "eventCoders.js";
import { ServerToClient } from "socket.js";

export enum EventConstants {
  END_OF_EVENT = '|',
}

export enum SocketEvents {
  Game = 'game',
  Lobbies = 'lobbies',
  Error = 'error',
  Tick = 'tick',
}

export enum SerializedSocketEvents {
  Game = '0',
  Lobbies = '1',
  Error = '2',
  Tick = '3',
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
  PointsUpdate = '17',
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

export enum ErrorEvents {
  LobbyIdAlreadyExists = 'lobbyIdAlreadyExists',
  LobbyNotFound = 'lobbyNotFound',
  PlayerNotInLobby = 'playerNotInLobby',
  LobbyFull = 'lobbyFull',
  PlayerInLobbyAlready = 'playerInLobbyAlready',
  NoLobbyFound = 'no lobby found',
  NoPlayerFound = 'no player found',
  Dead = 'dead',
}

export enum SerializedErrorEvents {
  LobbyIdAlreadyExists = '0',
  LobbyNotFound = '1',
  PlayerNotInLobby = '2',
  LobbyFull = '3',
  PlayerInLobbyAlready = '4',
  NoLobbyFound = '5',
  NoPlayerFound = '6',
  Dead = '7',
}

export type SerializedEvent = SerializedGameEvents | SerializedLobbyEvents | SerializedErrorEvents;

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


export type SerializedTickEvent = `${SerializedSocketEvents.Tick}${EventConstants.END_OF_EVENT}${string}`;

type EncoderFunction = typeof encodeFireLaser | typeof encodeFireLaserHit | typeof encodeFireLaserHitZombie | typeof encodeCharacterMove | typeof encodePlayerStatus | typeof encodePlayerRespawn | typeof encodePlayerSwitchWeapon | typeof encodePlayerReloadWeaponFired | typeof encodePlayerReloadWeaponComplete | typeof encodeGetEntitiesCallback | typeof encodePlayerBuyItem | typeof encodeGameStarted | typeof encodeGameEnded | typeof encodeEntities | typeof encodeZombieRoundUpdate | typeof encodeUserDisconnected | typeof encodeZombieAttack | typeof encodePointsUpdate;
type DecoderFunction = typeof decodeFireLaser | typeof decodeCharacterMove | typeof decodePlayerStatus | typeof decodeFireLaserHit | typeof decodeFireLaserHitZombie
  | typeof decodePlayerRespawn | typeof decodePlayerSwitchWeapon | typeof decodePlayerReloadWeaponFired | typeof decodePlayerReloadWeaponComplete | typeof decodeGetEntitiesCallback | typeof decodePlayerBuyItem | typeof decodeGameStarted | typeof decodeGameEnded | typeof decodeEntities | typeof decodeZombieRoundUpdate | typeof decodeUserDisconnected | typeof decodeZombieAttack | typeof decodePointsUpdate;


const decodeEventMap: Record<SerializedGameEvents, DecoderFunction> = {
  [SerializedGameEvents.FireLaser]: decodeFireLaser,
  [SerializedGameEvents.PlayerStatus]: decodePlayerStatus,
  [SerializedGameEvents.CharacterMove]: decodeCharacterMove,
  [SerializedGameEvents.FireLaserHit]: decodeFireLaserHit,
  [SerializedGameEvents.FireLaserHitZombie]: decodeFireLaserHitZombie,
  [SerializedGameEvents.PlayerRespawn]: decodePlayerRespawn,
  [SerializedGameEvents.PlayerSwitchWeapon]: decodePlayerSwitchWeapon,
  [SerializedGameEvents.PlayerReloadWeaponFired]: decodePlayerReloadWeaponFired,
  [SerializedGameEvents.PlayerReloadWeaponComplete]: decodePlayerReloadWeaponComplete,
  [SerializedGameEvents.GetEntitiesCallback]: decodeGetEntitiesCallback,
  [SerializedGameEvents.PlayerBuyItem]: decodePlayerBuyItem,
  [SerializedGameEvents.GameStarted]: decodeGameStarted,
  [SerializedGameEvents.GameEnded]: decodeGameEnded,
  [SerializedGameEvents.Entities]: decodeEntities,
  [SerializedGameEvents.ZombieRoundUpdate]: decodeZombieRoundUpdate,
  [SerializedGameEvents.UserDisconnected]: decodeUserDisconnected,
  [SerializedGameEvents.ZombieAttack]: decodeZombieAttack,
  [SerializedGameEvents.PointsUpdate]: decodePointsUpdate,
} as const;


export const encodeEventMap: Record<SerializedGameEvents, EncoderFunction> = {
  [SerializedGameEvents.FireLaser]: encodeFireLaser,
  [SerializedGameEvents.PlayerStatus]: encodePlayerStatus,
  [SerializedGameEvents.CharacterMove]: encodeCharacterMove,
  [SerializedGameEvents.FireLaserHit]: encodeFireLaserHit,
  [SerializedGameEvents.FireLaserHitZombie]: encodeFireLaserHitZombie,
  [SerializedGameEvents.PlayerRespawn]: encodePlayerRespawn,
  [SerializedGameEvents.PlayerSwitchWeapon]: encodePlayerSwitchWeapon,
  [SerializedGameEvents.PlayerReloadWeaponFired]: encodePlayerReloadWeaponFired,
  [SerializedGameEvents.PlayerReloadWeaponComplete]: encodePlayerReloadWeaponComplete,
  [SerializedGameEvents.GetEntitiesCallback]: encodeGetEntitiesCallback,
  [SerializedGameEvents.PlayerBuyItem]: encodePlayerBuyItem,
  [SerializedGameEvents.GameStarted]: encodeGameStarted,
  [SerializedGameEvents.GameEnded]: encodeGameEnded,
  [SerializedGameEvents.Entities]: encodeEntities,
  [SerializedGameEvents.ZombieRoundUpdate]: encodeZombieRoundUpdate,
  [SerializedGameEvents.UserDisconnected]: encodeUserDisconnected,
  [SerializedGameEvents.ZombieAttack]: encodeZombieAttack,
  [SerializedGameEvents.PointsUpdate]: encodePointsUpdate,
} as const;

export const encodeEvent = (event: keyof ServerToClient) => {
  return serializedEventMap[event];
};

export function encodeEncodedEvents(events: SerializedEvent[]): SerializedTickEvent {
  return `${SerializedSocketEvents.Tick}${EventConstants.END_OF_EVENT}${events.join('|')}` as SerializedTickEvent;
}

export const decodeEncodedEvents = (combinedEvents: SerializedTickEvent) => {
  const beginning = combinedEvents.slice(0, 2);
  const check = `${SerializedSocketEvents.Tick}${EventConstants.END_OF_EVENT}`;
  if (beginning !== check) {
    throw new Error('Invalid data');
  }
  const rest = combinedEvents.slice(2);
  if(!rest) {
    throw new Error('Invalid data');
  }
  const events = rest.split('|');
  const decodedEvents = [];

  for (const event of events) {
    const controlCode = event.slice(0, 2) as SerializedGameEvents;
    if (!controlCode) {
      throw new Error('Control code not found');
    }

    const decoder = decodeEventMap[controlCode];
    if (!decoder) {
      throw new Error('Decoder not found');
    }
    const data = event.slice(2);
    if (!data) {
      throw new Error('Data not found');
    }
    decodedEvents.push(decoder(data));
  }

  return decodedEvents;

}