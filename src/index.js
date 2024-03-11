"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ToDo_List_1 = require("./ToDo-List");
var readline = require("readline");
var toDoList = new ToDo_List_1.ToDoList();
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
function promptAction() {
    console.log("\nEscolha uma ação:");
    console.log("1. Criar nova tarefa");
    console.log("2. Concluir uma tarefa");
    console.log("3. Remover uma tarefa");
    console.log("4. Imprimir lista de tarefas");
    console.log("5. Sair do Prompt");
    rl.question("Digite o número da ação desejada: ", function (answer) {
        switch (answer) {
            case '1':
                rl.question("Digite o nome da nova tarefa: ", function (task) {
                    toDoList.createTask(task);
                    promptAction();
                });
                break;
            case '2':
                rl.question("Digite o índice da tarefa a ser concluída: ", function (index) {
                    toDoList.completeTask(parseInt(index));
                    promptAction();
                });
                break;
            case '3':
                rl.question("Digite o índice da tarefa a ser removida: ", function (index) {
                    toDoList.removeTask(parseInt(index));
                    promptAction();
                });
                break;
            case '4':
                toDoList.printTasks();
                promptAction();
                break;
            case '5':
                if (toDoList.isEmpty()) {
                    console.log("Todas as tarefas foram removidas. Saindo do Prompt...");
                    rl.close();
                }
                else {
                    console.log("Ainda há tarefas na lista. Remova todas as tarefas antes de sair.");
                    promptAction();
                }
                break;
            default:
                console.log("Opção inválida. Por favor, escolha uma ação válida.");
                promptAction();
                break;
        }
    });
}
promptAction();
