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


/* light theme */

const toggle = document.getElementById('toggle');

const container = document.querySelector('.container');
const accent = document.querySelector('.text-accent');
const green = document.querySelector('.text-green');
const subtitle = document.querySelector('.subtitle');
const lengthSave = document.querySelector('.flex-right');
const generator = document.querySelector('.generator-module');


toggle.addEventListener('input', e => {
    const isChecked = e.target.checked;
    
    if(isChecked) {
        container.classList.add('light-theme');
        accent.classList.add('light-theme');
        green.classList.add('light-theme');
        subtitle.classList.add('light-theme');
        lengthSave.classList.add('light-theme');
        generator.classList.add('light-theme');
    } else {
        container.classList.remove('light-theme');
        accent.classList.remove('light-theme');
        green.classList.remove('light-theme');
        subtitle.classList.remove('light-theme');
        lengthSave.classList.remove('light-theme');
        generator.classList.remove('light-theme');
    }
});


/* length range indicator */

const rangeInputs = document.querySelectorAll('input[type="range"]');

rangeInputs.forEach(input => {
  input.addEventListener('input', handleInputChange);
})

function handleInputChange(e) {
  let target = e.target;
  if(e.target.type !== 'range') {
    target = document.getElementById('pwd-length');
  } 
  const min = target.min;
  const max = target.max;
  const val = target.value;
  
  target.style.backgroundSize = (val - min) * 100 / (max - min) + '% 100%';
}



