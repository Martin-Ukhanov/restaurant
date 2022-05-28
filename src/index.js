import {loadWebsite} from './website';
import {loadHome} from './home';
import {loadMenu} from './menu';
import {loadContact} from './contact';

loadWebsite();
loadHome();

const home = document.querySelector('header ul li.home');
home.addEventListener('click', () => loadHome());

const menu = document.querySelector('header ul li.menu');
menu.addEventListener('click', () => loadMenu());

const contact = document.querySelector('header ul li.contact');
contact.addEventListener('click', () => loadContact());