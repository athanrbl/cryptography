function Encrypt1() {
    return
}


function Encrypt2(text, shift) {
    //Ceaser Cipher
	
	// Encrypts text using a shift 
	let result=""
	for (let i = 0; i < text.length; i++)
	{
		let char = text[i];
		if (char.toUpperCase(text[i]))
		{
			let ch = String.fromCharCode((char.charCodeAt(0) + shift-65) % 26 + 65);
			result += ch;
		}
		else
		{
			let ch = String.fromCharCode((char.charCodeAt(0) + shift-97) % 26 + 97);
			result += ch;
		}
	}
	return result;
}




function Encrypt3(){
	return
}