import {
  encodeFireLaser,
  encodeFireLaserHit,
  encodeCharacterMove,
  encodePlayerStatus,
  encodePlayerRespawn,
  encodePlayerSwitchWeapon,
  encodePlayerReloadWeaponFired,
  encodePlayerReloadWeaponComplete,
  encodeGameStarted,
  encodeGameEnded,
  encodeUserDisconnected,
  decodeFireLaser,
  decodeCharacterMove,
  decodePlayerStatus,
  decodeFireLaserHit,
  decodePlayerRespawn,
  decodePlayerSwitchWeapon,
  decodePlayerReloadWeaponFired,
  decodePlayerReloadWeaponComplete,
  decodeGameStarted,
  decodeGameEnded,
  decodeUserDisconnected,
} from './eventCoders.js';
import { GameServerToClient } from './socket.js';

export enum EventConstants {
  END_OF_EVENT = '|',
}

export enum SocketEvents {
  Game = 'game',
  Error = 'error',
  Tick = 'tick',
}

export enum SerializedSocketEvents {
  Game = '0',
  Error = '2',
  Tick = '3',
}

export enum GameEvents {
  FireLaser = 'fireLaser',
  FireLaserHit = 'fireLaserHit',
  CharacterMove = 'characterMove',
  PlayerRespawn = 'playerRespawn',
  PlayerSwitchWeapon = 'playerSwitchWeapon',
  PlayerReloadWeaponFired = 'playerReloadWeaponFired',
  PlayerReloadWeaponComplete = 'playerReloadWeaponComplete',
  GameStarted = 'gameStarted',
  GameEnded = 'gameEnded',
  UserDisconnected = 'userDisconnected',
  PlayerStatus = 'playerStatus',
}

export enum SerializedGameEvents {
  FireLaser = '00',
  FireLaserHit = '01',
  CharacterMove = '03',
  PlayerRespawn = '04',
  PlayerSwitchWeapon = '05',
  PlayerReloadWeaponFired = '06',
  PlayerReloadWeaponComplete = '07',
  GameStarted = '10',
  GameEnded = '11',
  UserDisconnected = '14',
  PlayerStatus = '15',
}

export enum ErrorEvents {
  LobbyNotFound = 'lobbyNotFound',
  PlayerNotInLobby = 'playerNotInLobby',
  LobbyFull = 'lobbyFull',
  PlayerInLobbyAlready = 'playerInLobbyAlready',
  NoLobbyFound = 'no lobby found',
  NoPlayerFound = 'no player found',
  Dead = 'dead',
}

export enum SerializedErrorEvents {
  LobbyFull = '3',
  NoPlayerFound = '6',
  Dead = '7',
}

export type SerializedEvent = SerializedGameEvents | SerializedErrorEvents;

export const serializedEventMap: Record<keyof GameServerToClient, string> = {
  'game:fireLaser': SerializedSocketEvents.Game + SerializedGameEvents.FireLaser,
  'game:fireLaserHit': SerializedSocketEvents.Game + SerializedGameEvents.FireLaserHit,
  'game:characterMove': SerializedSocketEvents.Game + SerializedGameEvents.CharacterMove,
  'game:playerRespawn': SerializedSocketEvents.Game + SerializedGameEvents.PlayerRespawn,
  'game:playerSwitchWeapon': SerializedSocketEvents.Game + SerializedGameEvents.PlayerSwitchWeapon,
  'game:playerReloadWeaponFired':
    SerializedSocketEvents.Game + SerializedGameEvents.PlayerReloadWeaponFired,
  'game:playerReloadWeaponComplete':
    SerializedSocketEvents.Game + SerializedGameEvents.PlayerReloadWeaponComplete,
  'game:gameStarted': SerializedSocketEvents.Game + SerializedGameEvents.GameStarted,
  'game:gameEnded': SerializedSocketEvents.Game + SerializedGameEvents.GameEnded,
  'game:userDisconnected': SerializedSocketEvents.Game + SerializedGameEvents.UserDisconnected,
  'game:playerStatus': SerializedSocketEvents.Game + SerializedGameEvents.PlayerStatus,
} as const;

