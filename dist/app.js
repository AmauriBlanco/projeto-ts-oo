import prompt from "prompt-sync";
import { Diarista } from "./src/diarista/diarista.js";
import { DiaristaRepository } from "./src/diarista/diarista.repositoty.js";
let teclado = prompt();
let option;
let repository = new DiaristaRepository();
let id = "";
do {
    console.log("1 - Listar Diaristas");
    console.log("2 - Exibir Diarista");
    console.log("3 - Cadastrar Diarista");
    console.log("4 - Excluir Diarista");
    console.log("q - Sair");
    option = teclado("Escolha uma opção acima: ");
    switch (option) {
        case "1":
            let diaristas = repository.listar();
            diaristas.forEach((diarista) => console.log(`ID: ${diarista.id} - Nome: ${diarista.nome}`));
            break;
        case "2":
            id = teclado("Digite o ID do(a) diarista que deseja exibir");
            console.log(repository.exibir(+id));
            break;
        case "3":
            let nome = teclado("Digite o nome do(a) diarista: ");
            let telefone = teclado("Digite o telefone do(a) diarista: ");
            let endereco = teclado("Digite o endereco do(a) diarista: ");
            let diarista = new Diarista(nome, telefone, endereco);
            repository.cadastrar(diarista);
            break;
        case "4":
            id = teclado("Digite o id do diarista que quer excluir: ");
            repository.excluir(+id);
            break;
        default:
            break;
    }
} while (option != "q");
