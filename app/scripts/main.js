// Slick slider
$(document).ready(function () {
  $(".people-content").slick({
    prevArrow:
      "<button type='button' class='slick-prev pull-left '><i class='fa fa-arrow-left people-icon-left' aria-hidden='true'></i></button>",
    nextArrow:
      "<button type='button' class='slick-next pull-right'><i class='fa fa-arrow-right people-icon-right' aria-hidden='true'></i></button>",
    responsive: [
      {
        breakpoint: 767,
        settings: {
          arrows: false,
        },
      },
    ],
  });
});

// menu mobile
const menuToggole = document.querySelector(".header-menu-toggle");
const menuList = document.querySelector(".header-menu-list");
const classExpand = "is-expand";

menuToggole.addEventListener("click", function () {
  menuList.classList.add(classExpand);
});

// click outsite close menu
window.addEventListener("click", function (e) {
  if (
    !menuList.contains(e.target) &&
    !e.target.matches(".header-menu-toggle")
  ) {
    menuList.classList.remove(classExpand);
  }
});
