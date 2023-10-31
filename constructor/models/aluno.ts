export class Aluno {
    public nome: string;
    public nota1: number;
    public nota2: number;
    public turma: string;
    public idade: number;
    public bimestre: number;
    public ano: number;
    public curso: string;
  
    constructor(
      nome: string,
      nota1: number,
      nota2: number,
      turma: string,
      idade: number,
      bimestre: number,
      ano: number,
      curso: string
    ) {
      this.nome = nome;
      this.nota1 = nota1;
      this.nota2 = nota2;
      this.turma = turma;
      this.idade = idade;
      this.bimestre = bimestre;
      this.ano = ano;
      this.curso = curso;
    }
  
    public obterMedia(): number {
      return (this.nota1 + this.nota2) / 2;
    }
  
    public obterSituacao() {
      if (!this.obterMedia()) {
        return 'media nao informada';
      } else if (this.obterMedia() < 7) {
        return 'Reprovado';
      }
      return 'Aprovado';
    }
  }
  