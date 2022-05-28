const createHome = () => {
    const home = document.createElement('div');
    home.classList.add('home');

    const logo = document.createElement('img');
    logo.setAttribute('src', 'images/logo_eclipse.svg');
    logo.setAttribute('alt', 'logo');
    
    const heading = document.createElement('h1');
    heading.textContent = 'Exceptional Ramen';

    const text = document.createElement('h2');
    text.textContent = 'Taste The Difference';

    home.appendChild(logo);
    home.appendChild(heading);
    home.appendChild(text);

    return home;
}

const loadHome = () => {
    const main = document.querySelector('main');
    main.innerHTML = '';
    main.appendChild(createHome());
}

export {loadHome};