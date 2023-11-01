// Import stylesheets
import { Endereco } from './models/endereco';
import './style.css';

let endereco = new Endereco();
endereco.setBairro('Rocha');
endereco.setRua('Brooklyn');
endereco.setCidade('Rio De Janeiro');
endereco.setEstado('RJ');

// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = `<h1>Encapsu<span>lamento </span></h1>
<h1>${JSON.stringify(endereco)} </h1>
<h1>${endereco.getBairro()} </h1>
<h1>${endereco.getRua()} </h1>
<h1>${endereco.getCidade()} </h1>
<h1>${endereco.getEstado()} </h1>
`;

console.log(endereco);


<center> </center>