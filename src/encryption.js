function Encrypt1() {
    return
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


function Encrypt3() {
    return
}