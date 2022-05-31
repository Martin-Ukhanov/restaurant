const createContact = () => {
    const contact = document.createElement('div');
    contact.classList.add('contact');

    // Contact info
    const contactInfo = document.createElement('div');
    contactInfo.classList.add('contact-info');

    const phone = document.createElement('h1');
    phone.textContent = 'Phone: 647-283-1073';

    const email = document.createElement('h1');
    email.textContent = 'Email: ramenrules@gmail.com';

    contactInfo.appendChild(phone);
    contactInfo.appendChild(email);

    // Contact form
    const contactForm = document.createElement('form');
    contactForm.classList.add('contact-form');

    const formHeading = document.createElement('h2');
    formHeading.textContent = 'Ask us a question.';

    const nameInput = document.createElement('input');
    nameInput.setAttribute('type', 'text');
    nameInput.setAttribute('name', 'name');
    nameInput.setAttribute('placeholder', 'Name');
    nameInput.required = true;

    const emailInput = document.createElement('input');
    emailInput.setAttribute('type', 'email');
    emailInput.setAttribute('name', 'email');
    emailInput.setAttribute('placeholder', 'Email');
    emailInput.required = true;

    const questionInput = document.createElement('textarea');
    questionInput.setAttribute('rows', '5');
    questionInput.setAttribute('cols', '50');
    questionInput.setAttribute('placeholder', 'Question');
    questionInput.required = true;

    const submitButton = document.createElement('button');
    submitButton.setAttribute('type', 'submit');
    submitButton.textContent = 'Submit';

    contactForm.appendChild(formHeading);
    contactForm.appendChild(nameInput);
    contactForm.appendChild(emailInput);
    contactForm.appendChild(questionInput);
    contactForm.appendChild(submitButton);

    contact.appendChild(contactInfo);
    contact.appendChild(contactForm);

    return contact;
}

const loadContact = () => {
    const main = document.querySelector('main');
    main.innerHTML = '';
    main.appendChild(createContact());
}

export {loadContact};