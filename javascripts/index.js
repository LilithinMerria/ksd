import header from './nav.js';
import main from './main.js';

// Creation of the container div
const container = document.createElement('div');
container.classList.add('container');

// Creation of content-wrapper div
const content = document.createElement('div');
content.classList.add('content-wrapper');

// Append header, main, and footer
container.append(header, main);
const body = document.querySelector('body');
body.append(container);
