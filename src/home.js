const createHome = () => {
    const home = document.createElement('div');
    home.classList.add('home');

    const logo = document.createElement('img');
    logo.setAttribute('src', '../dist/images/logo-eclipse.svg');
    logo.setAttribute('alt', 'logo');
    
    const text1 = document.createElement('h1');
    text1.textContent = 'Exceptional Ramen';

    const text2 = document.createElement('h2');
    text2.textContent = 'Taste The Difference';

    home.appendChild(logo);
    home.appendChild(text1);
    home.appendChild(text2);

    return home;
}

const loadHome = () => {
    const main = document.querySelector('main');
    main.innerHTML = '';
    main.appendChild(createHome());
}

export {loadHome};