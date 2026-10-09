// PEGA O FORMULÁRIO DA PÁGINA
const formulario = document.querySelector("form");

// PEGA OS PARÂMETROS RECEBIDOS PELA URL
const parametros =
    new URLSearchParams(window.location.search);

// PEGA A MENSAGEM RECEBIDA
const mensagemRecebida =
    parametros.get("mensagem");

// VERIFICA SE EXISTE UMA MENSAGEM RECEBIDA
if (mensagemRecebida) {

    // PEGA O CAMPO DE MENSAGEM
    const textarea =
        document.querySelector("textarea");

    // COLOCA A MENSAGEM NO CAMPO
    if (textarea) {
        textarea.value = mensagemRecebida;
    }
}

// IDENTIFICA QUANDO O FORMULÁRIO É ENVIADO
formulario.addEventListener("submit", function(event) {

    // IMPEDE A PÁGINA DE RECARREGAR
    event.preventDefault();

    // MOSTRA A MENSAGEM DE SUCESSO
    alert(
        "Mensagem enviada com sucesso! " +
        "A ANHM agradece o seu contato."
    );

    // LIMPA O FORMULÁRIO
    formulario.reset();

});