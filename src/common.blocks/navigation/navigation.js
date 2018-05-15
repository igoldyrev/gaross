'use strict';
(function () {
  var tabs = document.querySelectorAll('.tab');
  var navLink = document.querySelectorAll('.navigation__link');
  var tabActive = 'tab--active';
  var navLinkActive = 'navigation__link--active';

  var tabAbout = document.querySelector('.tab__about');
  var tabLinkAbout = document.querySelector('.navigation__about');
  var tabLicenses = document.querySelector('.tab__licenses');
  var tabLinkLicenses = document.querySelector('.navigation__licenses');
  var tabOrders = document.querySelector('.tab__orders');
  var tabLinkOrders = document.querySelector('.navigation__orders');
  var tabLetters = document.querySelector('.tab__letters');
  var tabLinkLetters = document.querySelector('.navigation__letters');
  var tabContacts = document.querySelector('.tab__contacts');
  var tabLinkContacts = document.querySelector('.navigation__contacts');


  var clearClasses = function () {
    tabs.forEach(function (tab) {
      tab.classList.remove(tabActive);
    });

    navLink.forEach(function (link) {
      link.classList.remove(navLinkActive);
    });
  };

  var tabClicked = function (tabLink, tabOpened) {
    tabLink.classList.add(navLinkActive);
    tabOpened.classList.add(tabActive);
  };

  var tabAboutClick = function () {
    clearClasses();
    tabClicked(tabLinkAbout, tabAbout);
  };

  var tabLicensesClick = function () {
    clearClasses();
    tabClicked(tabLinkLicenses, tabLicenses);
  };

  var tabOrdersClick = function () {
    clearClasses();
    tabClicked(tabLinkOrders, tabOrders);
  };

  var tabLettersClick = function () {
    clearClasses();
    tabClicked(tabLinkLetters, tabLetters);
  };

  var tabContactsClick = function () {
    clearClasses();
    tabClicked(tabLinkContacts, tabContacts);
  };

  tabLinkAbout.addEventListener('click', tabAboutClick);
  tabLinkLicenses.addEventListener('click', tabLicensesClick);
  tabLinkOrders.addEventListener('click', tabOrdersClick);
  tabLinkLetters.addEventListener('click', tabLettersClick);
  tabLinkContacts.addEventListener('click', tabContactsClick);

})();
