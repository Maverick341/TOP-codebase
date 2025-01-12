import initialPageLoad from './initialPageLoad.js';
import loadMenu from './menu.js';
import loadContact from './about.js';
import './style.css';

initialPageLoad();

const homeButton = document.getElementById('home');
const menuButton = document.getElementById('menu');
const aboutButton = document.getElementById('about');

homeButton.addEventListener('click', () => {
    initialPageLoad(); 
});

menuButton.addEventListener('click', () => {
    loadMenu(); 
});

aboutButton.addEventListener('click', () => {
    loadContact(); 
});

