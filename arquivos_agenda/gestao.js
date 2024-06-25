const containerDados = document.getElementById("dados")
const atualizaID = document.getElementById("cID")
const atualizaNome = document.getElementById("cNome")
const atualizaEmail = document.getElementById("cEmail")
const atualizaCelular = document.getElementById("cCelular")
const atualizaData = document.getElementById("cData")
const btnAtualiza = document.querySelector("#btnAtualiza")
const btnCancela = document.querySelector("#btnCancela")
const popUp = document.getElementById("fundoPopUp")
const exibirTodosContatos = () => {
    // Limpando tabela
    const linhas = [...document.querySelectorAll(".linha")]
    linhas.map((el, i) => {
        el.remove()
    })
    // Criação de conexão com servidor
    const endpointConexao = "http://127.0.0.1:1880/pesquisaTodosContatos/"
    fetch(endpointConexao)
        .then(res => res.json())
        .then(res => {
            // Criação tabela de Contatos
            res.map((el, i) => {
                const linhaConsulta = document.createElement("div")
                linhaConsulta.setAttribute("class", "linha")
                containerDados.appendChild(linhaConsulta)
                const colunaID = document.createElement("div")
                colunaID.innerHTML = el.n_id_contato
                colunaID.setAttribute("class", "dado ci")
                const colunaNome = document.createElement("div")
                colunaNome.innerHTML = el.s_nome_contato
                colunaNome.setAttribute("class", "dado c")
                const colunaEmail = document.createElement("div")
                colunaEmail.innerHTML = el.s_email_contato
                colunaEmail.setAttribute("class", "dado c")
                const colunaCelular = document.createElement("div")
                colunaCelular.innerHTML = el.s_celular_contato
                colunaCelular.setAttribute("class", "dado c")
                const colunaDataNasc = document.createElement("div")
                colunaDataNasc.innerHTML = el.d_dataNasc_contato
                colunaDataNasc.setAttribute("class", "dado c")
                const colunaOperacoes = document.createElement("div")
                const btnDeletar = document.createElement("i")
                btnDeletar.setAttribute("class", "fa-solid fa-trash")
                btnDeletar.addEventListener('click', (evt) => {
                    // Acessar Id da coluna
                    const id = evt.target.parentNode.parentNode.firstChild.innerHTML
                    // Executar função de excluir contato
                    excluirContato(id)
                })
                const btnEditar = document.createElement("i")
                btnEditar.setAttribute("class", "fa-solid fa-pen")
                btnEditar.addEventListener("click", (evt) => {
                    popUp.classList.remove('ocultar')
                    const conteudosEditar = [...evt.target.parentNode.parentNode.childNodes]
                    atualizaID.value = conteudosEditar[0].innerHTML
                    atualizaNome.value = conteudosEditar[1].innerHTML
                    atualizaEmail.value = conteudosEditar[2].innerHTML
                    atualizaCelular.value = conteudosEditar[3].innerHTML
                    atualizaData.value = conteudosEditar[4].innerHTML
                })
                colunaOperacoes.setAttribute("class", "dado co")
                colunaOperacoes.appendChild(btnDeletar)
                colunaOperacoes.appendChild(btnEditar)
                linhaConsulta.appendChild(colunaID)
                linhaConsulta.appendChild(colunaNome)
                linhaConsulta.appendChild(colunaEmail)
                linhaConsulta.appendChild(colunaCelular)
                linhaConsulta.appendChild(colunaDataNasc)
                linhaConsulta.appendChild(colunaOperacoes)
            })
        })


}
btnAtualiza.addEventListener("click", () => {
    popUp.classList.add('ocultar')
    // Conectando e enviando informações para a aplicação
    const endpointAtualiza = `http://127.0.0.1:1880/atualizaContatos/${atualizaID.value}/${atualizaNome.value}/${atualizaEmail.value}/${atualizaCelular.value}/${atualizaData.value}`
    console.log(endpointAtualiza)
    fetch(endpointAtualiza)
        .then(res => {
            if (res.status == 200) {
                // Exibir a tabela com os dados atualizados
                exibirTodosContatos()
            } else {
                alert("Erro ao atualizar dados")
            }
        })
}
)
btnCancela.addEventListener("click", () => {
    popUp.classList.add('ocultar')

})
exibirTodosContatos()
const excluirContato = (id) => {
    // Criar conexão com servidor, enviando a informação do id da linha que queremos excluir
    const endpointDeletar = `http://127.0.0.1:1880/deletarContato/${id}`
    fetch(endpointDeletar)
        .then(res => {
            if (res.status == 200) {
                // Processo de deletar
                exibirTodosContatos()
            }
        })
}