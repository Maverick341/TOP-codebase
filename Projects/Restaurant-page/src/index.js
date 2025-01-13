import initialPageLoad from './modules/initialPageLoad.js';
import loadMenu from './modules/menu.js';
import loadContact from './modules/contact.js';
import './style.css';

initialPageLoad();

const homeButton = document.getElementById('home');
const menuButton = document.getElementById('menu');
const contactButton = document.getElementById('contact');

homeButton.addEventListener('click', () => {
    initialPageLoad(); 
    homeButton.classList.add('active-tab');
    menuButton.classList.remove('active-tab');
    contactButton.classList.remove('active-tab');
});

menuButton.addEventListener('click', () => {
    loadMenu(); 
    menuButton.classList.add('active-tab');
    homeButton.classList.remove('active-tab');
    contactButton.classList.remove('active-tab');
});

contactButton.addEventListener('click', () => {
    loadContact();
    contactButton.classList.add('active-tab');
    menuButton.classList.remove('active-tab');
    homeButton.classList.remove('active-tab');
});

