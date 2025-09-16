document.addEventListener('DOMContentLoaded', () =>{
    fetchProdutos();
    //Seleciona todos os botões da classe "add-To-Cart-btn"
    const addToCartButtons = document.querySelectorAll('.adicionar-littlecar');

    addToCartButtons.forEach(button => {
        button.addEventListener('click', () =>{
            //quando o botão for clicado, o eventlistener vai ser executado
            const card = button.closest('.card');
            const productName = card.getAttribute('data-nome');
            const productPrice = parseFloat(card.getAttribute('data-price'));

            const product = { //cria um objeto 'product' p/ guardar info do item
                name: productName,
                price: productPrice,
            };

            let cart = JSON.parse(localStorage.getItem('cart')) || [];
            cart.push(product)

            localStorage.setItem('cart', JSON.stringify(cart));

            alert(`${productName} foi adicionado ao carrinho!`)
        })
    })
    const cardItemsContainer = document.getElementById('card-items-container');
    const cardToTalValue = document.getElementById('card-total-value');
    const checkoutBtn = document.getElementById('checkout-btn');

    if(cardItemsContainer){
        const cart = JSON.parse(localStorage.getItem('cart')) || [];
        let total = 0;

        if(cart.length == 0){

        }else{
            cardItemsContainer.innerHTML = "";
            cart.forEach(product =>{
                const cartItem = document.createElement('div');
                cartItem.classList.add('cart-item');

                cartItem.innerHTML = `
                <span>${product.name}</span>
                <span>R$ ${product.price.toFixed(2)}</span>
                `;

                cardItemsContainer.appendChild(cartItem);
                total += product.price;


            });
        }
        cardToTalValue.textContent = `R$ ${total.toFixed(2)}`;
        checkoutBtn.addEventListener('click', () => {
                    const numerozap = '5515999999999';
                    let mensagem = "Oie! OvO \n\n"
                    cart.forEach(product =>{
                        mensagem += `- ${product.name} (R$ ${product.price.toFixed(2)})`
                });
                    mensagem += `\nTotal: R$ ${total.toFixed(2)}*`;
                    const urlwhatsapp = `https://wa.me/$(5515999999999)?text=$(enconcodeURIComponent(mensagem))`
                window.open(urlwhatsapp, '_blank');
                localStorage.removeItem('cart');
            });
    }

        const limparTabela = document.getElementById('limpar-pedido');
        limparTabela.addEventListener('click', () =>{
            localStorage.removeItem('cart');
            location.reload(true)
        });
});

function fetchProdutos(){
    fetch("http://localhost:8000/api/produtos/")
    .then(res => res.json())
    .then(data => renderProdutos(data))
    .catch(err => console.error("Erro ao buscar produto ", err));
}

function renderProdutos(produtos){
    produtos.forEach(produto => {
        const container = document.getElementById(categoria);

        if(container):
            const card = document.createElement("div");
            card.className = "card";
            card.setAttribute("data-name", produto.nome);
            card.setAttribute("data-price", produto.preco);
            card.innerHTML = `
                        <img src="${produto.imagem}" alt="${produto.descricao}">
                        <h4>${produto.nome}</h4>
                        <p class="data-price">R$ ${produto.preco}</p>
                        <button class="adicionar-littlecar">COMPRAR</button>`;
            container.appendChild(card);
    })
}

/*  <div class="card" data-nome="Coxinha" data-price="8.00">
                        <img src="needle.jpg" alt="foto exemplar">
                        <h4>Coxinha de frango</h4>
                        <p class="data-price">R$ 8.00</p>
                        <button class="adicionar-littlecar">COMPRAR</button>
                    </div> 
*/