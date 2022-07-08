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
let password = document.querySelectorAll('.password');

btn.addEventListener("click", renderPassword);

function generatePassword() {
    password.value = "";
    let pass;
    for (let i = 0; i <= pwdLength.value; i++) {
        let randChar =  Math.floor(Math.random() * chars.length);
        pass = password.value += chars[randChar];
    }
    return pass;
} 

function renderPassword() {
    password.forEach(pass => pass.textContent = generatePassword());
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