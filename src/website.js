const createHeader = () => {
    const header = document.createElement('header');

    // Logo
    const logoContainer = document.createElement('div');
    logoContainer.classList.add('logo-container');

    const logo = document.createElement('img');
    logo.setAttribute('src', 'images/logo_soybean.svg');
    logo.setAttribute('alt', 'logo');

    const heading = document.createElement('h1');
    heading.textContent = 'Ramen Rules';

    logoContainer.appendChild(logo);
    logoContainer.appendChild(heading);

    // Nav
    const nav = document.createElement('ul');

    const home = document.createElement('li');
    home.classList.add('home');
    home.textContent = 'Home';

    const menu = document.createElement('li');
    menu.classList.add('menu');
    menu.textContent = 'Menu';

    const contact = document.createElement('li');
    contact.classList.add('contact');
    contact.textContent = 'Contact';

    nav.appendChild(home);
    nav.appendChild(menu);
    nav.appendChild(contact);

    header.appendChild(logoContainer);
    header.appendChild(nav);

    return header;
}

const createMain = () => {
    const main = document.createElement('main');
    return main;
}

const createFooter = () => {
    const footer = document.createElement('footer');

    const text = document.createElement('p');
    text.textContent = 'Copyright © 2022 Martin Ukhanov';

    footer.appendChild(text);

    return footer;
}

const loadWebsite = () => {
    const content = document.getElementById('content');

    content.appendChild(createHeader());
    content.appendChild(createMain());
    content.appendChild(createFooter());
}

export {loadWebsite};