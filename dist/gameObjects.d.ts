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
export type Player = {
    gun: GunOption;
    gunAmmo: number;
    cameraRotation: [number, number, number];
    team?: 'green' | 'blue';
    authId?: string;
    username?: string;
    playerOption: (typeof PlayerOptions)[number];
} & Entity;
export declare const PlayerOptions: readonly ["Benjamin", "William", "Samuel", "Nathaniel", "Charles", "Eleanor", "Victoria", "Margaret"];
export declare const tileTypes: readonly ["Building", "Sign", "Nature", "Tree", "Road", "Vehicle", "Entity", "Machine", "Food", "Misc", "invalid", "Light"];
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
