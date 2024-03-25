import { Player, Laser, EntityTypes, SpawnableEntity } from "./gameObjects.js";
import { GameMode, GameState } from "./gameState.js";
import { BuyableItem, mapObject, skyOptions } from "./map.js";

export enum RoundStates {
  START = 'START',
  ONGOING = 'ONGOING',
  END = 'END'
}

type RoundData = {
  state: RoundStates;
  roundNumber: number;
};

export type lobby = {
    id: string;
    players: Record<string, Player>;
    game: {
      gameMode: GameMode;
      gameState: (typeof GameState)[number];
      zombie: {
        points: Record<string, number>;
        roundData: RoundData;
      };
      arena:{
        winCondition: number;
      }
      duration: {
        match: {
          startTime: number;
          endTime: number;
        };
        lobby: {
          startTime: number;
          endTime: number;
        };
      };
    };
    map: {
      mapData: Record<mapObject['type'], (mapObject | BuyableItem)[]>;
      mapName: string;
      mapSky: (typeof skyOptions)[number];
      navigationMatrix?: number[][];
    };
    entities: Record<EntityTypes, SpawnableEntity[]>;
    lasers: Laser[];
    scoreBoard: ScoreBoard;
    hasBots: boolean;
    maxPlayers: number;
    isCustomMatch: boolean;
    creatorSocketID: string;
  };

  
export type ScoreBoard = Record<
string,
{
  kills: number;
  deaths: number;
}
>;