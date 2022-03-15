let chars = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m",
             "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",
             "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M",
             "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z",
             "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "~", "!", "@",
             "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "=", "+", "[",
             "]", "{", "}", "|", ";", ":", ",", ".", "/", "?"  
             ]

const pwdLength = document.getElementById("pwd-length");
const btn = document.getElementById("btn");

const pwd1 = document.getElementById("password1");       
const pwd2 = document.getElementById("password2");            
const pwd3 = document.getElementById("password3");            
const pwd4 = document.getElementById("password4"); 


btn.addEventListener("click", generatePassword);


function generatePassword() {
    pwd1.value = "";
    pwd2.value = "";
    pwd3.value = "";
    pwd4.value = "";
    
    for (let i = 1; i <= pwdLength.value; i++) {
    let ranNum =  Math.floor(Math.random() * chars.length);
    let pass1 = pwd1.value += chars[ranNum];
    pwd1.textContent = pass1;
    }

    for (let i = 1; i <= pwdLength.value; i++) {
    let ranNum =  Math.floor(Math.random() * chars.length);
    let pass2 = pwd2.value += chars[ranNum];
    pwd2.textContent = pass2;
    }
    
    for (let i = 1; i <= pwdLength.value; i++) {
    let ranNum =  Math.floor(Math.random() * chars.length);
    let pass3 = pwd3.value += chars[ranNum];
    pwd3.textContent = pass3;
    }
    
    for (let i = 1; i <= pwdLength.value; i++) {
    let ranNum =  Math.floor(Math.random() * chars.length);
    let pass4 = pwd4.value += chars[ranNum];
    pwd4.textContent = pass4;
    }
}    




