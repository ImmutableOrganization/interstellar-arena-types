import { Mesh, Vector3 } from 'three';
import { GunOption } from './userStats.js';
export type Entity = {
    dead: boolean;
    health: number;
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
    gun: GunOption;
    gunAmmo: number;
    cameraRotation: [number, number, number];
    team?: 'green' | 'blue';
    authId?: string;
    username?: string;
} & Entity;
export declare const ObjectTypesEnum: readonly ["Player", "PowerUp", "Laser", "Wall", "Floor", "Ladder", "Tree1", "Tree2", "Rock", "Stump", "Grass", "Zombie", "Agent Waypoint", "Car01", "Car02", "Car03", "Car04", "Car05", "Car06", "Car07", "Car08", "Circuit_Breaker", "Generator", "Pipe_Valve", "Pump", "Switch_1", "Switch_2", "Switch_3", "Transformer", "Turbine", "Pipe1", "Pipe2", "Pipe3", "Pipe4"];
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
