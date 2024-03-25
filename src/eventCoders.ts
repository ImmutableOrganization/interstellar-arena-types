import { SerializedGameEvents } from "./events.js";
import { RoundStates } from "./lobby.js";
import { ServerToClient } from "./socket.js";
import { Vector3 } from "three";
import { GunOption } from "./userStats.js";

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
export const deserializeGunMap = Object.fromEntries(Object.entries(serializedGunMap).map(([k, v]) => [v, k]));

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
} 

export const serializedRoundStateMap: Record<RoundStates, string> = {
    [RoundStates.START]: '0',
    [RoundStates.ONGOING]: '1',
    [RoundStates.END]: '2',
};
export const deserializeRoundStateMap = Object.fromEntries(Object.entries(serializedRoundStateMap).map(([k, v]) => [v, k]));


export const encodeFireLaser = (gun: GunOption, data: Parameters<ServerToClient['game:fireLaser']>['0']) => {
    const start = data.start.toArray() as number[];
    return `${SerializedGameEvents.FireLaser}${serializedGunMap[gun]}$${data.senderuuid}$${arrayOfNumbersToFixed(data.position).join(',')}$${arrayOfNumbersToFixed(data.rotation).join(',')}$${arrayOfNumbersToFixed(start).join(',')}$${arrayOfNumbersToFixed(data.hitPoint.toArray()).join(',')}`;
};

export const encodeFireLaserHit = (data: Parameters<ServerToClient['game:fireLaserHit']>['0']) => {
    return `${SerializedGameEvents.FireLaserHit}${data.hitPlayerID}$${data.hitPlayerHealth}$${data.laserShooterID}`;
};

export const encodeFireLaserHitZombie = (data: Parameters<ServerToClient['game:fireLaserHitZombie']>['0']) => {
    return `${SerializedGameEvents.FireLaserHitZombie}${data.laserShooterID}$${data.hitZombieID}`;
};

export const encodePlayerStatus = (data: Parameters<ServerToClient['game:playerStatus']>['0']) => {
    return `${SerializedGameEvents.PlayerStatus}${data.playerId}$${data.health}$${serializedBoolMap(data.dead)}`;
};

export const encodeCharacterMove = (data: Parameters<ServerToClient['game:characterMove']>['0']) => {
    return `${SerializedGameEvents.CharacterMove}${data.socketId}$${arrayOfNumbersToFixed(data.position).join(',')}$${arrayOfNumbersToFixed(data.rotation).join(',')}$${arrayOfNumbersToFixed(
        data.cameraRotation,
    ).join(',')}$${JSON.stringify(data.keysPressed)}`;
};

export const encodePlayerRespawn = (data: Parameters<ServerToClient['game:playerRespawn']>['0']) => {
    return `${SerializedGameEvents.PlayerRespawn}${data.playerId}$${data.killedBy}$${arrayOfNumbersToFixed(data.position).join(',')}$${arrayOfNumbersToFixed(data.rotation).join(',')}$${arrayOfNumbersToFixed(data.cameraRotation).join(',')}$${serializedBoolMap(data.dead)}`;
};

export const encodePlayerSwitchWeapon = (data: Parameters<ServerToClient['game:playerSwitchWeapon']>['0']) => {
    return `${SerializedGameEvents.PlayerSwitchWeapon}${data.playerId}$${serializedGunMap[data.gun]}`;
};

export const encodePlayerReloadWeaponFired = (data: Parameters<ServerToClient['game:playerReloadWeaponFired']>['0']) => {
    return `${SerializedGameEvents.PlayerReloadWeaponFired}${data.playerId}`;
};

export const encodePlayerReloadWeaponComplete = (data: Parameters<ServerToClient['game:playerReloadWeaponComplete']>['0']) => {
    return `${SerializedGameEvents.PlayerReloadWeaponComplete}${data.playerId}$${data.gunAmmo}`;
};

export const encodeGetEntitiesCallback = (data: Parameters<ServerToClient['game:getEntitiesCallback']>['0']) => {
    return `${SerializedGameEvents.GetEntitiesCallback}${JSON.stringify(data.entities)}`;
};

export const encodePlayerBuyItem = (data: Parameters<ServerToClient['game:playerBuyItem']>['0']) => {
    return `${SerializedGameEvents.PlayerBuyItem}${data.playerId}$${serializedGunMap[data.item]}$${data.points}`;
};

export const encodeGameStarted = (data: Parameters<ServerToClient['game:gameStarted']>['0']) => {
    return `${SerializedGameEvents.GameStarted}${data}`;
};

