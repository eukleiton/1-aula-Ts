// Import stylesheets
import { Cachorro } from './models/cachorro';
import { Gato } from './models/gato';
import './style.css';


let cachorro = new Cachorro();
cachorro.nome = 'bruce';
cachorro.raca = 'malinois';
cachorro.idade = 4;
cachorro.liveordie = false;


let gato = new Gato();
gato.nome = 'tom';
gato.raca = 'siames';
gato.idade = 1.5;
gato.liveordie = true;


















// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = `

<h1>Objeto Cachorro</h1>
<code> ${JSON.stringify(cachorro)} </code>
<h2>atributos e metodos da classe <span>Cachorro</span>: </h2>
<p>
 Nome: ${cachorro.nome}
</p>
<p>
 Raca: ${cachorro.raca}
</p>
<p>
 mover: ${cachorro.mover()}
</p>

<p>
 idade: ${cachorro.idade}
</p>

<p>
 vivo ?: ${cachorro.liveordie}
</p>

<p>
 fazer barulho: ${cachorro.fazerBarulho()}
</p>

<div class="box_escudo">  <div class="escudo" ><img src="https://cdn-icons-png.flaticon.com/512/2454/2454302.png"/> </div></div>


<hr>

<h1>Objeto Gato</h1>
<code> ${JSON.stringify(gato)} </code>

<h2>atributos e metodos da classe  <span>Gato</span>: </h2>
<p>
 Nome: ${gato.nome}
</p>
<p>
 Raca: ${gato.raca}
</p>
<p>
 mover: ${gato.mover()}
</p>

<p>
 idade: ${gato.idade}
</p>

<p>
 vivo ?: ${gato.liveordie}
</p>

<p>
 fazer barulho: ${gato.fazerBarulho()}
</p>

<div class="box_escudo">  <div class="escudo" ><img src="https://cdn-icons-png.flaticon.com/512/5100/5100174.png"/> </div></div>

<hr>

`;
console.log(cachorro, gato,);