let tarefas = [];
function criarTarefa(conteudo) {
    const novaTarefa = {
        id: tarefas.length + 1,
        conteudo,
        concluida: false
    };
    tarefas.push(novaTarefa);
    console.log(`Tarefa "${conteudo}" criada.`);
}
function concluirTarefa(id) {
    const tarefa = tarefas.find(t => t.id === id);
    if (tarefa) {
        if (!tarefa.concluida) {
            tarefa.concluida = true;
            console.log(`Tarefa "${tarefa.conteudo}" concluída.`);
        }
        else {
            console.log(`Tarefa "${tarefa.conteudo}" já está concluída.`);
        }
    }
    else {
        console.error("Tarefa não encontrada.");
    }
}
function removerTarefa(id) {
    const index = tarefas.findIndex(t => t.id === id);
    if (index !== -1) {
        const removida = tarefas.splice(index, 1)[0];
        console.log(`Tarefa "${removida.conteudo}" removida.`);
    }
    else {
        console.error("Tarefa não encontrada.");
    }
}
function imprimirTarefas() {
    console.log("Lista de Tarefas:");
    tarefas.forEach(t => {
        const status = t.concluida ? "[Concluída]" : "[Pendente]";
        console.log(`${t.id}. ${t.conteudo} ${status}`);
    });
}
