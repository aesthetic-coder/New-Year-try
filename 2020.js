// Detect request animation frame
var scroll =
  window.requestAnimationFrame ||
  // IE Fallback
  function (callback) {
    window.setTimeout(callback, 1000 / 60);
  };
var elementsToShow = document.querySelectorAll(".show-on-scroll");

function loop() {
  Array.prototype.forEach.call(elementsToShow, function (element) {
    if (isElementInViewport(element)) {
      element.classList.add("is-visible");
    } else {
      element.classList.remove("is-visible");
    }
  });

  scroll(loop);
}

// Call the loop for the first time
loop();

// Helper function from: http://stackoverflow.com/a/7557433/274826
function isElementInViewport(el) {
  // special bonus for those using jQuery
  if (typeof jQuery === "function" && el instanceof jQuery) {
    el = el[0];
  }
  var rect = el.getBoundingClientRect();
  return (
    (rect.top <= 0 && rect.bottom >= 0) ||
    (rect.bottom >=
      (window.innerHeight || document.documentElement.clientHeight) &&
      rect.top <=
        (window.innerHeight || document.documentElement.clientHeight)) ||
    (rect.top >= 0 &&
      rect.bottom <=
        (window.innerHeight || document.documentElement.clientHeight))
  );
}

const navSlide = () => {
  const menu = document.querySelector(".menu");
  const nav = document.querySelector(".menu-list");
  const menuList = document.querySelectorAll(".menu-list li");

  menu.addEventListener("click", () => {
    nav.classList.toggle("nav-active");

    menuList.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = "";
      } else {
        link.style.animation = `navReveal 0.5s ease forwards ${
          index / 7 + 0.5
        }s`;
      }
    });
    menu.classList.toggle("toggle");
  });
};

navSlide();

$(function () {
  var header = $("#mynav");
  $(window).scroll(function () {
    var scroll = $(window).scrollTop();

    if (scroll >= 200) {
      header.removeClass("nav").addClass("nav2");
    } else {
      header.removeClass("nav2").addClass("nav");
    }
  });
});
