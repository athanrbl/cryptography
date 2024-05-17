
// resources
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
    const key = parseInt(document.getElementById("encrypt").value);
    let decryptedMessage = " ";

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

    document.getElementById("OutputT").value = decryptedMessage;
}
