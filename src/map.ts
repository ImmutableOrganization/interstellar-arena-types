import { ObjectTypes } from "./gameObjects.js";

export const colors = ['#ff00ff', '#4A1D96', '#5521B5', '#6C2BD9', '#7E3AF2', '#363838'];
export const floorColors = ['#282828', '#696969'];
export const textureUrls = ['floor-checker', 'floor-brick', 'floor-dirt', 'floor-metal', 'floor-stone', 'floor-tile', 'floor-wood', 'road', 'fence', 'concreteBlock'] as const;
export type BuyableItem = {
  cost: number;
  item: string;
} & mapObject;


export type mapObject = {
    position: number[];
    rotation: number[];
    gridSquareSize: number;
    type: ObjectTypes;
    name: string;
    color?: string;
    textureUrl: (typeof textureUrls)[number];
    uuid: string;
    scale: number[];
  };
  