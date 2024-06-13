export const colors = ['#ff00ff', '#4A1D96', '#5521B5', '#6C2BD9', '#7E3AF2', '#363838'];
export const floorColors = ['#282828', '#696969'];
export const textureUrls = [
  'floor-checker',
  'floor-brick',
  'floor-dirt',
  'floor-metal',
  'floor-stone',
  'floor-tile',
  'floor-wood',
  'road',
  'fence',
  'concreteBlock',
  'transparent',
  'ladder',
] as const;

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

export const skyOptions = ['space', 'earth day', 'earth night', 'earth morning'] as const;
