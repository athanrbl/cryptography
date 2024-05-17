function Decryption2(){
    const encryptedMessage = document.getElementById('message').value;
    const key = parseInt(document.getElementById('key').value);
    let decryptedMessage = '';

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

    document.getElementById('encryptedMessage').textContent = decryptedMessage;
}
