const botaoHome = document.getElementById("btnHome");
const btnNovo = document.getElementById("btnNovo");
const btnPesquisar = document.getElementById("btnPesquisar");
const btnGestao = document.getElementById("btnGestao");
const btnSobre = document.getElementById("btnSobre");

botaoHome.addEventListener("click", (evt) => {
    abaSelecionada(evt.target, "home.html")
})
btnNovo.addEventListener("click", (evt) => {
    abaSelecionada(evt.target, "novo.html")
})
btnPesquisar.addEventListener("click", (evt) => {
    abaSelecionada(evt.target, "pesquisar.html")
})
btnGestao.addEventListener("click", (evt) => {
    abaSelecionada(evt.target, "gestao.html")
})
btnSobre.addEventListener("click", (evt) => {
    abaSelecionada(evt.target, "sobre.html")
})
const abaSelecionada = (e, url) => {
    window.open(url, "ifPrincipal")
    const btns = [...document.querySelectorAll(".btn")]
    btns.forEach(el => { el.classList.remove("abaSelecionada") })
    e.classList.add("abaSelecionada")
}
