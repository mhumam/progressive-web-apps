import './assets/styles/style.css';
import './assets/styles/responsive.css';
import App from './pages/App';
import SwRegister from 'utils/sw-register'; 

const app = new App({
  button: document.querySelector('#hamburgerButton'),
  drawer: document.querySelector('#navigationDrawer'),
  content: document.querySelector('#mainContent'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
  SwRegister();
});
