// 'use strict'
// const colors = ['green','red','rgba(133,122,200)','#f15025','#f35015'];
// //get ids

// const btn = document.getElementById('btn');
// const color = document.querySelector('.color');
// //add eventlistener

// btn.addEventListener('click', function(){
//     //get randomNumber between 0-3
//     const randomNumber = getRandomNumber();
//     document.body.style.backgroundColor = colors[randomNumber];
//     document.textContent = colors[randomNumber];
// })
// const getRandomNumber = ()=>{
//    return Math.floor(Math.random()*colors.length)
// }
'use strict'

//create array of colors
const colors = ['green','red','rgba(133,122,200)','#f15025','#f35015'];

//get identifiers
const btn = document.getElementById('btn');
const color = document.querySelector('.color');
//add event listener
btn.addEventListener('click', ()=>{
    //access randomNumbers
    const randomNumber = getRandomNumber();
    //manipulate dom
    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber];
})
//write function to get random numbers
const getRandomNumber = ()=>{
    return Math.floor(Math.random()*colors.length);
    //math.floor rounds down to the nearest integers
    //math.random accesses random elements in an array
}
