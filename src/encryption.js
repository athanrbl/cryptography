function Encrypt1() {
    return
}


function Encrypt2(message, key) {
    //Ceaser Cipher
	
	// Encrypts text using a shift 
	let encryptedMessage = '';

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

    return encryptedMessage;
}




function Encrypt3(){
	return
}