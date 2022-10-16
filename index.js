
function generatePassword(){
    const characters =["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?","/"]
    let password = ""
    for( let i=0; i<15; i++){
        let random = Math.floor(Math.random() * characters.length)
        password += characters[random]
    }
    return password
}

function showPassword(){
    let passwordOneEl = document.getElementById("password-1")
    let passwordTwoEl = document.getElementById("password-2")
    passwordOneEl.textContent = generatePassword()
    console.log(passwordOneEl.textContent)
    passwordTwoEl.textContent = generatePassword()
    console.log(passwordTwoEl.textContent)
}

function copyPassword(passwordText){
    var TempText = document.createElement("input")
    TempText.value = passwordText
    document.body.appendChild(TempText)
    TempText.select()
    
    document.execCommand("copy")
    document.body.removeChild(TempText)
    
    alert("Copied the text -   "+ TempText.value)
}



