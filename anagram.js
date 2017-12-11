function anagrams(stringA, stringB) {
    const mapA = buildCharacterMap(stringA);
    const mapB = buildCharacterMap(stringB);

    if(Object.keys(mapA).length !== Object.keys(mapB).length) {
        return false;
    }

    for(let char in mapA) {
        if(mapA[char] !== mapB[char]) {
            return false;
        }
    }

    return true;
}


function buildCharacterMap(str) {
    const charMap = {};

    for(let char of str.replace(/[^\w]/g, "").toLowerCase()) {
        if(charMap[char]) {
            charMap[char]++;
        } else {
            charMap[char] = 1;
        }
    }

    return charMap;
}

console.log(anagrams('hello', 'elloh'));
console.log(anagrams('I like cheese', 'Cheese is great'));
