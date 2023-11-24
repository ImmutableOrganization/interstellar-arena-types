export const stringToColor = function (str: string) {
    var hash = 0;
    for (var i = 0; i < str.length; i++) {
        hash = str.charCodeAt(i) + ((hash << 5) - hash);
    }
    var colour = '#';
    for (var i = 0; i < 3; i++) {
        var value = (hash >> (i * 8)) & 0xff;
        colour += ('00' + value.toString(16)).substr(-2);
    }

    return increase_brightness(colour, 1000);
};

function increase_brightness(hex: string, percent: number) {
    // strip the leading # if it's there
    hex = hex.replace(/^\s*#|\s*$/g, '');

    // convert 3 char codes --> 6, e.g. `E0F` --> `EE00FF`
    if (hex.length == 3) {
        hex = hex.replace(/(.)/g, '$1$1');
    }

    var r = parseInt(hex.substr(0, 2), 16),
        g = parseInt(hex.substr(2, 2), 16),
        b = parseInt(hex.substr(4, 2), 16);

    return '#' +
        ((0 | (1 << 8) + r + (256 - r) * percent / 100).toString(16)).substr(1) +
        ((0 | (1 << 8) + g + (256 - g) * percent / 100).toString(16)).substr(1) +
        ((0 | (1 << 8) + b + (256 - b) * percent / 100).toString(16)).substr(1);
}

export function calculateLevelAndRemainingXP(currentXP: number) {
    let level = 1;
    let xpForNextLevel = xpForLevel(level);

    // Find the current level based on XP
    while (currentXP >= xpForNextLevel) {
        level++;
        xpForNextLevel = xpForLevel(level);
    }


    // Calculate remaining XP for the next level
    let xpRemaining = xpForNextLevel - currentXP;

    return {
        currentLevel: level - 1,
        xpRemainingToNextLevel: xpRemaining
    };
}

// Helper function to calculate total XP for a given level
export function xpForLevel(level: number) {
    let xp = 0;
    for (let l = 1; l < level; l++) {
        xp += Math.floor(l + 300 * Math.pow(2, l / 7.0));
    }
    return xp;
}
