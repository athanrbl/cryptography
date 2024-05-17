// resources
//cipher 3
const numToChar = {'10': 'a', '11': 'b', '12': 'c', '13': 'd', '14': 'e', '15': 'f', '16': 'g', '17': 'h', '18': 'i', '19': 'j', '20': 'k', '21': 'l', '22': 'm', '23': 'n', '24': 'o', '25': 'p', '26': 'q', '27': 'r', '28': 's', '29': 't', '30': 'u', '31': 'v', '32': 'w', '33': 'x', '34': 'y', '36': 'z', '37': ' '};
// used for decoding
let numberArray = []
let input = ""
// ---------------

function Decrypt1() {

    let output = document.getElementById("OutputT").value // '111211' : array = ['11','12','11']
    numberArray = output.match(/.{1,2}/g) || []; // match returns a split every N characters
    
    numberArray.forEach(pair => {

        let pairArray = pair.split('') //splits the pair into 2 numbers, list - index
        let listSelect = arrayList[pairArray[0]-1]
        let letter = listSelect[pairArray[1]-1]
        //console.log(pair, listSelect, letter)
        input += letter
    })
    document.getElementById("InputT").value = input //returns input
    input = ""
}

function Decrypt2() {
    const encryptedMessage = document.getElementById("OutputT").value;
    const key = parseInt(document.getElementById("decrypt").value);
    let decryptedMessage = "";

    for (let i = 0; i < encryptedMessage.length; i++) {
        const char = encryptedMessage[i];
        let decryptedChar = char;

        if (char.match(/[A-Za-z]/)) {
            const baseCharCode = char.toLowerCase() === char ? 'a'.charCodeAt(0) : 'A'.charCodeAt(0);
            const shiftedCharCode = (char.charCodeAt(0) - baseCharCode - key + 26) % 26;
            decryptedChar = String.fromCharCode(baseCharCode + shiftedCharCode);
        }

        decryptedMessage += decryptedChar;
    }

    document.getElementById("InputT").value = decryptedMessage;
}


function numsToChars(inputNums) {
    let chars = '';
    for (let i = 0; i < inputNums.length; i += 2) {
        const num = inputNums.substring(i, i + 2);
        if (num in numToChar) {
            chars += numToChar[num];
        } else {
            chars += num;
        }
    }
    return chars;
}

function Decrypt3() {
    const inputNums = document.getElementById('inputChars').value;
    const decryptedChars = numsToChars(inputNums);
    document.getElementById('output').innerText = 'Decryption: ' + decryptedChars;
}
