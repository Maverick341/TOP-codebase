import initialPageLoad from './initialPageLoad.js';
import loadMenu from './menu.js';
import loadContact from './contact.js';
import './style.css';

initialPageLoad();

const homeButton = document.getElementById('home');
const menuButton = document.getElementById('menu');
const contactButton = document.getElementById('contact');

homeButton.addEventListener('click', () => {
    initialPageLoad(); 
});

menuButton.addEventListener('click', () => {
    loadMenu(); 
});

contactButton.addEventListener('click', () => {
    loadContact(); 
});

