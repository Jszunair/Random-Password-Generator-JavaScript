


let keys = [
    "A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"
]

let passOne = document.getElementById('pass1')
let passTwo = document.getElementById('pass2')

function generating(){
    passOne.textContent = ""
    passTwo.textContent = ""
    let newPass = ""
    for (let i = 0; i < 6; i ++){
        let randomNumber = Math.floor(Math.random()*keys.length);
        newPass += keys[randomNumber]
        passOne.textContent = newPass
passTwo.textContent = newPass
    }
  
}
let generate = document.querySelector("button");
generate.addEventListener('click',generating);