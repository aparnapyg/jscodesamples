/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function (ransomNote, magazine) {
    if (ransomNote.length > magazine.length) { return false; }

    // while (i <= magazine.length && j < ransomNote.length) {
    //     if (magazine.charAt(i) !== ransomNote.charAt(j)) {
    //         return false;
    //     }
    //     else {
    //         i++;
    //         j++;
    //     }
    // }
    // return true;

    let magazineCopy = magazine;

    for (const character of ransomNote) {
        if (magazineCopy.indexOf(character) !== -1) { 
            magazineCopy = magazineCopy.replace(character, '');
        }
        else {  return false; }
    }
    return true;
};