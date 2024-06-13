import { SerializedTickEvent } from 'events.js';
import { Laser } from 'gameObjects.js';
import { lobby } from 'lobby.js';
import { GunOption } from 'userStats.js';

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
  gun: GunOption;
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
  killedBy: string;
  playerId: string;
  position: [number, number, number];
  rotation: [number, number, number];
  cameraRotation: [number, number, number];
  dead: boolean;
};

export type ScoreBoardUpdateParams = {
  scoreBoard: lobby['scoreBoard'];
};

export type GameServerToClient = {
  'game:fireLaserHit': (value: FireLaserHitParams) => void;
  'game:playerReloadWeaponFired': (value: PlayerReloadWeaponFiredParams) => void;
  'game:playerReloadWeaponComplete': (value: PlayerReloadWeaponCompleteParams) => void;
  'game:playerStatus': (value: PlayerStatusParams) => void;
  'game:playerSwitchWeapon': (value: PlayerSwitchWeaponParams) => void;
  'game:characterMove': (value: CharacterMoveParams) => void;
  'game:playerRespawn': (value: PlayerRespawnParams) => void;
  'game:fireLaser': (laser: Laser, ammo: number) => void;
  'game:gameStarted': (lobbyID: string) => void;
  'game:gameEnded': (lobbyID: string) => void;
  'game:userDisconnected': (socketID: string) => void;
};

export type ServerToClient = {} & {
  'game:decodeSocketID': (encodedSocketID: string) => void;
  'game:tick': (data: SerializedTickEvent) => void;
  'error:lobbyFull': () => void;
  'error:no player found': () => void;
  'error:dead': () => void;
};
