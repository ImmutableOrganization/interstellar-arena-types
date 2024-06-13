import { encodeFireLaser, encodeFireLaserHit, encodeCharacterMove, encodePlayerStatus, encodePlayerRespawn, encodePlayerSwitchWeapon, encodePlayerReloadWeaponFired, encodePlayerReloadWeaponComplete, encodeGameStarted, encodeGameEnded, encodeUserDisconnected, decodeFireLaser, decodeCharacterMove, decodePlayerStatus, decodeFireLaserHit, decodePlayerRespawn, decodePlayerSwitchWeapon, decodePlayerReloadWeaponFired, decodePlayerReloadWeaponComplete, decodeGameStarted, decodeGameEnded, decodeUserDisconnected, } from './eventCoders.js';
export var EventConstants;
(function (EventConstants) {
    EventConstants["END_OF_EVENT"] = "|";
})(EventConstants || (EventConstants = {}));
export var SocketEvents;
(function (SocketEvents) {
    SocketEvents["Game"] = "game";
    SocketEvents["Error"] = "error";
    SocketEvents["Tick"] = "tick";
})(SocketEvents || (SocketEvents = {}));
export var SerializedSocketEvents;
(function (SerializedSocketEvents) {
    SerializedSocketEvents["Game"] = "0";
    SerializedSocketEvents["Error"] = "2";
    SerializedSocketEvents["Tick"] = "3";
})(SerializedSocketEvents || (SerializedSocketEvents = {}));
export var GameEvents;
(function (GameEvents) {
    GameEvents["FireLaser"] = "fireLaser";
    GameEvents["FireLaserHit"] = "fireLaserHit";
    GameEvents["CharacterMove"] = "characterMove";
    GameEvents["PlayerRespawn"] = "playerRespawn";
    GameEvents["PlayerSwitchWeapon"] = "playerSwitchWeapon";
    GameEvents["PlayerReloadWeaponFired"] = "playerReloadWeaponFired";
    GameEvents["PlayerReloadWeaponComplete"] = "playerReloadWeaponComplete";
    GameEvents["GameStarted"] = "gameStarted";
    GameEvents["GameEnded"] = "gameEnded";
    GameEvents["UserDisconnected"] = "userDisconnected";
    GameEvents["PlayerStatus"] = "playerStatus";
})(GameEvents || (GameEvents = {}));
export var SerializedGameEvents;
(function (SerializedGameEvents) {
    SerializedGameEvents["FireLaser"] = "00";
    SerializedGameEvents["FireLaserHit"] = "01";
    SerializedGameEvents["CharacterMove"] = "03";
    SerializedGameEvents["PlayerRespawn"] = "04";
    SerializedGameEvents["PlayerSwitchWeapon"] = "05";
    SerializedGameEvents["PlayerReloadWeaponFired"] = "06";
    SerializedGameEvents["PlayerReloadWeaponComplete"] = "07";
    SerializedGameEvents["GameStarted"] = "10";
    SerializedGameEvents["GameEnded"] = "11";
    SerializedGameEvents["UserDisconnected"] = "14";
    SerializedGameEvents["PlayerStatus"] = "15";
})(SerializedGameEvents || (SerializedGameEvents = {}));
export var ErrorEvents;
(function (ErrorEvents) {
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
    SerializedErrorEvents["LobbyFull"] = "3";
    SerializedErrorEvents["NoPlayerFound"] = "6";
    SerializedErrorEvents["Dead"] = "7";
})(SerializedErrorEvents || (SerializedErrorEvents = {}));
export const serializedEventMap = {
    'game:fireLaser': SerializedSocketEvents.Game + SerializedGameEvents.FireLaser,
    'game:fireLaserHit': SerializedSocketEvents.Game + SerializedGameEvents.FireLaserHit,
    'game:characterMove': SerializedSocketEvents.Game + SerializedGameEvents.CharacterMove,
    'game:playerRespawn': SerializedSocketEvents.Game + SerializedGameEvents.PlayerRespawn,
    'game:playerSwitchWeapon': SerializedSocketEvents.Game + SerializedGameEvents.PlayerSwitchWeapon,
    'game:playerReloadWeaponFired': SerializedSocketEvents.Game + SerializedGameEvents.PlayerReloadWeaponFired,
    'game:playerReloadWeaponComplete': SerializedSocketEvents.Game + SerializedGameEvents.PlayerReloadWeaponComplete,
    'game:gameStarted': SerializedSocketEvents.Game + SerializedGameEvents.GameStarted,
    'game:gameEnded': SerializedSocketEvents.Game + SerializedGameEvents.GameEnded,
    'game:userDisconnected': SerializedSocketEvents.Game + SerializedGameEvents.UserDisconnected,
    'game:playerStatus': SerializedSocketEvents.Game + SerializedGameEvents.PlayerStatus,
};
export const decodeEventMap = {
    [SerializedGameEvents.FireLaser]: decodeFireLaser,
    [SerializedGameEvents.PlayerStatus]: decodePlayerStatus,
    [SerializedGameEvents.CharacterMove]: decodeCharacterMove,
    [SerializedGameEvents.FireLaserHit]: decodeFireLaserHit,
    [SerializedGameEvents.PlayerRespawn]: decodePlayerRespawn,
    [SerializedGameEvents.PlayerSwitchWeapon]: decodePlayerSwitchWeapon,
    [SerializedGameEvents.PlayerReloadWeaponFired]: decodePlayerReloadWeaponFired,
    [SerializedGameEvents.PlayerReloadWeaponComplete]: decodePlayerReloadWeaponComplete,
    [SerializedGameEvents.GameStarted]: decodeGameStarted,
    [SerializedGameEvents.GameEnded]: decodeGameEnded,
    [SerializedGameEvents.UserDisconnected]: decodeUserDisconnected,
};
export const encodeEventMap = {
    [GameEvents.FireLaser]: encodeFireLaser,
    [GameEvents.PlayerStatus]: encodePlayerStatus,
    [GameEvents.CharacterMove]: encodeCharacterMove,
    [GameEvents.FireLaserHit]: encodeFireLaserHit,
    [GameEvents.PlayerRespawn]: encodePlayerRespawn,
    [GameEvents.PlayerSwitchWeapon]: encodePlayerSwitchWeapon,
    [GameEvents.PlayerReloadWeaponFired]: encodePlayerReloadWeaponFired,
    [GameEvents.PlayerReloadWeaponComplete]: encodePlayerReloadWeaponComplete,
    [GameEvents.GameStarted]: encodeGameStarted,
    [GameEvents.GameEnded]: encodeGameEnded,
    [GameEvents.UserDisconnected]: encodeUserDisconnected,
};
export const encodeEvent = (event) => {
    return serializedEventMap[event];
};
export function encodeEncodedEvents(events) {
    events.sort((a, b) => a.localeCompare(b));
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
