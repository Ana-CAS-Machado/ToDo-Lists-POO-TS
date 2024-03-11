"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ToDoList = void 0;
var ToDoList = /** @class */ (function () {
    function ToDoList() {
        this.tasks = [];
    }
    ToDoList.prototype.createTask = function (task) {
        this.tasks.push(task);
        console.log("Tarefa \"".concat(task, "\" criada."));
    };
    ToDoList.prototype.completeTask = function (taskIndex) {
        if (this.tasks.length === 0) {
            console.log("Não há tarefas para concluir.");
            return;
        }
        if (taskIndex >= 0 && taskIndex < this.tasks.length) {
            var completedTask = this.tasks.splice(taskIndex, 1)[0];
            console.log("Tarefa \"".concat(completedTask, "\" conclu\u00EDda."));
        }
        else {
            console.error("Índice de tarefa inválido.");
        }
    };
    ToDoList.prototype.removeTask = function (taskIndex) {
        if (this.tasks.length === 0) {
            console.log("Não há tarefas para remover.");
            return;
        }
        if (taskIndex >= 0 && taskIndex < this.tasks.length) {
            var removedTask = this.tasks.splice(taskIndex, 1)[0];
            console.log("Tarefa \"".concat(removedTask, "\" removida."));
        }
        else {
            console.error("Índice de tarefa inválido.");
        }
    };
    ToDoList.prototype.printTasks = function () {
        if (this.tasks.length === 0) {
            console.log("Não há tarefas na lista.");
        }
        else {
            console.log("Lista de Tarefas:");
            this.tasks.forEach(function (task, index) {
                console.log("".concat(index + 1, ". ").concat(task));
            });
        }
    };
    ToDoList.prototype.isEmpty = function () {
        return this.tasks.length === 0;
    };
    return ToDoList;
}());
exports.ToDoList = ToDoList;
