'use strict'
const images = ['bee', 'cat', 'dog'];

function showArr(arr, elem) {
    let out = '';
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== undefined)
        out += `<div><img class="img-size" src="img\\${arr[i]}.png"><span>${i}</span></div>`;
    }
    document.querySelector(elem).innerHTML = out;
    document.querySelector('.out-1-sourse-length').innerHTML = 'Длина массива = ' + images.length;
document.querySelector('.out-1-sourse').innerHTML = 'const images = [' + images + ']';
}

showArr(images, '.out-1-sourse-image');



function addToArray() {
    let index = parseInt(document.querySelector('.array-index').value);
    if (index > 50) {
        alert('Зачем такое большое');
        return false
    }
    else if (index < 0) {
        alert ('Индекс должен быть больше нуля');
    }
    images[index] = document.querySelector('.array-element').value;
    showArr(images, '.out-1-sourse-image');
}

document.querySelector('.add-to-array').addEventListener('click', addToArray);