const searchForm = document.getElementById('search-form');
const searchInput = searchForm.children[1];
const btnCancel = document.getElementById('cancel');
const btnShowMenu = document.getElementsByClassName("btnShowMenu");
const menuhidden = document.getElementsByClassName("menu-hidden");
const inforHome = document.getElementsByClassName("infor");
const btnShowInfor =document.querySelectorAll('.btnShowInfor');

function showMenu () {
    // console.log(btnShowMenu[0]);
    btnShowMenu[0].classList.toggle("show-menu");
    menuhidden[0].classList.toggle("showmenu");
}


if (window.innerWidth <= 480) {
    // console.log(searchInput, searchForm);
    searchInput.addEventListener('focus', function (e) {
        searchForm.classList.add("search-form-for-mobile");
        searchForm.previousElementSibling.classList.add("hidenlogo");
        btnCancel.classList.add("showCancel");

    });
}

function hidenSearchForm() {
    searchForm.classList.remove("search-form-for-mobile");
    searchForm.previousElementSibling.classList.remove("hidenlogo");
    btnCancel.classList.remove("showCancel");
    // body
}

var swiper = new Swiper('.swiper-container', {
    pagination: {
        el: '.swiper-pagination',
        dynamicBullets: true,
    },
});

function showAllInfor(){
    btnShowInfor.forEach(function(item) {
        item.addEventListener('click', function (e) {
            this.previousElementSibling.classList.toggle('showinfor');
        });
    });
   
}

showAllInfor();
// console.log(window.innerWidth);