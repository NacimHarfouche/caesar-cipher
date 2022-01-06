/************
 * Variables
 ***********/

// array of letters
let arrayLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", " "];
let reverseArray = [" ", "z", "y", "x", "w", "v", "u", "t", "s", "r", "q", "p", "o", "n", "m", "l", "k", "j", "i", "h", "g", "f", "e", "d", "c", "b", "a"];
// store de key
let keyEncryption = 2445445;
// store de layer
let layerEncryption = 1552457;
// let message = prompt("Your Seed Phrase ?");
let message = "require crisp cart spy floor word diesel rally skill carpet chronic vital audit oyster beef fame cluster sort arch park aspect dentist globe veteran";
// store the index of every letter of the message to encrypt
let indexOfMessageToEncrypt;
// store the encrypted message
let messageEncryptedEnd;
// store the index of every lette of the message to decipher
let indexOfMessageToDecipher;
// store the decipher message
let messageDecipherEnd;

/************
 * Functions 
 ***********/
// lightens the encryption key
function getLightensEncryptionKey(key) {
    // get how much time 26 in the key and set it in string
    let howMuch26 = (key / 26).toString();
    // remove the number after .
    howMuch26 = howMuch26.replace(/[\.{1}][0-9]+/g, "")
    // multiplies
    howMuch26 = parseInt(howMuch26) * 26;
    // subtracted 
    key -= howMuch26;
    return key;
}

// get the index of every character from the array of letters
function getIndexOfLetters(message) {
    // array to store the index
    let ArrayIndex = [];
    // iterate on the message and store the index
    for (let letter of message) {
        ArrayIndex.push(arrayLetters.indexOf(letter));
    }
    return ArrayIndex;
}

// get the message encrypted
function getEncryptedMessage(arrayIndex, key) {
    // store the encrypted message
    let messageEncrypted = "";
    // iterate on the array index
    for (let position of arrayIndex) {
        // iterate with the key to get the right position in the array
        for (let i = key; i > 0; --i) {
            if (position == 26) {
                position = 0;
                continue
            }
            position++
        }
        // store the letter in the message
        messageEncrypted += arrayLetters[position];
    }
    return messageEncrypted;
}

// get the decipher message
function getDecipherMessage(arrayIndex, key) {
    // store the decipher message
    let messageDecipher = "";
    //iterate on the array index
    for (let position of arrayIndex) {
        // when it's the end of the array
        for (let i = key; i > 0; --i) {
            if (position == 0) {
                position = 26;
                continue
            }
            position--
        }
        messageDecipher += arrayLetters[position];
    }
    return messageDecipher;
}

function executeEncrypting(key, layer, message) {
    let encrypted = message;
    for (let i = layer; i > 0; --i) {
        // get the index 
        allIndex = getIndexOfLetters(encrypted);

        // get encrypted message
        encrypted = getEncryptedMessage(allIndex, key);
        console.log(encrypted)
    }
    return encrypted;
}

function executeDecipher(key, layer, message) {
    let decipher = message;
    for (let i = layer +1; i > 0; --i) {
        // get the index 
        allIndex = getIndexOfLetters(decipher);

        // get encrypted message
        decipher = getDecipherMessage(allIndex, key);
    }
    return decipher;
}


/***********
 * execution
 ***********/
// lightens the key 
keyEncryption = getLightensEncryptionKey(keyEncryption);
console.log("test the key : ", keyEncryption)

// get the index 
indexOfMessageToEncrypt = getIndexOfLetters(message);

// get encrypted message
messageEncryptedEnd = getEncryptedMessage(indexOfMessageToEncrypt, keyEncryption);
//console.log("encrypted message 1 : ", messageEncryptedEnd);

// get the index of the encrypted message
indexOfMessageToDecipher = getIndexOfLetters(messageEncryptedEnd);
// console.log(indexOfMessageToDecipher)

// get the decipher message
messageDecipherEnd = getDecipherMessage(indexOfMessageToDecipher, keyEncryption);
//console.log("decipher message 1 : ", messageDecipherEnd)

// console.log("message : ", message)

if (message === messageDecipherEnd) {
    console.log("ok")
} else {
    console.log("no")
}


// NEED LAYERS
// choose a layers key ex: 423
// iterate encrypting 423 times the message

let messageEncryptedTest = executeEncrypting(keyEncryption, layerEncryption, message);
//console.log(messageEncryptedTest)
let messageDecipherTest = executeDecipher(keyEncryption, layerEncryption, message)
//console.log(messageDecipherTest)

//iwhl iwrui jgrusikrjgprxcffirnfivrv wjwcrisccprjb ccrusigwkruzife urm kscrslv krfpjkwirtwwxrxsdwrucljkwirjfikrsiuzrgsibrsjgwukrvwek jkrycftwrmwkwise