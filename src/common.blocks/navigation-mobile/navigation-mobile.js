'use strict';
(function () {
  var navMobileLink = document.querySelector('.navigation-mobile__link');
  var navMobileList = document.querySelector('.navigation__list--mobile');

  navMobileLink.addEventListener('click', function (evt) {
    evt.preventDefault();
    navMobileList.classList.toggle('navigation__list--active');
  });
})();
