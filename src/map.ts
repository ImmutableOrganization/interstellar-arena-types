import { ObjectTypes } from "gameObjects.js";
import { GunOption } from "userStats.js";

export const colors = ['#ff00ff', '#4A1D96', '#5521B5', '#6C2BD9', '#7E3AF2', '#363838'];
export const floorColors = ['#282828', '#696969'];
export const textureUrls = ['floor-checker', 'floor-brick', 'floor-dirt', 'floor-metal', 'floor-stone', 'floor-tile', 'floor-wood', 'road', 'fence', 'concreteBlock'] as const;
export type BuyableItem = {
  cost: number;
  item: GunOption;
} & mapObject;

type BaseMapObject = {
  position: number[];
  rotation: number[];
  scale: number[];
  uuid: string;
}

type PlainMapObject = {
  type: ObjectTypes;
} & BaseMapObject;

 type texturedMapObject = {
  type:  'Wall' | 'Floor';
  color: string;
    textureUrl: (typeof textureUrls)[number];
  }  & BaseMapObject;
  
export type mapObject = PlainMapObject | texturedMapObject;

export const skyOptions = ['space', 'earth day', 'earth night', 'earth morning'] as const;

