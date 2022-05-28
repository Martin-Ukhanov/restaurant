const createContact = () => {
    const contact = document.createElement('div');
    contact.classList.add('contact');

    return contact;
}

const loadContact = () => {
    const main = document.querySelector('main');
    main.innerHTML = '';
    main.appendChild(createContact());
}

export {loadContact};