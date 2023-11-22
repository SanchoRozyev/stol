// Catalog filter

const relatedMenu = ["Новые", "Старые", "Популярные"];
const pricesMenu = ["10-99$", "100-999$", "1000-9999$"];
const colorsMenu = ["Белый", "Черный", "Красный"];
const typesMenu = ["Стоячий", "Лежачий", "Складной"];

const relatedFilter = document.getElementById('a77');
const pricesFilter = document.getElementById('b31');
const colorsFilter = document.getElementById('k83');
const typesFilter = document.getElementById('l13');

relatedMenu.forEach(function addRelated(item) {
  let option = document.createElement('option');
  option.text = item;
  option.value = item;
  relatedFilter.appendChild(option);
})

pricesMenu.forEach(function addRelated(item) {
  let option = document.createElement('option');
  option.text = item;
  option.value = item;
  pricesFilter.appendChild(option);
})

colorsMenu.forEach(function addRelated(item) {
  let option = document.createElement('option');
  option.text = item;
  option.value = item;
  colorsFilter.appendChild(option);
})

typesMenu.forEach(function addRelated(item) {
  let option = document.createElement('option');
  option.text = item;
  option.value = item;
  typesFilter.appendChild(option);
})

// Price check popup filter

const sizeMenu = ["100cm", "200cm", "300", "400cm", "500cm", "600cm", "700cm", "800cm", "900cm"];
const amountMenu = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];

const sizeFilter1 = document.getElementById('raz389');
const sizeFilter2 = document.getElementById('raz833');
const sizeFilter3 = document.getElementById('raz758');
const sizeFilter4 = document.getElementById('raz103');
const amountFilter = document.getElementById('kol');

sizeMenu.forEach(function addSize(item) {
  let option = document.createElement('option');
  option.text = item;
  option.value = item;
  sizeFilter1.appendChild(option);
  sizeFilter2.appendChild(option);
  sizeFilter3.appendChild(option);
  sizeFilter4.appendChild(option);
})

amountMenu.forEach(function addAmount(item) {
  let option = document.createElement('option');
  option.text = item;
  option.value = item;
  amountFilter.appendChild(option);
})