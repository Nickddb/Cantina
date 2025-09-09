document.addEventListener('DOMContentLoaded', () =>{
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
            })
        }
        cardToTalValue.textContent = `R$ ${total.toFixed(2)}`;
    }
        const limparTable = document.getElementById('limpar-pedido');
        limparTabela.addEventListener('click', () =>{
            localStorage.removeItem('cart');
            location.reload(true)
        })
})