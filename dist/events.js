export var SocketEvents;
(function (SocketEvents) {
    SocketEvents["Game"] = "game";
    SocketEvents["Lobbies"] = "lobbies";
    SocketEvents["Error"] = "error";
})(SocketEvents || (SocketEvents = {}));
export var GameEvents;
(function (GameEvents) {
    GameEvents["FireLaser"] = "fireLaser";
    GameEvents["FireLaserHit"] = "fireLaserHit";
    GameEvents["FireLaserHitZombie"] = "fireLaserHitZombie";
    GameEvents["CharacterMove"] = "characterMove";
    GameEvents["PlayerRespawn"] = "playerRespawn";
    GameEvents["PlayerSwitchWeapon"] = "playerSwitchWeapon";
    GameEvents["PlayerReloadWeaponFired"] = "playerReloadWeaponFired";
    GameEvents["PlayerReloadWeaponComplete"] = "playerReloadWeaponComplete";
    GameEvents["GetEntitiesCallback"] = "getEntitiesCallback";
    GameEvents["PlayerBuyItem"] = "playerBuyItem";
    GameEvents["GameStarted"] = "gameStarted";
    GameEvents["GameEnded"] = "gameEnded";
    GameEvents["Entities"] = "entities";
    GameEvents["ZombieRoundUpdate"] = "zombieRoundUpdate";
    GameEvents["UserDisconnected"] = "userDisconnected";
    GameEvents["PlayerStatus"] = "playerStatus";
    GameEvents["ZombieAttack"] = "zombieAttack";
    GameEvents["ScoreBoardUpdate"] = "scoreBoardUpdate";
    GameEvents["PointsUpdate"] = "pointsUpdate";
})(GameEvents || (GameEvents = {}));
export var SerializedSocketEvents;
(function (SerializedSocketEvents) {
    SerializedSocketEvents["Game"] = "0";
    SerializedSocketEvents["Lobbies"] = "1";
    SerializedSocketEvents["Error"] = "2";
})(SerializedSocketEvents || (SerializedSocketEvents = {}));
export var SerializedGameEvents;
(function (SerializedGameEvents) {
    SerializedGameEvents["FireLaser"] = "00";
    SerializedGameEvents["FireLaserHit"] = "01";
    SerializedGameEvents["FireLaserHitZombie"] = "02";
    SerializedGameEvents["CharacterMove"] = "03";
    SerializedGameEvents["PlayerRespawn"] = "04";
    SerializedGameEvents["PlayerSwitchWeapon"] = "05";
    SerializedGameEvents["PlayerReloadWeaponFired"] = "06";
    SerializedGameEvents["PlayerReloadWeaponComplete"] = "07";
    SerializedGameEvents["GetEntitiesCallback"] = "08";
    SerializedGameEvents["PlayerBuyItem"] = "09";
    SerializedGameEvents["GameStarted"] = "10";
    SerializedGameEvents["GameEnded"] = "11";
    SerializedGameEvents["Entities"] = "12";
    SerializedGameEvents["ZombieRoundUpdate"] = "13";
    SerializedGameEvents["UserDisconnected"] = "14";
    SerializedGameEvents["PlayerStatus"] = "15";
    SerializedGameEvents["ZombieAttack"] = "16";
    SerializedGameEvents["ScoreBoardUpdate"] = "17";
    SerializedGameEvents["PointsUpdate"] = "18";
})(SerializedGameEvents || (SerializedGameEvents = {}));
export var LobbyEvents;
(function (LobbyEvents) {
    LobbyEvents["CreatedLobby"] = "createdLobby";
    LobbyEvents["JoinedLobby"] = "joinedLobby";
    LobbyEvents["NewPlayerJoinedLobby"] = "newPlayerJoinedLobby";
    LobbyEvents["LeftLobby"] = "leftLobby";
    LobbyEvents["GetLobbiesCallback"] = "getLobbiesCallback";
})(LobbyEvents || (LobbyEvents = {}));
export var SerializedLobbyEvents;
(function (SerializedLobbyEvents) {
    SerializedLobbyEvents["CreatedLobby"] = "00";
    SerializedLobbyEvents["JoinedLobby"] = "01";
    SerializedLobbyEvents["NewPlayerJoinedLobby"] = "02";
    SerializedLobbyEvents["LeftLobby"] = "03";
    SerializedLobbyEvents["GetLobbiesCallback"] = "04";
})(SerializedLobbyEvents || (SerializedLobbyEvents = {}));
export var SerializedErrorEvents;
(function (SerializedErrorEvents) {
    SerializedErrorEvents["LobbyIdAlreadyExists"] = "0";
    SerializedErrorEvents["LobbyNotFound"] = "1";
    SerializedErrorEvents["PlayerNotInLobby"] = "2";
    SerializedErrorEvents["LobbyFull"] = "3";
    SerializedErrorEvents["PlayerInLobbyAlready"] = "4";
    SerializedErrorEvents["NoLobbyFound"] = "5";
    SerializedErrorEvents["NoPlayerFound"] = "6";
    SerializedErrorEvents["Dead"] = "7";
})(SerializedErrorEvents || (SerializedErrorEvents = {}));
export var ErrorEvents;
(function (ErrorEvents) {
    ErrorEvents["LobbyIdAlreadyExists"] = "lobbyIdAlreadyExists";
    ErrorEvents["LobbyNotFound"] = "lobbyNotFound";
    ErrorEvents["PlayerNotInLobby"] = "playerNotInLobby";
    ErrorEvents["LobbyFull"] = "lobbyFull";
    ErrorEvents["PlayerInLobbyAlready"] = "playerInLobbyAlready";
    ErrorEvents["NoLobbyFound"] = "no lobby found";
    ErrorEvents["NoPlayerFound"] = "no player found";
    ErrorEvents["Dead"] = "dead";
})(ErrorEvents || (ErrorEvents = {}));
export const deserializedEventMap = {
    '000': `${SocketEvents.Game}:${GameEvents.FireLaser}`,
    '001': `${SocketEvents.Game}:${GameEvents.FireLaserHit}`,
    '002': `${SocketEvents.Game}:${GameEvents.FireLaserHitZombie}`,
    '003': `${SocketEvents.Game}:${GameEvents.CharacterMove}`,
    '004': `${SocketEvents.Game}:${GameEvents.PlayerRespawn}`,
    '005': `${SocketEvents.Game}:${GameEvents.PlayerSwitchWeapon}`,
    '006': `${SocketEvents.Game}:${GameEvents.PlayerReloadWeaponFired}`,
    '007': `${SocketEvents.Game}:${GameEvents.PlayerReloadWeaponComplete}`,
    '008': `${SocketEvents.Game}:${GameEvents.GetEntitiesCallback}`,
    '009': `${SocketEvents.Game}:${GameEvents.PlayerBuyItem}`,
    '010': `${SocketEvents.Game}:${GameEvents.GameStarted}`,
    '011': `${SocketEvents.Game}:${GameEvents.GameEnded}`,
    '012': `${SocketEvents.Game}:${GameEvents.Entities}`,
    '013': `${SocketEvents.Game}:${GameEvents.ZombieRoundUpdate}`,
    '014': `${SocketEvents.Game}:${GameEvents.UserDisconnected}`,
    '015': `${SocketEvents.Game}:${GameEvents.PlayerStatus}`,
    '016': `${SocketEvents.Game}:${GameEvents.ZombieAttack}`,
    '017': `${SocketEvents.Game}:${GameEvents.ScoreBoardUpdate}`,
    '018': `${SocketEvents.Game}:${GameEvents.PointsUpdate}`,
    '100': `${SocketEvents.Lobbies}:${LobbyEvents.CreatedLobby}`,
    '101': `${SocketEvents.Lobbies}:${LobbyEvents.JoinedLobby}`,
    '102': `${SocketEvents.Lobbies}:${LobbyEvents.NewPlayerJoinedLobby}`,
    '103': `${SocketEvents.Lobbies}:${LobbyEvents.LeftLobby}`,
    '104': `${SocketEvents.Lobbies}:${LobbyEvents.GetLobbiesCallback}`,
    '20': `${SocketEvents.Error}:${ErrorEvents.LobbyIdAlreadyExists}`,
    '21': `${SocketEvents.Error}:${ErrorEvents.LobbyNotFound}`,
    '22': `${SocketEvents.Error}:${ErrorEvents.PlayerNotInLobby}`,
    '23': `${SocketEvents.Error}:${ErrorEvents.LobbyFull}`,
    '24': `${SocketEvents.Error}:${ErrorEvents.PlayerInLobbyAlready}`,
    '25': `${SocketEvents.Error}:${ErrorEvents.NoLobbyFound}`,
    '26': `${SocketEvents.Error}:${ErrorEvents.NoPlayerFound}`,
    '27': `${SocketEvents.Error}:${ErrorEvents.Dead}`,
};
export const serializedEventMap = {
    'game:fireLaser': SerializedSocketEvents.Game + SerializedGameEvents.FireLaser,
    'game:fireLaserHit': SerializedSocketEvents.Game + SerializedGameEvents.FireLaserHit,
    'game:fireLaserHitZombie': SerializedSocketEvents.Game + SerializedGameEvents.FireLaserHitZombie,
    'game:characterMove': SerializedSocketEvents.Game + SerializedGameEvents.CharacterMove,
    'game:playerRespawn': SerializedSocketEvents.Game + SerializedGameEvents.PlayerRespawn,
    'game:playerSwitchWeapon': SerializedSocketEvents.Game + SerializedGameEvents.PlayerSwitchWeapon,
    'game:playerReloadWeaponFired': SerializedSocketEvents.Game + SerializedGameEvents.PlayerReloadWeaponFired,
    'game:playerReloadWeaponComplete': SerializedSocketEvents.Game + SerializedGameEvents.PlayerReloadWeaponComplete,
    'game:getEntitiesCallback': SerializedSocketEvents.Game + SerializedGameEvents.GetEntitiesCallback,
    'game:playerBuyItem': SerializedSocketEvents.Game + SerializedGameEvents.PlayerBuyItem,
    'game:gameStarted': SerializedSocketEvents.Game + SerializedGameEvents.GameStarted,
    'game:gameEnded': SerializedSocketEvents.Game + SerializedGameEvents.GameEnded,
    'game:entities': SerializedSocketEvents.Game + SerializedGameEvents.Entities,
    'game:zombieRoundUpdate': SerializedSocketEvents.Game + SerializedGameEvents.ZombieRoundUpdate,
    'game:userDisconnected': SerializedSocketEvents.Game + SerializedGameEvents.UserDisconnected,
    'game:playerStatus': SerializedSocketEvents.Game + SerializedGameEvents.PlayerStatus,
    'game:zombieAttack': SerializedSocketEvents.Game + SerializedGameEvents.ZombieAttack,
    'game:scoreBoardUpdate': SerializedSocketEvents.Game + SerializedGameEvents.ScoreBoardUpdate,
    'game:pointsUpdate': SerializedSocketEvents.Game + SerializedGameEvents.PointsUpdate,
    'lobbies:createdLobby': SerializedSocketEvents.Lobbies + SerializedLobbyEvents.CreatedLobby,
    'lobbies:joinedLobby': SerializedSocketEvents.Lobbies + SerializedLobbyEvents.JoinedLobby,
    'lobbies:newPlayerJoinedLobby': SerializedSocketEvents.Lobbies + SerializedLobbyEvents.NewPlayerJoinedLobby,
    'lobbies:leftLobby': SerializedSocketEvents.Lobbies + SerializedLobbyEvents.LeftLobby,
    'lobbies:getLobbiesCallback': SerializedSocketEvents.Lobbies + SerializedLobbyEvents.GetLobbiesCallback,
    'error:lobbyIdAlreadyExists': SerializedSocketEvents.Error + SerializedErrorEvents.LobbyIdAlreadyExists,
    'error:lobbyNotFound': SerializedSocketEvents.Error + SerializedErrorEvents.LobbyNotFound,
    'error:playerNotInLobby': SerializedSocketEvents.Error + SerializedErrorEvents.PlayerNotInLobby,
    'error:lobbyFull': SerializedSocketEvents.Error + SerializedErrorEvents.LobbyFull,
    'error:playerInLobbyAlready': SerializedSocketEvents.Error + SerializedErrorEvents.PlayerInLobbyAlready,
    'error:no lobby found': SerializedSocketEvents.Error + SerializedErrorEvents.NoLobbyFound,
    'error:no player found': SerializedSocketEvents.Error + SerializedErrorEvents.NoPlayerFound,
    'error:dead': SerializedSocketEvents.Error + SerializedErrorEvents.Dead,
};
export const eventSerializer = (event) => {
    return serializedEventMap[event];
};
export const serializedGunMap = {
    '.357 Magnum': '00',
    '44 Magnum': '01',
    'AK-101': '02',
    'AK-47': '03',
    AKMS: '04',
    'Browning HP': '05',
    'Desert Eagle': '06',
    G18: '07',
    L96A1: '08',
    M24: '09',
    'M4 Carbine': '10',
    'M4 Commando': '11',
    'M4 Rifle': '12',
    M9: '13',
    MP5: '14',
    MP5K: '15',
    MP7: '16',
    'Model 29': '17',
    'Mossberg 590': '18',
    'N2 SRS': '19',
    P226: '20',
    'Remington 870': '21',
    'S&W Model 36': '22',
    'Sawed Off': '23',
    UMP: '24',
    W1200: '25',
};
