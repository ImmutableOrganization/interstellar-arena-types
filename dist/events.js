import { encodeFireLaser, encodeFireLaserHit, encodeFireLaserHitZombie, encodeCharacterMove, encodePlayerStatus, encodePlayerRespawn, encodePlayerSwitchWeapon, encodePlayerReloadWeaponFired, encodePlayerReloadWeaponComplete, encodeGetEntitiesCallback, encodePlayerBuyItem, encodeGameStarted, encodeGameEnded, encodeEntities, encodeZombieRoundUpdate, encodeUserDisconnected, encodeZombieAttack, encodePointsUpdate, decodeFireLaser, decodeCharacterMove, decodePlayerStatus, decodeFireLaserHit, decodeFireLaserHitZombie, decodePlayerRespawn, decodePlayerSwitchWeapon, decodePlayerReloadWeaponFired, decodePlayerReloadWeaponComplete, decodeGetEntitiesCallback, decodePlayerBuyItem, decodeGameStarted, decodeGameEnded, decodeEntities, decodeZombieRoundUpdate, decodeUserDisconnected, decodeZombieAttack, decodePointsUpdate } from "./eventCoders.js";
export var EventConstants;
(function (EventConstants) {
    EventConstants["END_OF_EVENT"] = "|";
})(EventConstants || (EventConstants = {}));
export var SocketEvents;
(function (SocketEvents) {
    SocketEvents["Game"] = "game";
    SocketEvents["Lobbies"] = "lobbies";
    SocketEvents["Error"] = "error";
    SocketEvents["Tick"] = "tick";
})(SocketEvents || (SocketEvents = {}));
export var SerializedSocketEvents;
(function (SerializedSocketEvents) {
    SerializedSocketEvents["Game"] = "0";
    SerializedSocketEvents["Lobbies"] = "1";
    SerializedSocketEvents["Error"] = "2";
    SerializedSocketEvents["Tick"] = "3";
})(SerializedSocketEvents || (SerializedSocketEvents = {}));
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
    GameEvents["PointsUpdate"] = "pointsUpdate";
})(GameEvents || (GameEvents = {}));
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
    SerializedGameEvents["PointsUpdate"] = "17";
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
    'game:pointsUpdate': SerializedSocketEvents.Game + SerializedGameEvents.PointsUpdate,
};
export const decodeEventMap = {
    [SerializedGameEvents.FireLaser]: decodeFireLaser,
    [SerializedGameEvents.PlayerStatus]: decodePlayerStatus,
    [SerializedGameEvents.CharacterMove]: decodeCharacterMove,
    [SerializedGameEvents.FireLaserHit]: decodeFireLaserHit,
    [SerializedGameEvents.FireLaserHitZombie]: decodeFireLaserHitZombie,
    [SerializedGameEvents.PlayerRespawn]: decodePlayerRespawn,
    [SerializedGameEvents.PlayerSwitchWeapon]: decodePlayerSwitchWeapon,
    [SerializedGameEvents.PlayerReloadWeaponFired]: decodePlayerReloadWeaponFired,
    [SerializedGameEvents.PlayerReloadWeaponComplete]: decodePlayerReloadWeaponComplete,
    [SerializedGameEvents.GetEntitiesCallback]: decodeGetEntitiesCallback,
    [SerializedGameEvents.PlayerBuyItem]: decodePlayerBuyItem,
    [SerializedGameEvents.GameStarted]: decodeGameStarted,
    [SerializedGameEvents.GameEnded]: decodeGameEnded,
    [SerializedGameEvents.Entities]: decodeEntities,
    [SerializedGameEvents.ZombieRoundUpdate]: decodeZombieRoundUpdate,
    [SerializedGameEvents.UserDisconnected]: decodeUserDisconnected,
    [SerializedGameEvents.ZombieAttack]: decodeZombieAttack,
    [SerializedGameEvents.PointsUpdate]: decodePointsUpdate,
};
export const encodeEventMap = {
    [GameEvents.FireLaser]: encodeFireLaser,
    [GameEvents.PlayerStatus]: encodePlayerStatus,
    [GameEvents.CharacterMove]: encodeCharacterMove,
    [GameEvents.FireLaserHit]: encodeFireLaserHit,
    [GameEvents.FireLaserHitZombie]: encodeFireLaserHitZombie,
    [GameEvents.PlayerRespawn]: encodePlayerRespawn,
    [GameEvents.PlayerSwitchWeapon]: encodePlayerSwitchWeapon,
    [GameEvents.PlayerReloadWeaponFired]: encodePlayerReloadWeaponFired,
    [GameEvents.PlayerReloadWeaponComplete]: encodePlayerReloadWeaponComplete,
    [GameEvents.GetEntitiesCallback]: encodeGetEntitiesCallback,
    [GameEvents.PlayerBuyItem]: encodePlayerBuyItem,
    [GameEvents.GameStarted]: encodeGameStarted,
    [GameEvents.GameEnded]: encodeGameEnded,
    [GameEvents.Entities]: encodeEntities,
    [GameEvents.ZombieRoundUpdate]: encodeZombieRoundUpdate,
    [GameEvents.UserDisconnected]: encodeUserDisconnected,
    [GameEvents.ZombieAttack]: encodeZombieAttack,
    [GameEvents.PointsUpdate]: encodePointsUpdate,
};
export const encodeEvent = (event) => {
    return serializedEventMap[event];
};
export function encodeEncodedEvents(events) {
    return `${SerializedSocketEvents.Tick}${EventConstants.END_OF_EVENT}${events.join('|')}`;
}
export const decodeEncodedEvents = (combinedEvents) => {
    const beginning = combinedEvents.slice(0, 2);
    const check = `${SerializedSocketEvents.Tick}${EventConstants.END_OF_EVENT}`;
    if (beginning !== check) {
        throw new Error('Invalid data');
    }
    const rest = combinedEvents.slice(2);
    if (!rest) {
        throw new Error('Invalid data');
    }
    const events = rest.split('|');
    const decodedEvents = [];
    for (const event of events) {
        const controlCode = event.slice(0, 2);
        if (!controlCode) {
            throw new Error('Control code not found');
        }
        const decoder = decodeEventMap[controlCode];
        if (!decoder) {
            throw new Error('Decoder not found');
        }
        const data = event.slice(2);
        if (!data) {
            throw new Error('Data not found');
        }
        decodedEvents.push(decoder(data));
    }
    return decodedEvents;
};
