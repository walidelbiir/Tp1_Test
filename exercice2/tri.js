
function containsNonNumerical(array) {
    if (!Array.isArray(array)) {
        throw new TypeError('Input must be an array');
    }
    return array.some(value => isNaN(value));
   }

export function trier(x){
    if (!Array.isArray(x)) {
        throw new TypeError('Input must be an array');
    }
    if(containsNonNumerical(x)) throw new TypeError("array with non numeric elements")
    return x.sort();
}