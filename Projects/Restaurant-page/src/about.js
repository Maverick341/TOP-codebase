export default function loadContact() {
    const content = document.getElementById('content');
    
    // Clear previous content
    content.innerHTML = '';

    // Create a headline for the contact section
    const contactHeader = document.createElement('h1');
    contactHeader.textContent = 'Contact Us';

    // Example contact information (you can replace with your own)
    const address = document.createElement('p');
    address.textContent = '123 Restaurant St, Food Town, 12345';

    const phone = document.createElement('p');
    phone.textContent = 'Phone: (123) 456-7890';

    // Append the contact elements to the content
    content.appendChild(contactHeader);
    content.appendChild(address);
    content.appendChild(phone);
}
