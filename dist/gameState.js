export var GameState;
(function (GameState) {
    GameState["Unset"] = "Unset";
    GameState["Lobby"] = "Lobby";
    GameState["Match"] = "Match";
    GameState["MatchEnd"] = "MatchEnd";
})(GameState || (GameState = {}));
export var GameMode;
(function (GameMode) {
    GameMode["FFA"] = "FFA";
    GameMode["TDM"] = "TDM";
    GameMode["ZOMBIES"] = "ZOMBIES";
})(GameMode || (GameMode = {}));
