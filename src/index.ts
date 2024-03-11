import { ToDoList } from "./ToDo-List";
const toDoList = new ToDoList();

toDoList.createTask("Fazer compras");
 toDoList.createTask("Estudar TypeScript");
toDoList.printTasks();
toDoList.completeTask(0);
toDoList.printTasks();
toDoList.removeTask(1);
toDoList.printTasks();

