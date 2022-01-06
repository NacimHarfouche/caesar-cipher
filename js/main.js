/************
 * Variables
 ***********/

// array of letters
let arrayLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", " ", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
let reverseArray = [" ", "z", "y", "x", "w", "v", "u", "t", "s", "r", "q", "p", "o", "n", "m", "l", "k", "j", "i", "h", "g", "f", "e", "d", "c", "b", "a"];
// store the message
let message = "";

// get the buttons 
let encryptButton = document.getElementById("encryptButton");
let decryptButton = document.getElementById("decryptButton");

// store the arrayLength
arrayLettersLength = arrayLetters.length - 1;

/************
 * Functions 
 ***********/
// lightens the encryption key
function getLightensEncryptionKey(key) {
    console.log("1 : ",key)
    // get how much time 26 in the key and set it in string
    let howMuchArrayLength = (key / arrayLettersLength).toString();
    console.log("2 : ",howMuchArrayLength)
    // remove the number after .
    howMuchArrayLength = howMuchArrayLength.replace(/[\.{1}][0-9]+/g, "");
    console.log("3 : ",howMuchArrayLength)
    // multiplies
    howMuchArrayLength = parseInt(howMuchArrayLength) * arrayLettersLength;
    console.log("4 : ",howMuchArrayLength)
    // subtracted 
    console.log("5 : ",key -= howMuchArrayLength)
    return howMuchArrayLength - key;
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


/***********
 * execution
 ***********/
// on click encrypt button
encryptButton.addEventListener("click", () => {
    // get the input text 
    let inputEncryptText = document.getElementById("encryptText").value;
    // get the encrypt key + parse the value
    let inputEncryptKey = parseInt(document.getElementById("encryptKey").value);
    // store de key and lightens the key
    let keyEncryption = getLightensEncryptionKey(inputEncryptKey);
    console.log("key : ", getLightensEncryptionKey(inputEncryptKey))
    // store the index of every letter of the message to encrypt => get the index 
    let indexOfMessageToEncrypt = getIndexOfLetters(inputEncryptText);
    // store the encrypted message => get encrypted message
    let messageEncryptedEnd = getEncryptedMessage(indexOfMessageToEncrypt, keyEncryption);
    console.log("encrypted message 1 : ", messageEncryptedEnd);
});

// on click decrypt button
decryptButton.addEventListener("click", () => {
    // get the input text
    let inputDecryptText = document.getElementById("decryptText").value;
    // get the decrypt key
    let inputDecryptKey = parseInt(document.getElementById("decryptKey").value);
    // store de key and lightens the key
    let keyEncryption = getLightensEncryptionKey(inputDecryptKey);
    // store the index of every lette of the message to decipher => get the index of the encrypted message
    let indexOfMessageToDecipher = getIndexOfLetters(inputDecryptText);
    // store the decipher message => get the decipher message
    let messageDecipherEnd = getDecipherMessage(indexOfMessageToDecipher, keyEncryption);
    console.log(messageDecipherEnd)
    // test is it equal ?
    if (document.getElementById("encryptText").value === messageDecipherEnd) {
        console.log("ok")
    } else {
        console.log("no")
    }
    
});

// reload the page every 3sec
var count = 0;
// setInterval(() => {
//     count++
//     console.log(count);
//     if (count > 3) window.location.reload();
// }, 1000);

/***********
 * execution
 ***********/
// // lightens the key 
// keyEncryption = getLightensEncryptionKey(keyEncryption);


// // get the index 
// indexOfMessageToEncrypt = getIndexOfLetters(message);

// // get encrypted message
// messageEncryptedEnd = getEncryptedMessage(indexOfMessageToEncrypt, keyEncryption);
// //console.log("encrypted message 1 : ", messageEncryptedEnd);

// // get the index of the encrypted message
// indexOfMessageToDecipher = getIndexOfLetters(messageEncryptedEnd);
// // console.log(indexOfMessageToDecipher)

// // get the decipher message
// messageDecipherEnd = getDecipherMessage(indexOfMessageToDecipher, keyEncryption);
// //console.log("decipher message 1 : ", messageDecipherEnd)

// console.log("message : ", message)

