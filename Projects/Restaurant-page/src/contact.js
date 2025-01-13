export default function loadContact() {
    const content = document.getElementById('content');

    // Clear previous content
    content.innerHTML = '';

    // Create a headline for the contact section
    const contactHeader = document.createElement('h1');
    contactHeader.textContent = 'Contact Us';

    // Example contact information (you can replace with your own)
    const address = document.createElement('p');
    address.textContent = `Location: Dex’s Diner, CoCo Town, Coruscant.`;

    const phone = document.createElement('p');
    phone.textContent = `Comms Line: +1138-DEX-DINE (Holonet Enabled).`;

    // Append the contact elements to the content
    content.appendChild(contactHeader);
    content.appendChild(address);
    content.appendChild(phone);
}
