import { Diarista } from "./diarista.js";
import { IRepository } from "./IRepository.js";

export class DiaristaRepository implements IRepository<Diarista, number> {
  diaristas: Diarista[] = [];
  id = 1;
  listar(): Diarista[] {
    return this.diaristas;
  }

  exibir(id: number): Diarista {
    const diarista = this.diaristas.filter((diarista) => diarista.id === id);
    if (!diarista[0]) {
      console.log("Diarista não encontrado - ID inválido");
    }
    return diarista[0];
  }

  cadastrar(model: Diarista): void {
    model.id = this.id++;
    this.diaristas.push(model);
    console.log("Diarista Cadastrado com sucesso!");
  }

  excluir(id: number) {
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
