export const GameState = ['Unset', 'Lobby', 'Match', 'MatchEnd'] as const;
export const GameMode = ['FFA', 'TDM'] as const;
export type GameMode = (typeof GameMode)[number];
