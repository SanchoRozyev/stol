// Order call popup

const orderCall = document.querySelectorAll('.order-call-button');
const orderCallPopup = document.querySelector('.ord-c-background-inactive');
const closeOrdC = document.querySelector('.ord-c-close');

orderCall.forEach(function (button) {
  button.addEventListener('click', () => {
    if (orderCallPopup.classList.contains('ord-c-background-active')) {
      orderCallPopup.classList.remove('ord-c-background-active')
      orderCallPopup.classList.toggle('ord-c-background-inactive');
    } else {
      orderCallPopup.classList.remove('ord-c-background-inactive')
      orderCallPopup.classList.toggle('ord-c-background-active');
    }
  })
})

closeOrdC.addEventListener('click', () => {
  orderCallPopup.classList.remove('ord-c-background-active')
  orderCallPopup.classList.toggle('ord-c-background-inactive');
})

// Privacy policy popup 

const privacyCall = document.querySelectorAll('.priv-pol-callup');
const privacyPopup = document.querySelector('.privacy-background-inactive');
const closePrivacy = document.querySelector('.close-privacy');

privacyCall.forEach(function (button) {
  button.addEventListener('click', () => {
    if (privacyPopup.classList.contains('privacy-background-active')) {
      privacyPopup.classList.remove('privacy-background-active')
      privacyPopup.classList.toggle('privacy-background-inactive');
    } else {
      privacyPopup.classList.remove('privacy-background-inactive')
      privacyPopup.classList.toggle('privacy-background-active');
    }
  })
})

closePrivacy.addEventListener('click', () => {
  privacyPopup.classList.remove('privacy-background-active')
  privacyPopup.classList.toggle('privacy-background-inactive');
})

// Check price popup 

const checkPrCall = document.querySelectorAll('.check-pr-btn');
const checkPrPopup = document.querySelector('.check-price-popup-background-inactive');
const closeCheck = document.querySelector('.check-pr-img');

checkPrCall.forEach(function (button) {
  button.addEventListener('click', () => {
    if (checkPrPopup.classList.contains('check-price-popup-background-active')) {
      checkPrPopup.classList.remove('check-price-popup-background-active')
      checkPrPopup.classList.toggle('check-price-popup-background-inactive');
    } else {
      checkPrPopup.classList.remove('check-price-popup-background-inactive')
      checkPrPopup.classList.toggle('check-price-popup-background-active');
    }
  })
})

closeCheck.addEventListener('click', () => {
  checkPrPopup.classList.remove('check-price-popup-background-active')
  checkPrPopup.classList.toggle('check-price-popup-background-inactive');
})
