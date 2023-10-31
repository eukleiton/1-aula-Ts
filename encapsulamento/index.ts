// Import stylesheets
import { Endereco } from './models/endereco';
import './style.css';

let endereco = new Endereco();

// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = `<h1>Encapsu<span>lamento </span></h1>
<code> ${JSON.stringify(Endereco)} </code>
`;
