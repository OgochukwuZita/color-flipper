'use strict'

//create array of colors
const colors = ['green','red','rgba(133,122,200)','#f15025','#f35015'];
//get identifiers
const btn = document.getElementById('btn');
const color = document.querySelector('.color');
//add eventlistener
btn.addEventListener('click',()=>{
const randomNumber = getRandomNumber();
//dom manipulation
document.body.style.backgroundColor= colors[randomNumber];
color.textContent = colors[randomNumber];
})
//write getrandomNumbers function
const getRandomNumber = ()=>{
    return Math.floor(Math.random()*colors.length);
}