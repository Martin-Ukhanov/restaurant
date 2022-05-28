const createMenu = () => {
    
}

const loadMenu = () => {
    const main = document.querySelector('main');
    main.innerHTML = '';
    main.appendChild(createMenu());
}

export {loadMenu};