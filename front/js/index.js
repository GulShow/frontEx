'use strict';
const image = document.querySelector('.mainPhoto');

async function fetchHandler() {
    try {
        const response = await fetch("..//__in/data.json");
        const data = await response.json();
        for (let key in data) {
            image.src = data[key]['image']
            console.log(image.src);
        }
    } catch (error) {
        console.log(error);
    }
}

fetchHandler()

// //Task 2
// //1
// const numOfElements = document.getElementsByTagName('*').length;
// console.log(numOfElements);
//
// //2
// const allDivs = document.querySelectorAll('div')
// console.log(allDivs.length);
//
// const allP = document.querySelectorAll('p')
// console.log(allP.length);
//
// const allSections = document.querySelectorAll('section')
// console.log(allSections.length);
//
// const allImg = document.querySelectorAll('img')
// console.log(allImg.length);

//3
// const allTags = Array.from(document.getElementsByTagName('*'))
//
// function isSymbolLetter(array) {
//     return array.map(str => { return {
//         letters: str.localName.split('').filter(a => a >= 'a' && a <= 'z').length
//     }; });
// }
//
// console.log(isSymbolLetter(allTags))








