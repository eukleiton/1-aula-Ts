export class Carro {
    modelo: string;
    fabricante: string;
    cor: string;
    placa: string;
  
    constructor(modelo: string, fabricante: string, cor: string, placa: string) {
      this.modelo = modelo;
      this.fabricante = fabricante;
      this.cor = cor;
      this.placa = placa;
    }
  
    public buzinar() {
      alert('biiii biiiii');
    }
  }
  //let + atributo + = + new Classe()
  //declarando um onjeto de carro
  let carro = new Carro('Suv', 'Mercedes', 'black', 'KGZ-0701');
  carro.cor = 'black';
  carro.fabricante = 'Mercedes';
  carro.placa = 'KGZ-0701';
  carro.modelo = 'Suv';
  
  carro.buzinar();
  console.log('Carrinho: ', carro);