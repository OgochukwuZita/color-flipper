// 'use strict'
// const hex = [0,1,2,3,4,5,6,7,8,9, 'A','B','C','D','E','F'];
// const btn = document.getElementById('btn');
// const color = document.querySelector('.color');
// //add eventlistener

// btn.addEventListener('click',function(){
//     //get random hexColors
//     let hexColor = '#';
//     for (let i = 0; i < 6; i++) {
//         hexColor += hex[getRandomNumber()];
        
//     }
//     document.body.style.backgroundColor =hexColor;
//     color.textContent = hexColor
// })

// const getRandomNumber= ()=>{
//     return Math.floor(Math.random()*hex.length);
// }
'use strict'
//write array of hex elements
const hex = [0,1,2,3,4,5,6,7,8,9, 'A','B','C','D','E','F'];
//get identfiers
const btn = document.getElementById('btn');
const color = document.querySelector('.color');
//add event listeners
btn.addEventListener('click', ()=>{
    //create hexValues
    let hexColor = '#';
    //loop through the array to create hexValues
    for (let i = 0; i < 6; i++) {
        hexColor += hex[getRandomNumber()];
    }
    //manipulate dom
    document.body.style.backgroundColor = hexColor;
    color.textContent =hexColor;
})
//write function to get random numbers
const getRandomNumber= ()=>{
    return Math.floor(Math.random()*hex.length);
}