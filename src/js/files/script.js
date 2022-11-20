// Подключение функционала "Чертогов Фрилансера"
import { isMobile } from "./functions.js";
// Подключение списка активных модулей
import { flsModules } from "./modules.js";


const galleryLiveStreams = document.querySelector('.gallery-live-streams__content');
galleryLiveStreams.addEventListener('click', (e) => {
		e.target.classList.toggle('active')
})
