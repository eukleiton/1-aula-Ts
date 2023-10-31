export class Endereco {
    private _rua: string;
    private _bairro: string;
    private _cidade: string;
    private _estado: string;
  
   // constructor(rua: string, bairro: string, cidade: string, estado: string) {
    //  this._rua = rua;
    //  this._bairro = bairro;
    //  this._cidade = cidade;
    //  this._estado = estado;
  // }
    public get rua(): string{
      return this._rua;
    }
    public set rua(rua: string){
      this._rua = rua;
    }
  
  }
  