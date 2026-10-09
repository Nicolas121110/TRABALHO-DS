// PEGA O FORMULÁRIO DE COMPRA
document.getElementById("formCompra").addEventListener("submit", function(event) {

    event.preventDefault();

    // PEGA OS DADOS DO CLIENTE
    let nome = document.getElementById("nome").value;
    let pagamento = document.getElementById("pagamento").value;

    // MOSTRA A CONFIRMAÇÃO DA COMPRA
    alert(
        "Compra realizada com sucesso!\n\n" +
        "Cliente: " + nome + "\n" +
        "Pagamento: " + pagamento
    );

    // LIMPA O CARRINHO
    localStorage.removeItem("carrinho");

    // VOLTA PARA A PÁGINA INICIAL
    window.location.href = "/Página Inicial/PI.html";
});