const burgerBtnOpen = document.querySelector(".header__nav__burger");
const burgerMenuEl = document.querySelector(".burger__menu");
const burgerBtnClose = document.querySelector(".burger__menu__header__btn");
const burgerMenuItem = document.querySelectorAll('.burger__menu__item')

function closeBurger () {
    burgerMenuEl.style.display = "none";
    document.body.classList.toggle('burger--active')
}

burgerBtnOpen.addEventListener("click", () => {
  burgerMenuEl.style.display = "flex";
  document.body.classList.toggle('burger--active')
});

burgerBtnClose.addEventListener("click", closeBurger);

burgerMenuItem.forEach(el => {
    el.addEventListener('click', closeBurger)
})
