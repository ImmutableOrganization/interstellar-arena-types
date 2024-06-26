import { GameEvents, SerializedGameEvents } from './events.js';
import { GameServerToClient } from './socket.js';
import { Vector3 } from 'three';
import { GunOption } from './userStats.js';

export type EncodedPlayerIds = string[];

export const arrayOfNumbersToFixed = (arr: number[]) => {
  return arr.map((n) => {
    if (isNaN(n)) {
      return n;
    } else {
      return n.toFixed(0);
    }
  });
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
export const deserializeGunMap = Object.fromEntries(
  Object.entries(serializedGunMap).map(([k, v]) => [v, k]),
);

export const serializedBoolMap = (value: true | false) => {
  if (value) {
    return '1' as const;
  } else {
    return '0' as const;
  }
};
export const deserializeBoolMap = (value: string) => {
  if (value === '1') {
    return true;
  } else {
    return false;
  }
};

export const encodeKeysPressedMap = (keysPressed: Record<string, boolean>) => {
  return Object.entries(keysPressed).map(([k, v]) => {
    return `${k}:${v ? '1' : '0'}`;
  });
};
const decodeKeysPressedMap = (keysPressed: string) => {
  return Object.fromEntries(
    keysPressed.split(',').map((k) => {
      const [key, value] = k.split(':');
      return [key, value === '1'];
    }),
  );
};

export const encodeFireLaser = (
  gun: GunOption,
  data: Parameters<GameServerToClient['game:fireLaser']>['0'],
) => {
  const start = data.start.toArray() as number[];
  return `${SerializedGameEvents.FireLaser}${serializedGunMap[gun]}$${data.senderuuid}$${arrayOfNumbersToFixed(data.position).join(',')}$${arrayOfNumbersToFixed(data.rotation).join(',')}$${arrayOfNumbersToFixed(start).join(',')}$${arrayOfNumbersToFixed(data.hitPoint.toArray()).join(',')}`;
};
export const encodeFireLaserHit = (
  data: Parameters<GameServerToClient['game:fireLaserHit']>['0'],
) => {
  return `${SerializedGameEvents.FireLaserHit}${data.hitPlayerID}$${data.hitPlayerHealth.toFixed(0)}$${data.laserShooterID}`;
};

export const encodePlayerStatus = (
  data: Parameters<GameServerToClient['game:playerStatus']>['0'],
) => {
  return `${SerializedGameEvents.PlayerStatus}${data.playerId}$${data.health.toFixed(0)}$${serializedBoolMap(data.dead)}$${serializedGunMap[data.gun]}`;
};

export const encodeCharacterMove = (
  data: Parameters<GameServerToClient['game:characterMove']>['0'],
) => {
  return `${SerializedGameEvents.CharacterMove}${data.socketId}$${arrayOfNumbersToFixed(data.position).join(',')}$${arrayOfNumbersToFixed(data.rotation).join(',')}$${arrayOfNumbersToFixed(
    data.cameraRotation,
  ).join(',')}$${encodeKeysPressedMap(data.keysPressed).join(',')}`;
};

export const encodePlayerRespawn = (
  data: Parameters<GameServerToClient['game:playerRespawn']>['0'],
) => {
  return `${SerializedGameEvents.PlayerRespawn}${data.playerId}$${data.killedBy}$${arrayOfNumbersToFixed(data.position).join(',')}$${arrayOfNumbersToFixed(data.rotation).join(',')}$${arrayOfNumbersToFixed(data.cameraRotation).join(',')}$${serializedBoolMap(data.dead)}`;
};

export const encodePlayerSwitchWeapon = (
  data: Parameters<GameServerToClient['game:playerSwitchWeapon']>['0'],
) => {
  return `${SerializedGameEvents.PlayerSwitchWeapon}${data.playerId}$${serializedGunMap[data.gun]}`;
};

export const encodePlayerReloadWeaponFired = (
  data: Parameters<GameServerToClient['game:playerReloadWeaponFired']>['0'],
) => {
  return `${SerializedGameEvents.PlayerReloadWeaponFired}${data.playerId}`;
};

export const encodePlayerReloadWeaponComplete = (
  data: Parameters<GameServerToClient['game:playerReloadWeaponComplete']>['0'],
) => {
  return `${SerializedGameEvents.PlayerReloadWeaponComplete}${data.playerId}$${data.gunAmmo}`;
};

export const encodeGameStarted = (
  data: Parameters<GameServerToClient['game:gameStarted']>['0'],
) => {
  return `${SerializedGameEvents.GameStarted}${data}`;
};

export const encodeGameEnded = (data: Parameters<GameServerToClient['game:gameEnded']>['0']) => {
  return `${SerializedGameEvents.GameEnded}${data}`;
};

export const encodeUserDisconnected = (
  data: Parameters<GameServerToClient['game:userDisconnected']>['0'],
) => {
  return `${SerializedGameEvents.UserDisconnected}${data}`;
};

export const decodePlayerStatus = (value: string) => {
  const split = value.split('$');
  return {
    event: GameEvents.PlayerStatus,
    playerId: split[0],
    health: parseInt(split[1] ?? ''),
    dead: split[2] === 'true',
    gun: deserializeGunMap[split[3] as keyof typeof deserializeGunMap] as GunOption,
  };
};

export const decodeCharacterMove = (data: string) => {
  const split = data.split('$');
  return {
    event: GameEvents.CharacterMove,
    socketId: split[0],
    position: (split[1] ?? '').split(',').map((n) => parseFloat(n)),
    rotation: (split[2] ?? '').split(',').map((n) => parseFloat(n)),
    cameraRotation: (split[3] ?? '').split(',').map((n) => parseFloat(n)),
    keysPressed: decodeKeysPressedMap(split[4] ?? ''),
  };
};

export const decodeFireLaser = (value: string) => {
  const split = value.split('$');
  const gun = split[0];
  if (!gun) return;
  const gunOption = deserializeGunMap[gun as keyof typeof deserializeGunMap] as GunOption;
  if (!gunOption) return;

  return {
    event: GameEvents.FireLaser,
    gun: gunOption,
    senderuuid: split[1],
    position: (split[2] ?? '').split(',').map((n) => parseFloat(n)) as [number, number, number],
    rotation: (split[3] ?? '').split(',').map((n) => parseFloat(n)) as [number, number, number],
    start: new Vector3().fromArray((split[4] ?? '').split(',').map((n) => parseFloat(n))),
    hitPoint: new Vector3().fromArray((split[5] ?? '').split(',').map((n) => parseFloat(n))),
    name: 'Laser',
  };
};

export const decodeFireLaserHit = (value: string) => {
  const split = value.split('$');
  return {
    event: GameEvents.FireLaserHit,
    hitPlayerID: split[0],
    hitPlayerHealth: parseInt(split[1] ?? ''),
    laserShooterID: split[2],
  };
};

export const decodePlayerRespawn = (value: string) => {
  return {
    event: GameEvents.PlayerRespawn,
    playerId: value,
  };
};

export const decodePlayerSwitchWeapon = (value: string) => {
  const split = value.split('$');
  return {
    event: GameEvents.PlayerSwitchWeapon,
    playerId: split[0],
    gun: deserializeGunMap[split[1] as keyof typeof deserializeGunMap] as GunOption,
  };
};
export const decodePlayerReloadWeaponFired = (value: string) => {
  return {
    event: GameEvents.PlayerReloadWeaponFired,
    playerId: value,
  };
};

export const decodePlayerReloadWeaponComplete = (value: string) => {
  const split = value.split('$');
  return {
    event: GameEvents.PlayerReloadWeaponComplete,
    playerId: split[0],
    gunAmmo: parseInt(split[1] ?? ''),
  };
};

export const decodeGameStarted = (value: string) => {
  return {
    event: GameEvents.GameStarted,
    lobbyID: value,
  };
};

export const decodeGameEnded = (value: string) => {
  return {
    event: GameEvents.GameEnded,
    lobbyID: value,
  };
};

export const decodeUserDisconnected = (value: string) => {
  return {
    event: GameEvents.UserDisconnected,
    playerId: value,
  };
};
