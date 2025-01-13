export default function loadMenu() {
    const content = document.getElementById('content');
    content.innerHTML = '';

    const menuHeader = document.createElement('h1');
    menuHeader.textContent = 'our Menu';

    const menuItem1 = document.createElement('p');
    menuItem1.textContent = 'Dish 1 - $10';

    const menuItem2 = document.createElement('p');
    menuItem2.textContent = 'Dish 2 - $12';

    content.appendChild(menuHeader);
    content.appendChild(menuItem1);
    content.appendChild(menuItem2);
}