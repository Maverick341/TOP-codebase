import Dish1 from '../assets/Photon-fizzle.jpg';
import Dish2 from '../assets/Rootleaf-Stew.jpg';
import Dish3 from '../assets/Shawda-club-sandwich.png';
import Dish4 from '../assets/Sic-Six-layer-cake.png';
import Dish5 from '../assets/wasaka-berry-pie.png';

export default function loadMenu() {
    const content = document.getElementById('content');
    content.classList.add('custom-grid');
    content.classList.remove('contact-grid');
    content.innerHTML = '';

    function createMenuItem(imageSrc, title, price) {
        const foodDiv = document.createElement('div');
        foodDiv.classList.add('food'); 

        const img = document.createElement('img');
        img.src = imageSrc; 
        img.alt = title; 

        const infoSpan = document.createElement('span');
        infoSpan.textContent = `${title} - $${price}`;

        foodDiv.appendChild(img);
        foodDiv.appendChild(infoSpan);

        return foodDiv;
    }
    
    const menuItem1 = createMenuItem(Dish1, 'Phantom Fizzle', 10);
    const menuItem2 = createMenuItem(Dish2, 'Rootleaf Stew', 23);
    const menuItem3 = createMenuItem(Dish3, 'Shawda Club Sandwich', 34);
    const menuItem4 = createMenuItem(Dish4, 'Sic-Six-layer Cake', 65);
    const menuItem5 = createMenuItem(Dish5, 'Wasaka Berry Pie', 74);

    content.appendChild(menuItem1);
    content.appendChild(menuItem2);
    content.appendChild(menuItem3);
    content.appendChild(menuItem4);
    content.appendChild(menuItem5);
}