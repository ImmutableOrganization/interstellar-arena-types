import { Player, Laser, EntityTypes, SpawnableEntity } from "./gameObjects.js";
import { GameMode, GameState } from "./gameState.js";
import { mapObject } from "./map.js";

const roundStates = ['START', 'ONGOING', 'END'] as const;
type RoundData = {
  state: (typeof roundStates)[number];
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
      mapData: Record<mapObject['type'], mapObject[]>;
      mapName: string;
      mapSky: 'purpleStars' | 'whiteStars' | 'blueSky';
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