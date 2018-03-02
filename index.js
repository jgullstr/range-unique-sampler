/**
 * Generate function for inserting selected index in sorted lookup.
 * @param {array} array
 * @returns {function}
 */
const insort = (array) => (x, low = 0, high = array.length) => {
    while (low < high) {
        let mid = low + high >>> 1;
        if (x < array[mid] - mid) {
            high = mid;
        }
        else {
            low = mid + 1;
        }
    }
    const pos = x + low;
    array.splice(low, 0, pos);
    return pos;
}

/**
 * Generate function sampling unique values in range.
 * @param {integer} min Minimal value to sample (inclusive)
 * @param {integer} max Minimal value to sample (exclusive)
 * @returns {function} Function returning unique value in range for each successive call.
 */
const uniqueSampler = (min, max, random = Math.random) => {
    const pos = insort([]);
    let count = max - min;
    let found_lo = 0;
    let found_hi = 0;
    return () => {
        if (count === 0) {
            throw new Error('No samples left to pick');
        }
        return min + pos(~~(random() * count--));
    }
}

export default uniqueSampler;