// EXTRA CREDIT

// Return the strings common to both input arrays. Do not return duplicates.
// Ex.:
//   commonStrings(['a', 'b', 'c'], ['a', 'd', 'e']);
//   => ['a']
//   commonStrings(['zoo', 'space', 'zoo'], ['zoo', 'space', 'boat']);
//   => ['zoo', 'space']
function commonStrings(array1, array2) {
    let strings = [];
    for (let i = 0; i < array1.length; i ++){
        for (let j = 0; j < array2.length; j++){
            if (array1[i] === array2[j]){
                strings.push(array1[i]);
                break
            }
        }
    }
    for (let k = 0; k < strings.length; k++){
        for (let l = k + 1; l < strings.length; l++){
            if (strings[k] === strings[l]){
                strings.splice(l, 1)
            }
        }
    }
    return strings
}

// Given three numbers, return a list of numbers from 1 to 100 that are
// divisible by at least one of a, b or c.
// Ex.:
//   divisibleByEither(50, 30, 29);
//   => [29, 30, 50, 58, 60, 87, 90, 100]
function divisibleByEither(a, b, c) {
    let products = [];
    for (let i=1; i <= 100; i++){
        if(i % a === 0 || i % b === 0 || i % c === 0){
            products.push(i);
        }
    }
    return products
}

// Compress a string using the rules below and return the result. To compress a
// string, replace consecutive duplicate characters with a number and the
// character. For this compression, only count consecutive duplicate
// characters. If a character is not repeated, it should not be changed.
// Assume that all inputs are lowercased.
// Ex.:
//   compressString('aaa');
//   => '3a'
//   compressString('ssssbb');
//   => '4s2b'
//   compressString('ssssbbba');
//   => '4s3ba'
function compressString(string) {
    let compressedLetters = []
    for (let i=0; i < string.length; i++){
        for (let j=i+1; j < string.length; j++){
            if (string[i] !== string[j] && j-i !== 1 && string[i] !== string[i-1]){
                compressedLetters.push(j-i);
                break
            } if (j+1 === string.length && string[i] === string [j] && string[i] !== string [i-1]){
                compressedLetters.push((j-i)+1);
            }
        } if (string[i] !== string[i-1]){
            compressedLetters.push(string[i]);
        }
    }
    if (compressedLetters.length === 1 && compressedLetters[0] === string[0] && string.length !== 1){
        compressedLetters.unshift(string.length)
    }
    let compressedString = compressedLetters.join('');
    return compressedString
}

export { commonStrings, compressString, divisibleByEither };
