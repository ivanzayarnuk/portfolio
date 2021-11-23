
const menu = document.querySelector('.menu'),
      closeBtn = document.querySelector('.menu__close'),
      hamburger = document.querySelector('.hamburger');

hamburger.addEventListener('click', () => {
    menu.classList.add('active');
});

closeBtn.addEventListener('click', () =>{
    menu.classList.remove('active');
});