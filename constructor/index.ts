// Import stylesheets
import './style.css';
import { Aluno } from './models/aluno';

let aluno1 = new Aluno('Guzman', 8, 9.5, 'Noite', 28, 3, 2023, 'Front-End');
let aluno2 = new Aluno('Zambada', 7, 8.5, 'Noite', 25, 3, 2023, 'Front-End');
let aluno3 = new Aluno('Prigozin', 5, 6.5, 'Noite', 38, 3, 2023, 'Front-End');

// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = `
<center><h1>OBJETO 2<hr></h1> </center>
<code> ${JSON.stringify(aluno1)} </code>

<hr>

<h2> A media do aluno e: 
  <span> <br>
  aluno 1 :${aluno1.obterMedia()} <br>
  aluno 2 :${aluno2.obterMedia()} <br>
  aluno 3 :${aluno3.obterMedia()}
  </span> 
</h2>
<hr>

<h3> situação do aluno :
  ${aluno1.nome} é 
  <span> <br>
  ${aluno1.obterSituacao()} <br>
  ${aluno2.obterSituacao()} <br>
  ${aluno3.obterSituacao()}  <br>
  </span>
  <br>
  1° bi = ${aluno1.nota1} <br>
  2° bi = ${aluno1.nota2}
</h3>
<hr>
<h4> <span><center>INFORMAÇÕES DO ALUNO</center> </span> <br>

NOME : ${aluno1.nome} <BR>
Periodo :  ${aluno1.turma} 
<br>
Idade : ${aluno1.idade}
<br>
Bimestre  Atual: ${aluno1.bimestre} °
<br>
Ano Letivo : ${aluno1.ano}
<br>
Curso : ${aluno1.curso}
<br>
Notas : 1° bi =  ${aluno1.nota1} / 2° = ${aluno1.nota2} / 3° = / 4° =
<br>
Media do Aluno : <span> ${aluno1.obterMedia()} </span>
<hr>


NOME : ${aluno2.nome} <BR>
Periodo :  ${aluno2.turma} 
<br>
Idade : ${aluno2.idade}
<br>
Bimestre  Atual: ${aluno2.bimestre} °
<br>
Ano Letivo : ${aluno2.ano}
<br>
Curso : ${aluno2.curso}
<br>
Notas : 1° bi =  ${aluno2.nota1} / 2° = ${aluno2.nota2} / 3° = / 4° =
<br>
Media do Aluno : <span> ${aluno2.obterMedia()} </span>

<hr>

NOME : ${aluno3.nome} <BR>
Periodo :  ${aluno3.turma} 
<br>
Idade : ${aluno3.idade}
<br>
Bimestre  Atual: ${aluno3.bimestre} °
<br>
Ano Letivo : ${aluno3.ano}
<br>
Curso : ${aluno3.curso}
<br>
Notas : 1° bi =  ${aluno3.nota1} / 2° = ${aluno3.nota2} / 3° = / 4° =
<br>
Media do Aluno : <span> ${aluno3.obterMedia()} </span>


</h4>
`;

console.log(aluno1);
