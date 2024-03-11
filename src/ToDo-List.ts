export class ToDoList {
    private tasks: string[];

    constructor() {
        this.tasks = [];
    }

    createTask(task: string): void {
        this.tasks.push(task);
        console.log(`Tarefa "${task}" criada.`);
    }

    completeTask(taskIndex: number): void {
        if (this.tasks.length === 0) {
            console.log("Não há tarefas para concluir.");
            return;
        }

        if (taskIndex >= 0 && taskIndex < this.tasks.length) {
            const completedTask = this.tasks.splice(taskIndex, 1)[0];
            console.log(`Tarefa "${completedTask}" concluída.`);
        } else {
            console.error("Índice de tarefa inválido.");
        }
    }

    removeTask(taskIndex: number): void {
        if (this.tasks.length === 0) {
            console.log("Não há tarefas para remover.");
            return;
        }

        if (taskIndex >= 0 && taskIndex < this.tasks.length) {
            const removedTask = this.tasks.splice(taskIndex, 1)[0];
            console.log(`Tarefa "${removedTask}" removida.`);
        } else {
            console.error("Índice de tarefa inválido.");
        }
    }

    printTasks(): void {
        if (this.tasks.length === 0) {
            console.log("Não há tarefas na lista.");
        } else {
            console.log("Lista de Tarefas:");
            this.tasks.forEach((task, index) => {
                console.log(`${index + 1}. ${task}`);
            });
        }
    }

    isEmpty(): boolean {
        return this.tasks.length === 0;
    }
}