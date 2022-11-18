const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let passwordLength = 15
let firstPasswordEl = document.getElementById("password-one")
let secondPasswordEl = document.getElementById("password-two")

function generatePassword() {
    let password = ""
    for (let i = 0; i < passwordLength; i++) {
        randomCharacter = Math.floor( Math.random() * characters.length )
        password += characters[randomCharacter]
    }
    return password
}

function renderPasswords() {
    firstPasswordEl.textContent = generatePassword()
    secondPasswordEl.textContent = generatePassword()
}

function copyPassword(password) {
    navigator.clipboard.writeText(password.textContent)
    alert("Copied password: " + password.textContent)
}
