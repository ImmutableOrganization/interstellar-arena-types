import { Player } from "./gameObjects";
import { GameMode, GameState } from "./gameState";
import { mapObject } from "./map";

export type lobby = {
    id: string;
    players: Record<string, Player>;
    game: {
      gameMode: GameMode;
      winCondition: number;
      gameState: (typeof GameState)[number];
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
    };
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