// Mobile hamburger menu

const hamburgerMain = document.querySelector('.js-hamburger-main');
const closeHamburger = document.querySelector('.js-close-hamburger');
const openHamburger = document.querySelector('.js-open-hamburger');
const menu_items = document.querySelectorAll('.js-menu-items');


openHamburger.addEventListener('click', show);
closeHamburger.addEventListener('click', close);

menu_items.forEach(item => {
  item.addEventListener('click', function () {
    close();
  })
})

function show() {
  hamburgerMain.style.display = 'flex';
  hamburgerMain.style.right = '0';
  hamburgerMain.style.top = '0';
}
function close() {
  hamburgerMain.style.right = '-100%';
  hamburgerMain.style.top = '-100%';
}


const hiddenButton = document.querySelector('.catalog-table button');


// Reviews scrolling

const leftArrow = document.querySelector('.reviews-scroll-arrows .left-arrow');

const rightArrow = document.querySelector('.reviews-scroll-arrows .right-arrow');

const reviewsScroll = document.querySelector('.reviews-grid');

const reviewsChild = document.querySelector('.reviews-grid-child');

const scrollWidth = reviewsChild;

leftArrow.addEventListener('click', () => {
  reviewsScroll.scrollLeft -= 320;
})

rightArrow.addEventListener('click', () => {
  reviewsScroll.scrollLeft += 320;
})

