/* Imports */

/* Get DOM Elements */

/* State */

/* Events */

/* Display Functions */

// (don't forget to call any display functions you want to run on page load!)
const bulbOff = document.querySelector('.off');
const changeColor = document.querySelector('.changeBulb');
const bulbOn = document.querySelector('.on');
const bulb = document.querySelector('.circle');
const rectangle = document.querySelector('.rectangle');


bulbOn.addEventListener('click', () => {
    bulb.style.background = 'rgba(39, 255, 255, 1'; 
    bulb.style.boxShadow = `10px 10px 130px rgba(39, 255, 255, 1)`;
    rectangle.style.background = 'rgba(38, 255, 255, 1';
});

//changing bulb color

changeColor.addEventListener('click', () => {
    let colorArr = [];
    for (let i = 0; i < 3; i++){
        const random = Math.floor(Math.random() * 255);
        colorArr.push(random);
    }

    bulb.style.background = `RGB(${colorArr[0]}, ${colorArr[1]}, ${colorArr[2]})`; 
    bulb.style.boxShadow = `10px 10px 130px RGB(${colorArr[0]}, ${colorArr[1]}, ${colorArr[2]})`; 
    rectangle.style.background = `RGB(${colorArr[0]}, ${colorArr[1]}, ${colorArr[2]})`; 
});

bulbOff.addEventListener('click', () => {
    bulb.style.background = 'white'; 
    bulb.style.boxShadow = 'none';
    rectangle.style.background = 'white';

    setTimeout(() => {
        alert('The light is off');
    });
});