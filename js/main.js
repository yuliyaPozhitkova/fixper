"use strict";

// Popap

const popapBox = document.getElementById('popap-box');
const popapClose = document.getElementById('popap-close');

function closePopap() {
    popapBox.style.display = "none";
}

popapClose.addEventListener('click', closePopap);


// Slider с помощью ИИ


document.addEventListener('DOMContentLoaded', () => {
    const slider = document.querySelector('.team__slider-slides');
    const cards = document.querySelectorAll('.team__slider-card');
    const backButton = document.querySelector('.slider__button-back');
    const forwardButton = document.querySelector('.slider__button-forward');
    let currentIndex = 0;
    const cardWidth = cards[0].getBoundingClientRect().width;

    // Функция для перемещения слайдера
    function moveSlider(direction) {
        if (direction === 'forward') {
            currentIndex++;
            if (currentIndex >= cards.length) currentIndex = 0;
        } else if (direction === 'back') {
            currentIndex--;
            if (currentIndex < 0) currentIndex = cards.length - 1;
        }
        
        slider.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
    }

    // Обработчики событий для кнопок
    backButton.addEventListener('click', () => {
        moveSlider('back');
    });

    forwardButton.addEventListener('click', () => {
        moveSlider('forward');
    });
});


// Slider #2

const slider = document.getElementById('slider');
const cards = document.querySelectorAll('.card');
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');

let currentIndex = 0;
const cardsPerSlide = 2;

// Функция для отображения нужного количества карточек
function showCards(index) {
        cards.forEach((card, i) => {
            if (i >= index && i < index + cardsPerSlide) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
                }
            });
        }

// Обработчики событий для кнопок
prevButton.addEventListener('click', () => {
        if (currentIndex > 0) {
            currentIndex--;
            showCards(currentIndex);
        }
    });

        nextButton.addEventListener('click', () => {
            if (currentIndex < cards.length - cardsPerSlide) {
                currentIndex++;
                showCards(currentIndex);
            }
        });
        
// Инициализация
showCards(currentIndex);


// Faq

// document.querySelectorAll('.faq details').forEach((item) =&gt; {
// item.addEventListener('toggle', (event) =&gt; {
//     if (event.target.open) {
//     document.querySelectorAll('.faq details').forEach((otherItem) =&gt; {
//         if (otherItem !== event.target) {
//         otherItem.removeAttribute('open');
//         }
//     });
//     }
// });
// });