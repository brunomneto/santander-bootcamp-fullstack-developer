var currentNumberWrapper = document.getElementById('currentNumber');
var currentNumber = 0;


function increment() {
    if (currentNumber < 99){
        currentNumber = currentNumber + 1;
        currentNumberWrapper.innerHTML = currentNumber;
    }
}

function decrement() {
    if(currentNumber > -99) {
        currentNumber = currentNumber - 1;
    currentNumberWrapper.innerHTML = currentNumber;
    }
    if (currentNumber < 0) {
        currentNumberWrapper.style.color = 'red';
    }
}
