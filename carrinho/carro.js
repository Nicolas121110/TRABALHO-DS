//PEGA OS PRODUTOS SALVOS NO CELULAR
let carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];

//MOSTRA PRODUTOS NO CARRINHO
function mostrarCarrinho() {
    const lista = document.getElementById("lista-carrinho");
    lista.innerHTML = "";

//VE SE O CARRINHO TA VAZIO
    if (carrinho.length === 0) {
        lista.innerHTML = `
            <div class="carrinho-vazio">
                <h2>Seu carrinho está vazio</h2>
                <p>
                    Você ainda não adicionou nenhum celular.
                </p>
                <a href="/Página Inicial/PI.html"
                   class="btn btn-info">
                    Voltar para a loja
                </a>
            </div>
        `;
        atualizarResumo();
        return;
    }

//MOSTRA PRODUTOS DO CARRINHO
    carrinho.forEach((produto, indice) => {
        lista.innerHTML += `
            <div class="item-carrinho">
                <img
                    src="${produto.imagem}"
                    alt="${produto.nome}">
                <div class="info-produto">
                    <h3>${produto.nome}</h3>
                    <p>${produto.marca}</p>
                    <p class="preco">
                        ${produto.preco}
                    </p>
                </div>
                <button
                    class="btn btn-outline-danger remover"
                    onclick="removerProduto(${indice})">
                    Remover
                </button>
            </div>
        `;
    });
    atualizarResumo();
}

//CNVERTE NUMERO PARA PREÇO
function converterPreco(preco) {
    return Number(
        preco
            .replace("R$", "")
            .replace(/\./g, "")
            .replace(",", ".")
            .trim()
    );
}


function atualizarResumo() {
    const quantidade =
        document.getElementById("quantidade");
    const total =
        document.getElementById("total");
    quantidade.textContent = carrinho.length;
    let valorTotal = 0;
    carrinho.forEach(produto => {
        valorTotal += converterPreco(produto.preco);
    });
    total.textContent =
        valorTotal.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL"
        });
}

//REMOVE PRODUTO DO CARRINHO
function removerProduto(indice) {
    carrinho.splice(indice, 1);
    localStorage.setItem(
        "carrinho",
        JSON.stringify(carrinho)
    );
    mostrarCarrinho();
}

//LIMPA CARRINHO
function limparCarrinho() {
    carrinho = [];
    localStorage.removeItem("carrinho");
    mostrarCarrinho();
}

//FINALIZAR COMPRA
function finalizarCompra() {
    let carrinho =
        JSON.parse(localStorage.getItem("carrinho")) || [];
    if (carrinho.length === 0) {
        alert("Seu carrinho está vazio!");
        return;
    }

//ABRE PÁGINA DE FINALIZAR COMPRA
    window.location.href =
        "/Página Inicial/carrinho/finalizar/FINALIZAR.html";
}

mostrarCarrinho();