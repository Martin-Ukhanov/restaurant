import {loadWebsite} from './website';
import {loadHome} from './home';
import {loadMenu} from './menu';
import {loadContact} from './contact';

loadWebsite();
loadHome();

const home = document.querySelector('header ul li.home');

home.addEventListener('click', () => loadHome());