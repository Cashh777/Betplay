var keys = document.querySelectorAll('.keyboard__key');
var nums = document.querySelectorAll('.keyboard__num');
const keyboardC = document.querySelector('.keyboard__content');
const keyDelete = document.getElementById('keyDelete');
const capsLock = document.getElementById('capsLock');
let capsLockOn = false;
const inputKeyboard = document.getElementById('inputKeyboard');


keys.forEach(key => {
    key.addEventListener('click', () => {
        if (inputKeyboard.value.length < 8) {
            if (capsLockOn) {
                inputKeyboard.value += key.textContent.toUpperCase();
            } else {
                inputKeyboard.value += key.textContent.toLowerCase();
            }
        }
    });
});

nums.forEach(num => {
    num.addEventListener('click', () => {
        if(inputKeyboard.value.length < 8){
            inputKeyboard.value += num.textContent;
        }
    });
});

keyDelete.addEventListener('click', () => {
    var currentValue = inputKeyboard.value;
    inputKeyboard.value = currentValue.slice(0, -1);
});

capsLock.addEventListener('click', () => {
    capsLockOn = !capsLockOn;

    if(keyboardC.classList.contains('keyboard__mayus')){
        keyboardC.classList.remove('keyboard__mayus');
    }else{
        keyboardC.classList.add('keyboard__mayus');
    }
});

// Deshabilita la entrada manual en el campo de entrada
inputKeyboard.addEventListener('keypress', function(e) {
    e.preventDefault();
});