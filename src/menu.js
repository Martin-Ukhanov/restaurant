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

    // Pork original
    const porkOriginal = document.createElement('div');
    porkOriginal.classList.add('item');

    const porkOriginalImage = document.createElement('img');
    porkOriginalImage.setAttribute('src', '../dist/images/pork_original.jpeg');
    porkOriginalImage.setAttribute('alt', 'Pork Original');

    const porkOriginalHeading = document.createElement('h2');
    porkOriginalHeading.textContent = 'Pork Original'

    const porkOriginalText = document.createElement('p');
    porkOriginalText.textContent = 'Sea salt, pork, seasoned egg, nori, scallions.';

    porkOriginal.appendChild(porkOriginalImage);
    porkOriginal.appendChild(porkOriginalHeading);
    porkOriginal.appendChild(porkOriginalText);

    // Pork shoyu
    const porkShoyu = document.createElement('div');
    porkShoyu.classList.add('item');

    const porkShoyuImage = document.createElement('img');
    porkShoyuImage.setAttribute('src', '../dist/images/pork_shoyu.jpeg');
    porkShoyuImage.setAttribute('alt', 'Pork Shoyu');

    const porkShoyuHeading = document.createElement('h2');
    porkShoyuHeading.textContent = 'Pork Shoyu'

    const porkShoyuText = document.createElement('p');
    porkShoyuText.textContent = 'Soy sauce, pork, garlic oil, nori, scallions.';

    porkShoyu.appendChild(porkShoyuImage);
    porkShoyu.appendChild(porkShoyuHeading);
    porkShoyu.appendChild(porkShoyuText);

    // Pork miso
    const porkMiso = document.createElement('div');
    porkMiso.classList.add('item');

    const porkMisoImage = document.createElement('img');
    porkMisoImage.setAttribute('src', '../dist/images/pork_miso.jpeg');
    porkMisoImage.setAttribute('alt', 'Pork Miso');

    const porkMisoHeading = document.createElement('h2');
    porkMisoHeading.textContent = 'Pork Miso'

    const porkMisoText = document.createElement('p');
    porkMisoText.textContent = 'Soybean paste, pork, corn, garlic oil, scallions.';

    porkMiso.appendChild(porkMisoImage);
    porkMiso.appendChild(porkMisoHeading);
    porkMiso.appendChild(porkMisoText);

    // Pork spicy garlic
    const porkSG = document.createElement('div');
    porkSG.classList.add('item');

    const porkSGImage = document.createElement('img');
    porkSGImage.setAttribute('src', '../dist/images/pork_SG.jpeg');
    porkSGImage.setAttribute('alt', 'Pork Spicy Garlic');

    const porkSGHeading = document.createElement('h2');
    porkSGHeading.textContent = 'Pork Spicy Garlic'

    const porkSGText = document.createElement('p');
    porkSGText.textContent = 'Chili pepper, pork, grated garlic, scallions.';

    porkSG.appendChild(porkSGImage);
    porkSG.appendChild(porkSGHeading);
    porkSG.appendChild(porkSGText);
    
    // Append pork items to pork grid
    porkGrid.appendChild(porkOriginal);
    porkGrid.appendChild(porkShoyu);
    porkGrid.appendChild(porkMiso);
    porkGrid.appendChild(porkSG);

    // Append pork grid to pork grid container
    porkContainer.appendChild(porkHeading);
    porkContainer.appendChild(porkGrid);


    // Chicken
    const chickenContainer = document.createElement('div');
    chickenContainer.classList.add('container')

    const chickenHeading = document.createElement('h1');
    chickenHeading.textContent = 'Chicken';

    const chickenGrid = document.createElement('div');
    chickenGrid.classList.add('grid');

    // Chicken original
    const chickenOriginal = document.createElement('div');
    chickenOriginal.classList.add('item');

    const chickenOriginalImage = document.createElement('img');
    chickenOriginalImage.setAttribute('src', '../dist/images/chicken_original.jpeg');
    chickenOriginalImage.setAttribute('alt', 'Chicken Original');

    const chickenOriginalHeading = document.createElement('h2');
    chickenOriginalHeading.textContent = 'Chicken Original'

    const chickenOriginalText = document.createElement('p');
    chickenOriginalText.textContent = 'Sea salt, chicken breast, seasoned egg, nori, white onion, scallions.';

    chickenOriginal.appendChild(chickenOriginalImage);
    chickenOriginal.appendChild(chickenOriginalHeading);
    chickenOriginal.appendChild(chickenOriginalText);

    // Chicken shoyu
    const chickenShoyu = document.createElement('div');
    chickenShoyu.classList.add('item');

    const chickenShoyuImage = document.createElement('img');
    chickenShoyuImage.setAttribute('src', '../dist/images/chicken_shoyu.jpeg');
    chickenShoyuImage.setAttribute('alt', 'Chicken Shoyu');

    const chickenShoyuHeading = document.createElement('h2');
    chickenShoyuHeading.textContent = 'Chicken Shoyu'

    const chickenShoyuText = document.createElement('p');
    chickenShoyuText.textContent = 'Soy sauce, chicken breast, nori, white onion, scallions.';

    chickenShoyu.appendChild(chickenShoyuImage);
    chickenShoyu.appendChild(chickenShoyuHeading);
    chickenShoyu.appendChild(chickenShoyuText);

    // Chicken miso
    const chickenMiso = document.createElement('div');
    chickenMiso.classList.add('item');

    const chickenMisoImage = document.createElement('img');
    chickenMisoImage.setAttribute('src', '../dist/images/chicken_miso.jpeg');
    chickenMisoImage.setAttribute('alt', 'Chicken Miso');

    const chickenMisoHeading = document.createElement('h2');
    chickenMisoHeading.textContent = 'Chicken Miso'

    const chickenMisoText = document.createElement('p');
    chickenMisoText.textContent = 'Soybean paste, chicken breast, nori, white onion, scallions.';

    chickenMiso.appendChild(chickenMisoImage);
    chickenMiso.appendChild(chickenMisoHeading);
    chickenMiso.appendChild(chickenMisoText);

    // Chicken spicy jalapeño
    const chickenSJ = document.createElement('div');
    chickenSJ.classList.add('item');

    const chickenSJImage = document.createElement('img');
    chickenSJImage.setAttribute('src', '../dist/images/chicken_SJ.jpeg');
    chickenSJImage.setAttribute('alt', 'Chicken Spicy Jalapeño');

    const chickenSJHeading = document.createElement('h2');
    chickenSJHeading.textContent = 'Chicken Spicy Jalapeño'

    const chickenSJText = document.createElement('p');
    chickenSJText.textContent = 'Jalapeño paste, chicken breast, nori, white onion, scallions.';

    chickenSJ.appendChild(chickenSJImage);
    chickenSJ.appendChild(chickenSJHeading);
    chickenSJ.appendChild(chickenSJText);

    // Append chicken items to chicken grid
    chickenGrid.appendChild(chickenOriginal);
    chickenGrid.appendChild(chickenShoyu);
    chickenGrid.appendChild(chickenMiso);
    chickenGrid.appendChild(chickenSJ);

    // Append chicken grid to chicken grid container
    chickenContainer.appendChild(chickenHeading);
    chickenContainer.appendChild(chickenGrid);


    // Append menu item containers to menu
    const line = document.createElement('div');
    line.classList.add('line');

    menu.appendChild(porkContainer);
    menu.appendChild(line);
    menu.appendChild(chickenContainer);

    return menu;
}

const loadMenu = () => {
    const main = document.querySelector('main');
    main.innerHTML = '';
    main.appendChild(createMenu());
}

export {loadMenu};