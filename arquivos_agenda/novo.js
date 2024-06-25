const btnAdd = document.querySelector("#btnCadastro");
const btnCancelar = document.querySelector("#btnCancelar");
const fNome = document.querySelector("#fNome");
const fEmail = document.querySelector("#fEmail");
const fCelular = document.querySelector("#fCelular");
const fData = document.querySelector("#fData");

const reset=()=>{
    fNome.value="";
    fEmail.value="";
    fCelular.value="";
    fData.value="";
    fNome.focus();
}

btnAdd.addEventListener("click", (evt) => {
    const dados = {
        "fNome": fNome.value,
        "fEmail": fEmail.value,
        "fCelular": fCelular.value,
        "fData": fData.value
    }
    const cabecalho = {
        method: "POST",
        body: JSON.stringify(dados)
    }
    const endpoint = "http://127.0.0.1:1880/addContatos";
    fetch(endpoint, cabecalho)
        .then(res => {
            if (res.status == 200) {
                reset()
            } else {
                console.log("Erro ao acessar servidor")
            }
        })
})
btnCancelar.addEventListener("click", (evt)=>{
    reset();
})






