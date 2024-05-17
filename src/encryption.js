// resources
// cipher 1
const l1 = ['a','b','c','d','e']
const l2 = ['f','g','h','i','j']
const l3 = ['k','l','m','n','o']
const l4 = ['p','q','r','s','t']
const l5 = ['u','v','w','x','y']
const l6 = ['z',' ',',','?','\'']
const arrayList = [l1,l2,l3,l4,l5,l6]

// used for encoding
let letterArray = []
let output = ""

// ---------------

function Encrypt1() {

    let input = document.getElementById("InputT").value // input 'hey' : array = ['h','e','y']
    letterArray = input.split('') // split by each character

    letterArray.forEach(character => {

        arrayList.forEach((listNumbered, i) => {
          //console.log(letterArray, character, listNumbered, listNumbered.indexOf(character))
          if(listNumbered.indexOf(character) != -1) { // if character is found (-1 is not found)
            output += i+1 // should return list number
            output += listNumbered.indexOf(character)+1 // should return character index in list
          } else {return}
        });
    })
    document.getElementById("OutputT").value = output //returns output
    output = ""
}

function Encrypt2() {
    const message = document.getElementById("InputT").value;
    const key = parseInt(document.getElementById("encrypt").value);
    let encryptedMessage = " ";

    for (let i = 0; i < message.length; i++) {
        const char = message[i];
        let encryptedChar = char;

        if (char.match(/[A-Za-z]/)) {
            const baseCharCode = char.toLowerCase() === char ? 'a'.charCodeAt(0) : 'A'.charCodeAt(0);
            const shiftedCharCode = (char.charCodeAt(0) - baseCharCode + key) % 26;
            encryptedChar = String.fromCharCode(baseCharCode + shiftedCharCode);
        }

        encryptedMessage += encryptedChar;
    }

    document.getElementById("InputT").value = encryptedMessage;
    encryptedMessage=""
}

const charToNum = {'a': 10, 'b': 11, 'c': 12, 'd': 13, 'e': 14, 'f': 15, 'g': 16, 'h': 17, 'i': 18, 'j': 19, 'k': 20, 'l': 21, 'm': 22, 'n': 23, 'o': 24, 'p': 25, 'q': 26, 'r': 27, 's': 28, 't': 29, 'u': 30, 'v': 31, 'w': 32, 'x': 33, 'y': 34, 'z': 36, ' ': 37};

function charsToNums(inputStr) {
  let nums = '';
  for (let char of inputStr) {
      if (char.toLowerCase() in charToNum) {
          nums += charToNum[char.toLowerCase()];
      } else {
          nums += char;
      }
  }
  return nums;
}

function Encrypt3() {
  const inputChars = document.getElementById('inputChars').value;
  const encryptedNums = charsToNums(inputChars);
  document.getElementById('output').innerText = 'Encryption: ' + encryptedNums;
}