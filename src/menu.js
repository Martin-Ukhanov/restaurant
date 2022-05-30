const createItem = (name, description) => {
    const item = document.createElement('div');
    item.classList.add('item');

    const itemImage = document.createElement('img');
    const imageName = name.toLowerCase().replace(/ /g, '_');
    itemImage.setAttribute('src', `images/${imageName}.jpeg`);
    itemImage.setAttribute('alt', name);

    const itemName = document.createElement('h2');
    itemName.textContent = name;

    const itemDescription = document.createElement('p');
    itemDescription.textContent = description;

    item.appendChild(itemImage);
    item.appendChild(itemName);
    item.appendChild(itemDescription);

    return item;
}

const createMenu = () => {
    const menu = document.createElement('div');
    menu.classList.add('menu');

    // Pork
    const porkContainer = document.createElement('div');
    porkContainer.classList.add('container')

    const porkHeading = document.createElement('h1');
    porkHeading.textContent = 'Pork';

    const porkGrid = document.createElement('div');
    porkGrid.classList.add('grid');

    const porkOriginal = createItem('Pork Original', 'Sea salt, pork, seasoned egg, nori, scallions.')
    const porkShoyu = createItem('Pork Shoyu', 'Soy sauce, pork, garlic oil, nori, scallions.');
    const porkMiso = createItem('Pork Miso', 'Soybean paste, pork, corn, garlic oil, scallions.');
    const porkSpicyGarlic = createItem('Pork Spicy Garlic', 'Chili pepper, pork, grated garlic, scallions.');
    
    porkGrid.appendChild(porkOriginal);
    porkGrid.appendChild(porkShoyu);
    porkGrid.appendChild(porkMiso);
    porkGrid.appendChild(porkSpicyGarlic);

    porkContainer.appendChild(porkHeading);
    porkContainer.appendChild(porkGrid);

    // Chicken
    const chickenContainer = document.createElement('div');
    chickenContainer.classList.add('container')

    const chickenHeading = document.createElement('h1');
    chickenHeading.textContent = 'Chicken';

    const chickenGrid = document.createElement('div');
    chickenGrid.classList.add('grid');

    const chickenOriginal = createItem('Chicken Original', 'Sea salt, chicken breast, seasoned egg, nori, white onion, scallions.');
    const chickenShoyu = createItem('Chicken Shoyu', 'Soy sauce, chicken breast, nori, white onion, scallions.');
    const chickenMiso = createItem('Chicken Miso', 'Soybean paste, chicken breast, nori, white onion, scallions.');
    const chickenSpicyJalapeno = createItem('Chicken Spicy Jalapeno', 'Jalapeno paste, chicken breast, nori, white onion, scallions.');

    chickenGrid.appendChild(chickenOriginal);
    chickenGrid.appendChild(chickenShoyu);
    chickenGrid.appendChild(chickenMiso);
    chickenGrid.appendChild(chickenSpicyJalapeno);

    chickenContainer.appendChild(chickenHeading);
    chickenContainer.appendChild(chickenGrid);

    // Vegetarian
    const vegetarianContainer = document.createElement('div');
    vegetarianContainer.classList.add('container')

    const vegetarianHeading = document.createElement('h1');
    vegetarianHeading.textContent = 'Vegetarian';

    const vegetarianGrid = document.createElement('div');
    vegetarianGrid.classList.add('grid');

    const vegetarianOriginal = createItem('Vegetarian Original', 'Sea salt, fried bean curd, bamboo shoots, wood ear mushrooms, corn, onion ginger oil, scallions.')
    const vegetarianShoyu = createItem('Vegetarian Shoyu', 'Soy sauce, fried bean curd, bamboo shoots, wood ear mushrooms, corn, garlic oil, pickled red ginger, scallions.');
    const vegetarianMiso = createItem('Vegetarian Miso', 'Soybean paste, fried bean curd, bamboo shoots, wood ear mushrooms, corn, garlic oil, scallions.');
    const vegetarianSpicyGarlic = createItem('Vegetarian Spicy Garlic', 'Chili pepper, fried bean curd, bamboo shoots, wood ear mushrooms, corn, onion ginger oil, grated garlic, scallions.');
    
    vegetarianGrid.appendChild(vegetarianOriginal);
    vegetarianGrid.appendChild(vegetarianShoyu);
    vegetarianGrid.appendChild(vegetarianMiso);
    vegetarianGrid.appendChild(vegetarianSpicyGarlic);

    vegetarianContainer.appendChild(vegetarianHeading);
    vegetarianContainer.appendChild(vegetarianGrid);

    // Append menu item containers to menu
    menu.appendChild(porkContainer);
    const line1 = document.createElement('div');
    line1.classList.add('line');
    menu.appendChild(line1);
    menu.appendChild(chickenContainer);
    const line2 = document.createElement('div');
    line2.classList.add('line');
    menu.appendChild(line2);
    menu.appendChild(vegetarianContainer);

    return menu;
}

const loadMenu = () => {
    const main = document.querySelector('main');
    main.innerHTML = '';
    main.appendChild(createMenu());
}

export {loadMenu};