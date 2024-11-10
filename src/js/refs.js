const refs = {
  //Body
  bodyEl: document.querySelector('body'),

  //Header
  navlinks: document.querySelectorAll('.navigation__link'),
  // Home
  categoriesSidebar: document.querySelector('.sidebar__categories'),
  homeBooksByType: document.querySelector('.home-typeBook'),
  homeBook: document.querySelector('.home-book'),
  cardContainerEl: document.querySelector('.books__container'),
  homeContainer: document.querySelector('.home__main-container'),

  //Shopping-list
  shoppingListEl: document.querySelector('.shopping__cards'),
  notificationContainerEl: document.querySelector('.shopping__storage'),
  shoppingHeadingEl: document.querySelector('.shopping__heading'),
  logoTrashPath: new URL('../images/icons.svg', import.meta.url),

  SHOP_LIST_KEY: 'selected-books',

  //Pop-up-modal
  listBookEl: document.querySelector('.main'),
  closeModalPopBtn: document.querySelector('[data-modal-pop-close]'),
  modalPopEl: document.querySelector('[data-modal]'),
  backdrop: document.querySelector('.backdrop'),
  modalPopInfoEl: document.querySelector('.modal-info__description'),
  descriptionBookEl: document.querySelector('.description-non'),

  // Mobile - menu - modal
  mobileNavLinksEl: document.querySelectorAll('.mobile__home-item > a'),
  mobileMenuEl: document.querySelector('.menu-modal-wrapper'),
  openMenuBtnEl: document.querySelector('.burger-meny-btn'),
  closeMenuBtnEl: document.querySelector('.burger-meny-btn-close'),

  // Authorization - modal

  //Pagination
  paginationEl: document.querySelector('#tui-pagination-container'),
  // Spinner/loader

  // Scroll up
  scrollBtnEl: document.querySelector('.btn-up'),
};

export default refs;
