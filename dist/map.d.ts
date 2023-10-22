import { ObjectTypes } from "./gameObjects.js";
export declare const colors: string[];
export declare const floorColors: string[];
export declare const textureUrls: readonly ["floor-checker", "floor-brick", "floor-dirt", "floor-metal", "floor-stone", "floor-tile", "floor-wood", "road"];
export type mapObject = {
    position: number[];
    rotation: number[];
    gridSquareSize: number;
    type: ObjectTypes;
    name: string;
    color?: string;
    textureUrl: (typeof textureUrls)[number];
    uuid: string;
};
