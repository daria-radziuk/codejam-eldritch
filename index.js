

//вывод уровня
const azathoth = document.querySelector('.azathoth');
const cthulthu = document.querySelector('.cthulthu');
const iogSothoth = document.querySelector('.iogSothoth');
const shubNiggurath = document.querySelector('.shubNiggurath');
const difficulty = document.querySelector('.difficulty');
const normal = document.querySelector('.normal');
const veryeasy = document.querySelector('.veryeasy');
const easy = document.querySelector('.easy');
const veryhigh = document.querySelector('.veryhigh');
const high = document.querySelector('.high');
const deck_btn = document.querySelector('.deck_btn');
const deck = document.querySelector('.deck');

(function () {
    azathoth.addEventListener('click', () => {
      azathoth.classList.add('azathoth_active'); 
      difficulty.classList.add('difficulty_active');
      cthulthu.classList.remove('cthulthu_active'); 
      iogSothoth.classList.remove('iogSothoth_active'); 
      shubNiggurath.classList.remove('shubNiggurath_active'); 
    });
}());

(function () {
    cthulthu.addEventListener('click', () => {
      cthulthu.classList.add('cthulthu_active'); 
      difficulty.classList.add('difficulty_active');
      azathoth.classList.remove('azathoth_active'); 
      iogSothoth.classList.remove('iogSothoth_active'); 
      shubNiggurath.classList.remove('shubNiggurath_active');
    });
}());

(function () {
    iogSothoth.addEventListener('click', () => {
      iogSothoth.classList.add('iogSothoth_active'); 
      difficulty.classList.add('difficulty_active');
      azathoth.classList.remove('azathoth_active'); 
      cthulthu.classList.remove('cthulthu_active'); 
      shubNiggurath.classList.remove('shubNiggurath_active');
    });
}());

(function () {
    shubNiggurath.addEventListener('click', () => {
      shubNiggurath.classList.add('shubNiggurath_active'); 
      difficulty.classList.add('difficulty_active');
      azathoth.classList.remove('azathoth_active'); 
      cthulthu.classList.remove('cthulthu_active'); 
      iogSothoth.classList.remove('iogSothoth_active'); 
    });
}());

//азатот уровни

(function () {
    normal.addEventListener('click', () => {
      normal.classList.add('normal_active'); 
      deck_btn.classList.add('deck_btn_active');
      veryeasy.classList.remove('veryeasy_active');
      easy.classList.remove('easy_active');
      veryhigh.classList.remove('veryhigh_active');
      high.classList.remove('high_active');
    });
}());

(function () {
    veryeasy.addEventListener('click', () => {
      veryeasy.classList.add('veryeasy_active'); 
      deck_btn.classList.add('deck_btn_active'); 
      normal.classList.remove('normal_active');
      easy.classList.remove('easy_active');
      veryhigh.classList.remove('veryhigh_active');
      high.classList.remove('high_active');
    });
}());


(function () {
    easy.addEventListener('click', () => {
      easy.classList.add('easy_active'); 
      deck_btn.classList.add('deck_btn_active'); 
      normal.classList.remove('normal_active'); 
      veryeasy.classList.remove('veryeasy_active');
      veryhigh.classList.remove('veryhigh_active');
      high.classList.remove('high_active');
    });
}());

(function () {
    veryhigh.addEventListener('click', () => {
      veryhigh.classList.add('veryhigh_active'); 
      deck_btn.classList.add('deck_btn_active'); 
      normal.classList.remove('normal_active'); 
      veryeasy.classList.remove('veryeasy_active');
      easy.classList.remove('easy_active');
      high.classList.remove('high_active');
    });
}());

(function () {
    high.addEventListener('click', () => {
      high.classList.add('high_active'); 
      deck_btn.classList.add('deck_btn_active'); 
      normal.classList.remove('normal_active'); 
      veryeasy.classList.remove('veryeasy_active');
      easy.classList.remove('easy_active');
      veryhigh.classList.remove('veryhigh_active');
    });
}());

(function () {
    deck_btn.addEventListener('click', () => {
      deck.classList.add('deck_active'); 
    });
}());





import {cardsBlue} from './assets/mythicCards/blue/cardsBlue.js'

const lastCard = document.querySelector('.last_card');
const deckCard = document.querySelector('.deck_card');
let randomNum = getRandomNum(1,12);

function getRandomNum(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; 
  }

function randomCard () {
    const cardNum = randomNum.toString().padStart(2, "0");
    const img = new Image();
    const url = `./assets/mithicCards/blue/blue$(cardNum).png`;
    img.src = url;

    img.onload = () => {
        lastCard.style.backgroundImage = `url('${url}')`;
    };
};
randomCard();

deckCard.addEventListener('click', () => {
    lastCard.classList.add('last_card'); 
    randomCard();
  });

console.log(randomCard())