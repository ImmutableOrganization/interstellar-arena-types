export const arrayOfNumbersToFixed = (arr) => {
    return arr.map((n) => {
        if (isNaN(n)) {
            // console.log('NAN', arr);
            return n;
        }
        else {
            return n.toFixed(2);
        }
    });
};
