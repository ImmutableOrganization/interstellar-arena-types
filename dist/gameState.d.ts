export declare const GameState: readonly ["Unset", "Lobby", "Match", "MatchEnd"];
export declare const GameMode: readonly ["FFA", "TDM"];
export type GameMode = (typeof GameMode)[number];