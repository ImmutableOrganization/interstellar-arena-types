import { Mesh, Vector3 } from 'three';
import { GunOption } from 'userStats.js';
export type Player = {
    id: string;
    gun: GunOption;
    position: [number, number, number];
    rotation: [number, number, number];
    keysPressed: Record<string, boolean>;
    cameraRotation: [number, number, number];
    model: { laserHitbox: Mesh; collisionHitbox: Mesh };
    dead: boolean;
    team?: 'green' | 'blue';
    authId?: string;
    username?: string;
};
  
export const ObjectTypesEnum = ['Player', 'PowerUp', 'Laser', 'Wall', 'Floor', 'Ladder', 'Tree1', 'Tree2', 'Rock', 'Stump', 'Grass'] as const;

export type ObjectTypes = (typeof ObjectTypesEnum)[number];


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
