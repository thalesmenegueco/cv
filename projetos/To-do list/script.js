// To-do list online (lista de tarefas online)

// Variáveis que armazenarão a quantidade de tarefas adicionadas e de tarefas feitas, respectivamente
let id = 0

let tarefasFeitas = 0

// Cria um input para inserir o nome da tarefa
let input = document.createElement('input')
input.id = 'tarefa'
input.type = 'text'
input.title = 'Depois de escrevar, aperte "Enter" para adicionar'
input.placeholder = 'Escreva sua tarefa'
document.body.appendChild(input)


// Cria um parágrafo que mostra o n° de tarefas completadas
let numTarefasFeitas = document.createElement('p')
numTarefasFeitas.id = 'numTarefasFeitas'
numTarefasFeitas.textContent = 'Não há nenhuma tarefa concluída'
document.body.appendChild(numTarefasFeitas)

// Cria um parágrafo que mostra o n° de tarefas adicionadas
let numTarefas = document.createElement('p')
numTarefas.id = 'numTarefas'
numTarefas.textContent = 'Não há nenhuma tarefa a cumprir'
document.body.appendChild(numTarefas)

// Apertando "Enter" é adicionada uma nota 
input.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
      criarNovatarefa()
    }
})


// Função se caso alguém tentar fechar ou recarregar a página
// Não importa qual string, É NECESSÁRIO RETORNAR ALGUMA
function closeIt()
{
  return "qualquer string";
}
window.onbeforeunload = closeIt;


// Função que cria uma nova tarefa
function criarNovatarefa(){

    if (input.value != '') {
    
        id++

        // Cria uma nova checkbox
        let newCheckbox = document.createElement('input')
        newCheckbox.type = 'checkbox'
        newCheckbox.id = 'checkbox'+id
        document.body.appendChild(newCheckbox)

        // Define a função para caso uma checkbox seja marcada
        newCheckbox.addEventListener('change', function(){

            if(this.checked){
                
                let divTaskDone = document.createElement("div")
                divTaskDone.class = "taskDone"
                divTaskDone.appendChild(document.createTextNode('→ ' + document.getElementById(this.id+'label').textContent))
                document.getElementById('lista-tarefas-feitas').appendChild(divTaskDone);

                // Remove os elementos previamente adicionados à checkbox (label e quebra-linha)
                document.getElementById(this.id+'label').remove()
                document.getElementById(this.id+'br').remove()

                // Muda a quantidade de tarefas completadas
                tarefasFeitas++
                numTarefasFeitas.textContent = 'N° de tarefas concluídas: ' + tarefasFeitas

                // Deleta a checkbox
                this.remove()
                
                // Muda a quantidade de tarefas adicionadas
                numTarefas.textContent = 'N° de tarefas a cumprir: ' + (id-tarefasFeitas)
            }

        });

        // Adiciona uma nova label para o input
        let newLabel = document.createElement('label')
        newLabel.for = 'checkbox'+id
        newLabel.id = 'checkbox'+id+'label'
        newLabel.textContent = input.value
        document.body.appendChild(newLabel)

        // Adiciona um novo quebra-linha
        let br = document.createElement('br')
        br.id = 'checkbox'+id+'br'
        document.body.appendChild(br)

        // Muda a quantidade de tarefas adicionadas
        numTarefas.textContent = 'N° de tarefas existentes: ' + (id-tarefasFeitas)

        // Limpa o espaço do input de adcionar tarefas
        input.value = ''
    }

}