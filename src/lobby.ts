import { Player, Laser } from './gameObjects.js';
import { GameState } from './gameState.js';

export type lobby = {
  id: string;
  players: Record<string, Player>;
  game: {
    gameState: GameState;
    arena: {
      winCondition: number;
    };
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
  lasers: Laser[];
  scoreBoard: ScoreBoard;
};

export type ScoreBoard = Record<
  string,
  {
    kills: number;
    deaths: number;
  }
>;
