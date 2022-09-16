let stylesBtn = document.querySelector('.font-text-styles-btn');
let fontBtn = document.querySelector('.font-text-font-btn');
let fontHeightBtn = document.querySelector('.font-text-height-btn');
let show_div = document.querySelector('.font-poligon');

stylesBtn.addEventListener('click', function () {
  show_div.classList.toggle('set-weight');
});

fontBtn.addEventListener('click', function () {
  show_div.classList.toggle('set-font');
});

fontHeightBtn.addEventListener('click', function () {
  show_div.classList.toggle('set-height');
});
