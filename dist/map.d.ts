export declare const colors: string[];
export declare const floorColors: string[];
export declare const textureUrls: readonly ["floor-checker", "floor-brick", "floor-dirt", "floor-metal", "floor-stone", "floor-tile", "floor-wood", "road", "fence", "concreteBlock", "transparent", "ladder"];
type BaseMapObject = {
    position: number[];
    rotation: number[];
    scale: number[];
    uuid: string;
};
export type texturedMapObject = {
    type: 'Wall' | 'Floor' | 'Panel' | 'Ladder';
    color: string;
    textureUrl: (typeof textureUrls)[number];
} & BaseMapObject;
export type mapObject = texturedMapObject;
export declare const skyOptions: readonly ["space", "earth day", "earth night", "earth morning"];
export {};