export type SerializedTickEvent =
  `${SerializedSocketEvents.Tick}${EventConstants.END_OF_EVENT}${string}`;

type EncoderFunction =
  | typeof encodeFireLaser
  | typeof encodeFireLaserHit
  | typeof encodeCharacterMove
  | typeof encodePlayerStatus
  | typeof encodePlayerRespawn
  | typeof encodePlayerSwitchWeapon
  | typeof encodePlayerReloadWeaponFired
  | typeof encodePlayerReloadWeaponComplete
  | typeof encodeGameStarted
  | typeof encodeGameEnded
  | typeof encodeUserDisconnected;
type DecoderFunction =
  | typeof decodeFireLaser
  | typeof decodeCharacterMove
  | typeof decodePlayerStatus
  | typeof decodeFireLaserHit
  | typeof decodePlayerRespawn
  | typeof decodePlayerSwitchWeapon
  | typeof decodePlayerReloadWeaponFired
  | typeof decodePlayerReloadWeaponComplete
  | typeof decodeGameStarted
  | typeof decodeGameEnded
  | typeof decodeUserDisconnected;

export const decodeEventMap: Record<SerializedGameEvents, DecoderFunction> = {
  [SerializedGameEvents.FireLaser]: decodeFireLaser,
  [SerializedGameEvents.PlayerStatus]: decodePlayerStatus,
  [SerializedGameEvents.CharacterMove]: decodeCharacterMove,
  [SerializedGameEvents.FireLaserHit]: decodeFireLaserHit,
  [SerializedGameEvents.PlayerRespawn]: decodePlayerRespawn,
  [SerializedGameEvents.PlayerSwitchWeapon]: decodePlayerSwitchWeapon,
  [SerializedGameEvents.PlayerReloadWeaponFired]: decodePlayerReloadWeaponFired,
  [SerializedGameEvents.PlayerReloadWeaponComplete]: decodePlayerReloadWeaponComplete,
  [SerializedGameEvents.GameStarted]: decodeGameStarted,
  [SerializedGameEvents.GameEnded]: decodeGameEnded,
  [SerializedGameEvents.UserDisconnected]: decodeUserDisconnected,
} as const;

export const encodeEventMap: Record<GameEvents, EncoderFunction> = {
  [GameEvents.FireLaser]: encodeFireLaser,
  [GameEvents.PlayerStatus]: encodePlayerStatus,
  [GameEvents.CharacterMove]: encodeCharacterMove,
  [GameEvents.FireLaserHit]: encodeFireLaserHit,
  [GameEvents.PlayerRespawn]: encodePlayerRespawn,
  [GameEvents.PlayerSwitchWeapon]: encodePlayerSwitchWeapon,
  [GameEvents.PlayerReloadWeaponFired]: encodePlayerReloadWeaponFired,
  [GameEvents.PlayerReloadWeaponComplete]: encodePlayerReloadWeaponComplete,
  [GameEvents.GameStarted]: encodeGameStarted,
  [GameEvents.GameEnded]: encodeGameEnded,
  [GameEvents.UserDisconnected]: encodeUserDisconnected,
} as const;

export const encodeEvent = (event: keyof GameServerToClient) => {
  return serializedEventMap[event];
};

export function encodeEncodedEvents(events: SerializedEvent[]): SerializedTickEvent {
  events.sort((a, b) => a.localeCompare(b));
  return `${SerializedSocketEvents.Tick}${EventConstants.END_OF_EVENT}${events.join('|')}` as SerializedTickEvent;
}

export const decodeEncodedEvents = (combinedEvents: SerializedTickEvent) => {
  const beginning = combinedEvents.slice(0, 2);
  const check = `${SerializedSocketEvents.Tick}${EventConstants.END_OF_EVENT}`;
  if (beginning !== check) {
    throw new Error('Invalid data');
  }
  const rest = combinedEvents.slice(2);
  if (!rest) {
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
};
