// resources
// cipher 1
let l1 = ['a','b','c','d','e']
let l2 = ['f','g','h','i','j']
let l3 = ['k','l','m','n','o']
let l4 = ['p','q','r','s','t']
let l5 = ['u','v','w','x','y'] // missing z
let arrayList = [l1,l2,l3,l4,l5]
let letterArray = []
let output = ""

// ---------------

/*export default*/ function Encrypt1() {

    let input = document.getElementById("InputT").textContent // input 'hey' : array = ['h','e','y']
    console.log(input)
    letterArray = input.split('') // split by each character
    letterArray.forEach(letter => {

        arrayList.forEach(numList => {
            if(numList.indexOf(letter) != -1) {
                output += letter // should return input
            } else {return}
        });
    })
    console.log('Your result is: ' + output)
    // lists = x, list index = y
}

/*
function Encrypt2() {
    return
}


function Encrypt3() {
    return
}*/