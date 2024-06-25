const btnPesquisa = document.querySelector("#btnPesquisa");
const containerPesquisa = document.querySelector("#containerPesquisa")
const statusPesquisa = document.querySelector("#statusBusca")
const conteudoEncontrado = document.querySelector("#conteudoEncontrado")


btnPesquisa.addEventListener("click", () => {
    const txtPesquisa = document.querySelector("#contatoPesquisa").value
    const linhas = [...document.querySelectorAll(".linha")]
    linhas.map((el,i)=>{
        el.remove()
    })
    if (txtPesquisa == "") {
        alert("Digite valor para pesquisa");
        txtPesquisa.focus;
        return;
    }
    const tipo = document.querySelector("input[name=inputPesquisa]:checked").value;
    const endpoint = `http://127.0.0.1:1880/pesquisaContatos/${tipo}/${txtPesquisa}`
    console.log(endpoint)
    fetch(endpoint)
        .then(res => res.json())
        .then(res => {
            if (res.length == 0) {
                statusPesquisa.innerHTML = "Contato não encontrado"
            } else {
                statusPesquisa.innerHTML = "Contato encontrado"
                console.log(res)
                const containerDados = document.getElementById("dados")
                res.map((el, i) => {
                    const linhaConsulta = document.createElement("div")
                    linhaConsulta.setAttribute("class", "linha")
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
                    containerDados.appendChild(linhaConsulta)
                    linhaConsulta.appendChild(colunaID)
                    linhaConsulta.appendChild(colunaNome)
                    linhaConsulta.appendChild(colunaEmail)
                    linhaConsulta.appendChild(colunaCelular)
                    linhaConsulta.appendChild(colunaDataNasc)   
                })

            }

        })
})