export class Transporte {
    private _capacidade: number;

    public get capacidade(): number {
        return this._capacidade;
    }

    set capacidade(capacidade: number) {
        this._capacidade = capacidade;
    }
}

export class Terrestre extends Transporte {
    private _numRodas: number;

    public get numRodas(): number {
        return this._numRodas;
    }

    public set numRodas(numRodas: number) {
        this._numRodas = numRodas;
    }

    public exibirInformacoes() {
        console.log(
            `Capacidade: ${this.capacidade},
        Rodas: ${this._numRodas}`
        );
    }
}