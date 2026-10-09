// LISTA DE PRODUTOS

const produtos = [

    {
        nome: "iPhone 14",
        marca: "Apple",
        preco: "R$ 5.999,00",
        imagem: "https://horizonplay.fbitsstatic.net/img/p/apple-iphone-14-pro-256gb-5g-vitrine-tela-super-retina-xdr-oled-6-1-cor-roxo-profundo-150375/336967-1.jpg?w=670&h=670&v=no-value",
        pagina: "/Página Inicial/celulares/apple/14.html"
    },

    {
        nome: "iPhone 15",
        marca: "Apple",
        preco: "R$ 5.999,00",
        imagem: "https://doutorapplebr.com/cdn/shop/files/IMG_0083.webp?v=1705774515",
        pagina: "/Página Inicial/celulares/apple/15.html"
    },

    {
        nome: "iPhone 16",
        marca: "Apple",
        preco: "R$ 6.999,00",
        imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTx32VOecklXs--bLBKJ6HfXImndGRLkh7N8wE3GUNdfw&s=10",
        pagina: "/Página Inicial/celulares/apple/16.html"
    },

    {
        nome: "iPhone 17",
        marca: "Apple",
        preco: "R$ 8.299,00",
        imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5htewiRAlAbovFezpnGSzzzHwqIX_B1Uj1uDhHPpxZg&s=10",
        pagina: "/Página Inicial/celulares/apple/17.html"
    },

    {
        nome: "iPhone duo",
        marca: "Apple",
        preco: "R$ 21.999,00",
        imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSv2HN_hl16OfIUK-IFU-1MYkvV0uVDUD5zLBY0RLGVvBVZPWT2IzlQbSE&s=10",
        pagina: "/Página Inicial/celulares/apple/duo.html"
    },

    {
        nome: "Samsung A36 4G",
        marca: "Samsung",
        preco: "R$ 2.699,00",
        imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRORILjuPFNoqe9JL88zyg1P1XXnhxZ-OkhB4hR6Yg9CW8tp0Z7af5pixA&s=10",
        pagina: "/Página Inicial/celulares/samsung/a36.html"
    },

    {
        nome: "Samsung A56 5G",
        marca: "Samsung",
        preco: "R$ 3.499,00",
        imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEj2eW_wAljwIdCRRCTTCKrWzozfwVD61_2q5he2l9mg&s=10",
        pagina: "/Página Inicial/celulares/samsung/a56.html"
    },

    {
        nome: "Samsung Z Flip7",
        marca: "Samsung",
        preco: "R$ 8.199,00",
        imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNGrfXNdFJw06HTht6WHJklB_PRtsO8Mqyk0xAfn88_g&s=10",
        pagina: "/Página Inicial/celulares/samsung/flip.html"
    },

    {
        nome: "Samsung S24",
        marca: "Samsung",
        preco: "R$ 5.999,00",
        imagem: "https://http2.mlstatic.com/D_NQ_NP_2X_914727-MLA99943258951_112025-F.webp",
        pagina: "/Página Inicial/celulares/samsung/s24.html"
    },

    {
        nome: "Samsung S25",
        marca: "Samsung",
        preco: "R$ 6.999,00",
        imagem: "https://http2.mlstatic.com/D_NQ_NP_2X_679792-MLA99986227831_112025-F.webp",
        pagina: "/Página Inicial/celulares/samsung/s25.html"
    },

    {
        nome: "Moto G15",
        marca: "Motorola",
        preco: "R$ 1.399,00",
        imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSf1xo6TZ9XCUb4H9_nxcsCMwzI90CYZWdXaOkOlo3R7g&s=10",
        pagina: "/Página Inicial/celulares/motorola/g15.html"
    },

    {
        nome: "Motorola Edge 60 Fusion",
        marca: "Motorola",
        preco: "R$ 2.999,00",
        imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSivOhvz994LLnvAPgbBtsbJuyISFz-kPYLCMYaRjroAw&s=10",
        pagina: "/Página Inicial/celulares/motorola/fusion.html"
    }

];

const catalogo = document.querySelector(".catalogo");
const busca = document.querySelector(".pesquisa input");
const marca = document.querySelector("#marca");

// CRIA CARDS

function mostrarProdutos(lista) {
    catalogo.innerHTML = "";
    lista.forEach(produto => {
        catalogo.innerHTML += `
            <div class="celular">
                <img src="${produto.imagem}" alt="${produto.nome}">
                <h3>${produto.nome}</h3>
                <p>${produto.marca}</p>
                <strong>${produto.preco}</strong>
                <div class="botoes-produto">

                    <button
                        type="button"
                        class="btn btn-outline-info ver-detalhes"
                        data-pagina="${produto.pagina}">
                        Ver Detalhes
                    </button>

                    <button
                        type="button"
                        class="adicionar-carrinho"
                        data-produto="${produto.nome}">
                        <img
                            src="/Página Inicial/CAR+.png"
                            alt="Adicionar ao carrinho">
                    </button>
                </div>
            </div>
        `;
    });
}

// BOTÕES FUNCIONAREM

catalogo.addEventListener("click", function(event) {
    const botaoDetalhes =
        event.target.closest(".ver-detalhes");
    if (botaoDetalhes) {
        const pagina =
            botaoDetalhes.getAttribute("data-pagina");
        window.location.href = pagina;
        return;
    }

    const botaoCarrinho =
        event.target.closest(".adicionar-carrinho");
    if (!botaoCarrinho) {
        return;
    }

// IDENTIFICA O PRODUTO PRO CARRINHO

    const nomeProduto =
        botaoCarrinho.getAttribute("data-produto");

// PROCURA O PRODUTO

    const produto =
        produtos.find(function(produto) {
            return produto.nome === nomeProduto;
        });

    if (!produto) {
        alert("Produto não encontrado!");
        return;
    }

// SALVA NO CARRINHO

    let carrinho =
        JSON.parse(localStorage.getItem("carrinho")) || [];

    carrinho.push(produto);

    localStorage.setItem(
        "carrinho",
        JSON.stringify(carrinho)
    );

    alert(
        produto.nome +
        " foi adicionado ao carrinho!"
    );
});

// BARRA DE PESQUISA

function filtrarProdutos() {
    const texto =
        busca.value.toLowerCase();
    const marcaSelecionada =
        marca.value;
    const resultado =
        produtos.filter(function(produto) {
            const correspondeNome =
                produto.nome
                    .toLowerCase()
                    .includes(texto);
            const correspondeMarca =
                marcaSelecionada === "" ||
                produto.marca === marcaSelecionada;
            return correspondeNome &&
                   correspondeMarca;
        });
    mostrarProdutos(resultado);
}

busca.addEventListener(
    "input",
    filtrarProdutos
);

// FILTRAR POR MARCA

marca.addEventListener(
    "change",
    filtrarProdutos
);

mostrarProdutos(produtos);