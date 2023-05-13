// Подключение функционала "Чертогов Фрилансера"
import { isMobile } from './functions.js';
// Подключение списка активных модулей
import { flsModules } from './modules.js';

console.log('isMobile', isMobile.any());

const galleryLiveStreams = document.querySelector(
  '.gallery-live-streams__content'
);
const galleryLiveStreamsBay = document.querySelectorAll(
  '.gallery-live-streams__bay'
);

galleryLiveStreams.addEventListener('click', (e) => {
	// console.log(e.target)
	if (e.target.classList.contains('gallery-live-streams__bay')) {
    galleryLiveStreamsBay.forEach((item) => item.classList.remove('active'));
    e.target.classList.add('active');
	}
});

// const galleryLiveStreamsBay = document.querySelectorAll(
//   '.gallery-live-streams__bay'
// );
// galleryLiveStreamsBay.addEventListener('click', (e) => {
//   e.target.classList.toggle('active');
// });

const listActive = document.querySelector('.menu__items');
// const submenuActive = document.querySelector('.menu__list');
listActive.addEventListener('click', (e) => {
  // console.log(e);
  // e.preventDefault();
  // console.log('e.target.parentNode', e.target.parentNode.children[1]);

  // 'e.target.parentNode.children.classList',
  // e.target.parentNode.children[0].classList
  // console.log('e.target.parentNode.children', e.target.parentNode.children);
  const menuItems = [...e.target.parentNode.children];
  const arrowButton = menuItems.find((child) => {
    // console.log('work');
    // console.log('child.className', child.className);
    if (child.className === 'submenu__arrow-button') {
      // console.log(
      //   'child.className',
      //   child.className === 'submenu__arrow - button'
      // )
      // console.log('child.classList', child.classList);
      child.classList.add('rotate');
      // return true;
    } else if (child.className === 'submenu__arrow-button rotate') {
      child.classList.remove('rotate');
    }
    //   child.className === 'submenu__arrow-button';
    // console.log('child.className', child.className === 'submenu__arrow-button');
    // const roar = [...child]
    // child.find('submenu__arrow-button');
    // console.log('child', child.classList);
  });
  // console.log('arrowButton', arrowButton);
  // arrowButton.classList.toggle('rotate');
  // e.target.parentNode.children[0]
  e.target.parentNode.nextElementSibling.classList.toggle('active');
  // console.log('DONE')
});
