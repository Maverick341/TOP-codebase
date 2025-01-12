export default function initialPageLoad(){
    const content = document.getElementById('content');
    content.innerHTML = '';
    const headline = document.createElement('h1');
    headline.textContent = 'Savor the Flavor of Ichiraku Ramen';

    const description = document.createElement('p');
    description.textContent = 'Experience the legendary taste of Ichiraku Ramen, inspired by Naruto’s favorite spot in the Hidden Leaf Village—where every bowl is packed with flavor and tradition.';

    const menubutton = document.createElement('button');
    menubutton.textContent = 'See the Menu';

    // const image = document.createElement('img');
    // image.src = 'your-image-path.jpg'; 
    // image.alt = 'Delicious Food';

    content.appendChild(headline);
    content.appendChild(description);
    content.appendChild(menubutton);
    // content.appendChild(image);
}