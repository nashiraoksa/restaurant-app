import 'regenerator-runtime';
import '../styles/main.css';
import '../styles/responsive.css';
import './component/app-header.js';
import './component/nav-bar.js';
import './component/app-hero.js';
import './component/app-footer.js';
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';
import App from './views/app';
import swRegister from './utils/sw-register';

const menu = document.querySelector('#menu');
const main = document.querySelector('main');
const drawer = document.querySelector('#drawer');
const skip = document.querySelector('.skip-link');

const app = new App({
  button: menu,
  drawer: drawer,
  content: main,
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
  swRegister();
});

skip.addEventListener('click', (event) => {
  event.preventDefault();
  main.focus();
});
