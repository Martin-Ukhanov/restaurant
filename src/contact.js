const createContact = () => {
    
}

const loadContact = () => {
    const main = document.querySelector('main');
    main.innerHTML = '';
    main.appendChild(createContact());
}

export {loadContact};