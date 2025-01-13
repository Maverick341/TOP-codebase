export default function loadContact() {
    const content = document.getElementById('content');
    content.classList.add('contact-grid');
    content.classList.remove('custom-grid');
    // Clear previous content
    content.innerHTML = '';

    const contactHeader = document.createElement('h1');
    contactHeader.textContent = 'Contact us';

    const address = document.createElement('p');
    address.textContent = `Location: Dex’s Diner, CoCo Town, Coruscant`;

    const phone = document.createElement('p');
    phone.textContent = `Comms Line: 1138-DEX-DINE (Holonet Enabled)`;

    content.appendChild(contactHeader);
    content.appendChild(address);
    content.appendChild(phone);
}
