let generateButton = document.getElementById('create')
let passwordText = document.getElementById('password')
let clipboardButton = document.getElementById('copy')


let getRandomlower = ()=>{
   return String.fromCharCode(Math.floor(Math.random()*26)+97)
}

let getRandomUpper = ()=>{
    return String.fromCharCode(Math.floor(Math.random()*26)+65)
 }

 let getRandomNumber = ()=>{
    return String.fromCharCode(Math.floor(Math.random()*10)+48)
 }

 let getRandomSymbol = () =>{
     let symbols = '!@#$%&-+*/'
     return symbols[Math.floor(Math.random()*symbols.length)]
 }

 let randomFunctions = {getRandomlower,getRandomUpper,getRandomNumber,getRandomSymbol}

 function generatePassword(input) {
    let length = input 
    let generatedPassword = ''
    for(let i=0; i<length;i++){
        generatedPassword +=Object.values(randomFunctions)[Math.floor(Math.random() * 4)]()
    }
    return generatedPassword
 }

 
 generateButton.addEventListener('click',() =>{
     passwordText.innerText = generatePassword(document.getElementById("input").value)
    
 })

 let passwordResult = document.getElementById('password')

 clipboardButton.addEventListener('click',()=>{
     let password = passwordResult.innerText
     if(!password){
         return
     }

     let textarea = document.createElement('textarea')
     textarea.value = password
     document.body.appendChild(textarea)
     textarea.select()
     document.execCommand('copy')
     textarea.remove()
     window.alert("copied")
 })





 


 

