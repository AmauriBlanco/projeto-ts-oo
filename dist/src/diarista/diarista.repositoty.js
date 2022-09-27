export class DiaristaRepository {
    constructor() {
        this.diaristas = [];
        this.id = 1;
    }
    listar() {
        return this.diaristas;
    }
    exibir(id) {
        const diarista = this.diaristas.filter((diarista) => diarista.id === id);
        if (!diarista[0]) {
            console.log("Diarista não encontrado - ID inválido");
        }
        return diarista[0];
    }
    cadastrar(model) {
        model.id = this.id++;
        this.diaristas.push(model);
        console.log("Diarista Cadastrado com sucesso!");
    }
    excluir(id) {
        const temDiarista = this.diaristas.filter((diarista) => diarista.id === id);
        if (!temDiarista[0]) {
            console.log("Diarista não encontrado - ID inválido");
            return false;
        }
        const diaristas = this.diaristas.filter((diarista) => diarista.id != id);
        this.diaristas = diaristas;
        console.log("Diarista excluido com sucesso!");
    }
}
