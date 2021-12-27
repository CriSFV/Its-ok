'use strict';

console.log('>> Ready :)');

const img = document.querySelector('.js_img');
const title = document.querySelector('.js_title');
const text = document.querySelector('.js_paragraph');

function handleShowImg() {
  img.setAttribute('src', './assets/images/meme1.jpg');
  text.innerHTML = "I'm not going to cry";
}

title.addEventListener('click', handleShowImg);

function handleChangeImg() {
  img.setAttribute('src', './assets/images/meme2.jpg');
}

img.addEventListener('click', handleChangeImg);

//# sourceMappingURL=main.js.map
