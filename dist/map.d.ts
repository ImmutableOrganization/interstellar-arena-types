import { ObjectTypes } from "gameObjects.js";
import { GunOption } from "userStats.js";
export declare const colors: string[];
export declare const floorColors: string[];
export declare const textureUrls: readonly ["floor-checker", "floor-brick", "floor-dirt", "floor-metal", "floor-stone", "floor-tile", "floor-wood", "road", "fence", "concreteBlock", "transparent", "ladder"];
export type BuyableItem = {
    cost: number;
    item: GunOption;
} & mapObject;
type BaseMapObject = {
    position: number[];
    rotation: number[];
    scale: number[];
    uuid: string;
};
type PlainMapObject = {
    type: ObjectTypes;
} & BaseMapObject;
type texturedMapObject = {
    type: 'Wall' | 'Floor';
    color: string;
    textureUrl: (typeof textureUrls)[number];
} & BaseMapObject;
export type mapObject = PlainMapObject | texturedMapObject;
export declare const skyOptions: readonly ["space", "earth day", "earth night", "earth morning"];
export {};
