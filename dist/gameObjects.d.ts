import { Mesh, Vector3 } from 'three';
import { GunOption } from './userStats.js';
export type Entity = {
    id: string;
    position: [number, number, number];
    rotation: [number, number, number];
    keysPressed: Record<string, boolean>;
    model: {
        laserHitbox: Mesh;
        collisionHitbox: Mesh;
    };
};
export type SpawnableEntity = {
    spawnerID: string;
    spawnTime: number;
} & Entity;
export type Player = {
    dead: boolean;
    gun: GunOption;
    cameraRotation: [number, number, number];
    team?: 'green' | 'blue';
    authId?: string;
    username?: string;
} & Entity;
export declare const ObjectTypesEnum: readonly ["Player", "PowerUp", "Laser", "Wall", "Floor", "Ladder", "Tree1", "Tree2", "Rock", "Stump", "Grass", "Zombie"];
export type ObjectTypes = (typeof ObjectTypesEnum)[number];
export declare const EntityTypesSet: readonly ["Zombie"];
export type EntityTypes = (typeof EntityTypesSet)[number];
export type BaseGameObject = {
    position: [number, number, number];
    rotation: [number, number, number];
    name: string;
    uuid: string;
};
export type Laser = BaseGameObject & {
    senderuuid: string;
    start: Vector3;
    end: Vector3;
    uuid: string;
    mesh: Mesh;
    color: string;
    hitPoint: Vector3;
    distance: number;
};
