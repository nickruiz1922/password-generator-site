let characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?","/"];

let resultOne = document.getElementById("result-one")
let resultTwo = document.getElementById("result-two")
let generateBtn = document.getElementById("generate-btn")


// function newPassword() {
//     for (let i = 0; i < 15; i++){
//         let randomIndexOne = Math.floor(Math.random() * characters.length)
//         resultOne.textContent += characters[randomIndexOne]
//         let randomIndexTwo = Math.floor(Math.random() * characters.length)
//         resultTwo.textContent += characters[randomIndexTwo]
//     }
// }

generateBtn.addEventListener("click", function() {
    resultOne.textContent = ""
    resultTwo.textContent = ""
    for (let i = 0; i < 15; i++){
        let randomIndexOne = Math.floor(Math.random() * characters.length)
        resultOne.textContent += characters[randomIndexOne]
        let randomIndexTwo = Math.floor(Math.random() * characters.length)
        resultTwo.textContent += characters[randomIndexTwo]
    }
    
})



