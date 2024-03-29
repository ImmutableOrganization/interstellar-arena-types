import { SerializedTickEvent } from "events.js";
import { SpawnableEntity, Laser } from "gameObjects.js";
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
  zombieID: string;
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

export type GetEntitiesCallbackParams = {
  entities: lobby['entities'];
};
export type EntitiesParams = {
  added: {
    spawning: boolean;
    dead: boolean;
    health: number;
    id: string;
    position: [number, number, number];
    rotation: [number, number, number];
    keysPressed: Record<string, boolean>;
  }[];
  removed: string[];
  modified: Record<string, {
    spawning: boolean;
    dead: boolean;
    health: number;
    id: string;
    position: [number, number, number];
    rotation: [number, number, number];
    keysPressed: Record<string, boolean>;
  }>;
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
  'game:gameStarted': (lobbyID: string) => void;
  'game:gameEnded': (lobbyID: string) => void;
  'game:getEntitiesCallback': (value: GetEntitiesCallbackParams) => void;
  'game:entities': (value: EntitiesParams) => void;
  'game:userDisconnected': (socketID: string) => void;
};

export type ServerToClient = {
  
} & LobbyServerToClient &
{
  'game:tick': (data: SerializedTickEvent) => void;
  'error:lobbyIdAlreadyExists': () => void;
  'error:lobbyNotFound': () => void;
  'error:playerNotInLobby': () => void;
  'error:lobbyFull': () => void;
  'error:playerInLobbyAlready': () => void;
  'error:no lobby found': () => void;
  'error:no player found': () => void;
  'error:dead': () => void;
};
