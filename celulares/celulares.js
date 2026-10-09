// PEGA AS INFORMAÇÕES DO CELULAR NO HTML
const nome = document.getElementById("nomeCelular").textContent;
const preco = document.getElementById("precoCelular").textContent;
const imagem = document.getElementById("imagemCelular").src;

// PARTE DE ADICIONAR AO CARRINHO
document.getElementById("adicionarCarrinho").addEventListener("click", function () {
    let carrinho =
        JSON.parse(localStorage.getItem("carrinho")) || [];
    const produto = {
        nome: nome,
        preco: preco,
        imagem: imagem
    };
    carrinho.push(produto);
    localStorage.setItem(
        "carrinho",
        JSON.stringify(carrinho)
    );
    alert(nome + " foi adicionado ao carrinho!");
});

//PARTE DE ENTRAR EM CONTATO
document.getElementById("contato").addEventListener("click", function () {

    //TEXTO GERADO
    const mensagem =
        "Olá! Gostaria de saber mais sobre o " +
        nome +
        ". O valor anunciado é " +
        preco +
        ".";

    const paginaContato =
        "/Página Contato/PC.html" +
        "?celular=" + encodeURIComponent(nome) +
        "&mensagem=" + encodeURIComponent(mensagem);

    window.location.href = paginaContato;

});