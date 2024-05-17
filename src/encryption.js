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