export const encodeGameEnded = (data: Parameters<ServerToClient['game:gameEnded']>['0']) => {
    return `${SerializedGameEvents.GameEnded}${data}`;
};

export const encodeEntities = (data: Parameters<ServerToClient['game:entities']>['0']) => {
    return `${SerializedGameEvents.Entities}${JSON.stringify(data)}`;
};

export const encodeZombieRoundUpdate = (data: Parameters<ServerToClient['game:zombieRoundUpdate']>['0']) => {
    return `${SerializedGameEvents.ZombieRoundUpdate}${data.roundNumber}${serializedRoundStateMap[data.state]}`;
};

export const encodeUserDisconnected = (data: Parameters<ServerToClient['game:userDisconnected']>['0']) => {
    return `${SerializedGameEvents.UserDisconnected}${data}`;
};

export const encodeZombieAttack = (data: Parameters<ServerToClient['game:zombieAttack']>['0']) => {
    return `${SerializedGameEvents.ZombieAttack}${JSON.stringify(data.zombie)}`;
};

export const encodePointsUpdate = (data: Parameters<ServerToClient['game:pointsUpdate']>['0']) => {
    return `${SerializedGameEvents.PointsUpdate}${data.points}`;
};


export const decodePlayerStatus = (value: string) => {
    const split = value.split('$');
    return {
        playerId: split[0],
        health: parseInt(split[1]),
        dead: split[2] === 'true',
    };
};

export const decodeCharacterMove = (data: string) => {
    const split = data.split('$');
    return {
        socketId: split[0],
        position: split[1].split(',').map((n) => parseFloat(n)),
        rotation: split[2].split(',').map((n) => parseFloat(n)),
        cameraRotation: split[3].split(',').map((n) => parseFloat(n)),
        keysPressed: JSON.parse(split[4]),
    };
};

export const decodeFireLaser = (value: string) => {
    const split = value.split('$');
    const gun = split[0];
    if (!gun) return;
    const gunOption = deserializeGunMap[gun as keyof typeof deserializeGunMap] as GunOption;
    if (!gunOption) return;
    return {
        gun: gunOption,
        senderuuid: split[1],
        position: split[2].split(',').map((n) => parseFloat(n)) as [number, number, number],
        rotation: split[3].split(',').map((n) => parseFloat(n)) as [number, number, number],
        start: new Vector3().fromArray(split[4].split(',').map((n) => parseFloat(n))),
        hitPoint: new Vector3().fromArray(split[5].split(',').map((n) => parseFloat(n))),
        name: 'Laser',
    };
};

export const decodeFireLaserHit = (value: string) => {
    const split = value.split('$');
    return {
        hitPlayerID: split[0],
        hitPlayerHealth: parseInt(split[1]),
        laserShooterID: split[2],
    };
};

export const decodeFireLaserHitZombie = (value: string) => {
    const split = value.split('$');
    return {
        laserShooterID: split[0],
        hitZombieID: split[1],
    };
};

export const decodePlayerRespawn = (value: string) => {
    return {
        playerId: value,
    };
};

export const decodePlayerSwitchWeapon = (value: string) => {
    const split = value.split('$');
    return {
        playerId: split[0],
        gun: deserializeGunMap[split[1] as keyof typeof deserializeGunMap] as GunOption,
    };
};
export const decodePlayerReloadWeaponFired = (value: string) => {
    return {
        playerId: value,
    };
};

export const decodePlayerReloadWeaponComplete = (value: string) => {
    const split = value.split('$');
    return {
        playerId: split[0],
        gunAmmo: parseInt(split[1]),
    };
};

export const decodeGetEntitiesCallback = (value: string) => {
    return {
        entities: JSON.parse(value),
    };
};

export const decodePlayerBuyItem = (value: string) => {
    const split = value.split('$');
    return {
        lobbyID: split[0],
        playerId: split[1],
        itemID: split[2],
    };
};

export const decodeGameStarted = (value: string) => {
    return {
        lobbyID: value,
    };
};

export const decodeGameEnded = (value: string) => {
    return {
        lobbyID: value,
    };
};

export const decodeEntities = (value: string) => {
    return {
        entities: JSON.parse(value),
    };
};

export const decodeZombieRoundUpdate = (value: string) => {
    return {
        round: parseInt(value),
    };
};

export const decodeUserDisconnected = (value: string) => {
    return {
        playerId: value,
    };
};

export const decodeZombieAttack = (value: string) => {
    return {
        zombie: JSON.parse(value),
    };
};

export const decodePointsUpdate = (value: string) => {
    return {
        points: parseInt(value),
    };
};