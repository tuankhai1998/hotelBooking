const btnShowMenu = document.getElementsByClassName("btnShowMenu");
const menuhidden = document.getElementsByClassName("menu-hidden");

function showMenu () {
    // console.log(btnShowMenu[0]);
    btnShowMenu[0].classList.toggle("show-menu");
    menuhidden[0].classList.toggle("showmenu");
}


var swiper = new Swiper('.swiper-container', {
    slidesPerView: 2,
    spaceBetween: 20,
    freeMode: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
});



