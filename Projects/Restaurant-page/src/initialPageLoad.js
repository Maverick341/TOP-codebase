export default function initialPageLoad(){
    const content = document.getElementById('content');
    content.innerHTML = '';
    const headline = document.createElement('h1');
    headline.textContent = `Taste the Galaxy at Dex’s Diner`;
    headline.classList.add('headline');

    const description = document.createElement('p');
    description.textContent = `Welcome to Dex’s Diner, CoCo Town’s iconic eatery run by the legendary Dexter Jettster. Known for its hearty meals, Jawa Juice, and welcoming vibe, it’s the perfect spot for travelers, locals, and even Jedi. Come for the food, stay for the galactic charm!`;
    description.classList.add('description');

    // const seeMenu = document.createElement('button');
    // seeMenu.textContent = 'See the Menu';

    // const image = document.createElement('img');
    // image.src = 'your-image-path.jpg'; 
    // image.alt = 'Delicious Food';

    content.appendChild(headline);
    content.appendChild(description);
    // content.appendChild(seeMenu);
    // content.appendChild(image);
}