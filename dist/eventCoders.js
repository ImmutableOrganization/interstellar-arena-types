import { GameEvents, SerializedGameEvents } from "./events.js";
import { RoundStates } from "./lobby.js";
import { Vector3 } from "three";
export const arrayOfNumbersToFixed = (arr) => {
    return arr.map((n) => {
        if (isNaN(n)) {
            return n;
        }
        else {
            return n.toFixed(0);
        }
    });
};
export const serializedGunMap = {
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
};
export const deserializeGunMap = Object.fromEntries(Object.entries(serializedGunMap).map(([k, v]) => [v, k]));
export const serializedBoolMap = (value) => {
    if (value) {
        return '1';
    }
    else {
        return '0';
    }
};
export const deserializeBoolMap = (value) => {
    if (value === '1') {
        return true;
    }
    else {
        return false;
    }
};
export const serializedRoundStateMap = {
    [RoundStates.START]: '0',
    [RoundStates.ONGOING]: '1',
    [RoundStates.END]: '2',
};
export const deserializeRoundStateMap = Object.fromEntries(Object.entries(serializedRoundStateMap).map(([k, v]) => [v, k]));
export const encodeFireLaser = (gun, data) => {
    const start = data.start.toArray();
    return `${SerializedGameEvents.FireLaser}${serializedGunMap[gun]}$${data.senderuuid}$${arrayOfNumbersToFixed(data.position).join(',')}$${arrayOfNumbersToFixed(data.rotation).join(',')}$${arrayOfNumbersToFixed(start).join(',')}$${arrayOfNumbersToFixed(data.hitPoint.toArray()).join(',')}`;
};
export const encodeFireLaserHit = (data) => {
    return `${SerializedGameEvents.FireLaserHit}${data.hitPlayerID}$${data.hitPlayerHealth}$${data.laserShooterID}`;
};
export const encodeFireLaserHitZombie = (data) => {
    return `${SerializedGameEvents.FireLaserHitZombie}${data.laserShooterID}$${data.hitZombieID}`;
};
export const encodePlayerStatus = (data) => {
    return `${SerializedGameEvents.PlayerStatus}${data.playerId}$${data.health}$${serializedBoolMap(data.dead)}`;
};
export const encodeCharacterMove = (data) => {
    return `${SerializedGameEvents.CharacterMove}${data.socketId}$${arrayOfNumbersToFixed(data.position).join(',')}$${arrayOfNumbersToFixed(data.rotation).join(',')}$${arrayOfNumbersToFixed(data.cameraRotation).join(',')}$${JSON.stringify(data.keysPressed)}`;
};
export const encodePlayerRespawn = (data) => {
    return `${SerializedGameEvents.PlayerRespawn}${data.playerId}$${data.killedBy}$${arrayOfNumbersToFixed(data.position).join(',')}$${arrayOfNumbersToFixed(data.rotation).join(',')}$${arrayOfNumbersToFixed(data.cameraRotation).join(',')}$${serializedBoolMap(data.dead)}`;
};
export const encodePlayerSwitchWeapon = (data) => {
    return `${SerializedGameEvents.PlayerSwitchWeapon}${data.playerId}$${serializedGunMap[data.gun]}`;
};
export const encodePlayerReloadWeaponFired = (data) => {
    return `${SerializedGameEvents.PlayerReloadWeaponFired}${data.playerId}`;
};
export const encodePlayerReloadWeaponComplete = (data) => {
    return `${SerializedGameEvents.PlayerReloadWeaponComplete}${data.playerId}$${data.gunAmmo}`;
};
export const encodeGetEntitiesCallback = (data) => {
    return `${SerializedGameEvents.GetEntitiesCallback}${JSON.stringify(data.entities)}`;
};
export const encodePlayerBuyItem = (data) => {
    return `${SerializedGameEvents.PlayerBuyItem}${data.playerId}$${serializedGunMap[data.item]}$${data.points}`;
};
export const encodeGameStarted = (data) => {
    return `${SerializedGameEvents.GameStarted}${data}`;
};
export const encodeGameEnded = (data) => {
    return `${SerializedGameEvents.GameEnded}${data}`;
};
export const encodeEntities = (data) => {
    data.added.forEach((entity) => {
        entity.position = arrayOfNumbersToFixed(entity.position);
        entity.rotation = arrayOfNumbersToFixed(entity.rotation);
    });
    Object.values(data.modified).forEach((entity) => {
        entity.position = arrayOfNumbersToFixed(entity.position);
        entity.rotation = arrayOfNumbersToFixed(entity.rotation);
    });
    return `${SerializedGameEvents.Entities}${JSON.stringify(data)}`;
};
export const encodeZombieRoundUpdate = (data) => {
    return `${SerializedGameEvents.ZombieRoundUpdate}${data.roundNumber}${serializedRoundStateMap[data.state]}`;
};
export const encodeUserDisconnected = (data) => {
    return `${SerializedGameEvents.UserDisconnected}${data}`;
};
export const encodeZombieAttack = (data) => {
    return `${SerializedGameEvents.ZombieAttack}${data.zombieID}`;
};
export const encodePointsUpdate = (data) => {
    return `${SerializedGameEvents.PointsUpdate}${data.points}`;
};
export const decodePlayerStatus = (value) => {
    const split = value.split('$');
    return {
        event: GameEvents.PlayerStatus,
        playerId: split[0],
        health: parseInt(split[1]),
        dead: split[2] === 'true',
    };
};
export const decodeCharacterMove = (data) => {
    const split = data.split('$');
    return {
        event: GameEvents.CharacterMove,
        socketId: split[0],
        position: split[1].split(',').map((n) => parseFloat(n)),
        rotation: split[2].split(',').map((n) => parseFloat(n)),
        cameraRotation: split[3].split(',').map((n) => parseFloat(n)),
        keysPressed: JSON.parse(split[4]),
    };
};
export const decodeFireLaser = (value) => {
    const split = value.split('$');
    const gun = split[0];
    if (!gun)
        return;
    const gunOption = deserializeGunMap[gun];
    if (!gunOption)
        return;
    return {
        event: GameEvents.FireLaser,
        gun: gunOption,
        senderuuid: split[1],
        position: split[2].split(',').map((n) => parseFloat(n)),
        rotation: split[3].split(',').map((n) => parseFloat(n)),
        start: new Vector3().fromArray(split[4].split(',').map((n) => parseFloat(n))),
        hitPoint: new Vector3().fromArray(split[5].split(',').map((n) => parseFloat(n))),
        name: 'Laser',
    };
};
export const decodeFireLaserHit = (value) => {
    const split = value.split('$');
    return {
        event: GameEvents.FireLaserHit,
        hitPlayerID: split[0],
        hitPlayerHealth: parseInt(split[1]),
        laserShooterID: split[2],
    };
};
export const decodeFireLaserHitZombie = (value) => {
    const split = value.split('$');
    return {
        event: GameEvents.FireLaserHitZombie,
        laserShooterID: split[0],
        hitZombieID: split[1],
    };
};
export const decodePlayerRespawn = (value) => {
    return {
        event: GameEvents.PlayerRespawn,
        playerId: value,
    };
};
export const decodePlayerSwitchWeapon = (value) => {
    const split = value.split('$');
    return {
        event: GameEvents.PlayerSwitchWeapon,
        playerId: split[0],
        gun: deserializeGunMap[split[1]],
    };
};
export const decodePlayerReloadWeaponFired = (value) => {
    return {
        event: GameEvents.PlayerReloadWeaponFired,
        playerId: value,
    };
};
export const decodePlayerReloadWeaponComplete = (value) => {
    const split = value.split('$');
    return {
        event: GameEvents.PlayerReloadWeaponComplete,
        playerId: split[0],
        gunAmmo: parseInt(split[1]),
    };
};
export const decodeGetEntitiesCallback = (value) => {
    return {
        event: GameEvents.GetEntitiesCallback,
        entities: JSON.parse(value),
    };
};
export const decodePlayerBuyItem = (value) => {
    const split = value.split('$');
    return {
        event: GameEvents.PlayerBuyItem,
        lobbyID: split[0],
        playerId: split[1],
        itemID: split[2],
    };
};
export const decodeGameStarted = (value) => {
    return {
        event: GameEvents.GameStarted,
        lobbyID: value,
    };
};
export const decodeGameEnded = (value) => {
    return {
        event: GameEvents.GameEnded,
        lobbyID: value,
    };
};
export const decodeEntities = (value) => {
    return {
        event: GameEvents.Entities,
        entities: JSON.parse(value),
    };
};
export const decodeZombieRoundUpdate = (value) => {
    return {
        event: GameEvents.ZombieRoundUpdate,
        round: parseInt(value),
    };
};
export const decodeUserDisconnected = (value) => {
    return {
        event: GameEvents.UserDisconnected,
        playerId: value,
    };
};
export const decodeZombieAttack = (value) => {
    return {
        event: GameEvents.ZombieAttack,
        zombieID: value,
    };
};
export const decodePointsUpdate = (value) => {
    return {
        event: GameEvents.PointsUpdate,
        points: parseInt(value),
    };
};
