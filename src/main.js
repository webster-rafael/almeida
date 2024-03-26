// ============================ Loja =======================================


const openShopping = document.querySelector(".shopping"),
      closeShopping = document.querySelector(".closeShopping"),
      body = document.querySelector("body"),
      list= document.querySelector(".list"),
      list2= document.querySelector(".list2"),
      list3= document.querySelector(".list3"),
      list4= document.querySelector(".list4"),
      listCard = document.querySelector(".listCard"),
      total = document.querySelector(".total"),
      quantity = document.querySelector(".quantity")

openShopping.addEventListener("click", () => {
        body.classList.add("active");
    })
closeShopping.addEventListener("click", () => {
        body.classList.remove("active")
    })

let products = [
    {
        "id": 0,
        "name":"Ar-Condicionado 9mil BTUs Inverter Tcl 220w",
        "description":"Incluso Instalação com tubulação até 3m",
        "images": "Ar-1.webp",
        "price": 2949.99,
        "promo": "ou R$ 3.100,00 em 8x sem juros"
    },

    {
        "id": 1,
        "name":"Ar-Condicionado 9mil BTUs Inverter Gree 220w",
        "description":"Incluso Instalação com tubulação até 3m",
        "images": "Ar-2.webp",
        "price": 2998.99,
        "promo": "ou R$ 3.100,00 em 8x sem juros"
    },

    {
        "id": 2,
        "name":"Ar-Condicionado 9mil BTUs Inverter Eletrolux 220w",
        "description":"Incluso Instalação com tubulação até 3m",
        "images": "Ar-3.webp",
        "price": 2698.99,
        "promo": "ou R$ 3.000,00 em 8x sem juros"
    },

    {
        "id": 3,
        "name":"Ar-Condicionado 9mil BTUs Inverter Samsung 220w",
        "description":"Incluso Instalação com tubulação até 3m",
        "images": "Ar-4.webp",
        "price": 3398.99,
        "promo": "ou R$ 3.699,00 em 8x sem juros"
    },

    {
        "id": 4,
        "name":"Ar-Condicionado 9Mil BTUs Inverter Midea 220w",
        "description":"Incluso Instalação com tubulação até 3m",
        "images": "Ar-5.webp",
        "price": 2988.99,
        "promo": "ou R$ 3.199,00 em 8x sem juros"
    },

    {
        "id": 5,
        "name":"Ar-Condicionado 12mil BTUs Inverter Samsung 220w",
        "description":"Incluso Instalação com tubulação até 3m",
        "images": "Ar-6.webp",
        "price": 3679.99,
        "promo": "ou R$ 3.990,00 em 8x sem juros"
    },

    {
        "id": 6,
        "name":"Ar-Condicionado 12mil BTUs Inverter Midea 220w",
        "description":"Incluso Instalação com tubulação até 3m",
        "images": "Ar-7.webp",
        "price": 3849.99,
        "promo": "ou R$ 4.090,00 em 8x sem juros"
    },

    {
        "id": 7,
        "name":"Ar-Condicionado 12Mil BTUs Inverter Gree 220w",
        "description":"Incluso Instalação com tubulação até 3m",
        "images": "Ar-8.webp",
        "price": 3288.99,
        "promo": "ou R$ 3.540,00 em 8x sem juros"
    },

    {
        "id": 8,
        "name":"Ar-condicionado 12Mil BTUs EletroLux Inverter 220w",
        "description":"Incluso Instalação com tubulação até 3m",
        "images": "Ar-9.webp",
        "price": 3388.99,
        "promo": "ou R$ 3.569,00 em 8x sem juros"
    },

    {
        "id": 9,
        "name":"Ar-Condicionado 18mil BTUs Inverter Tcl 220w",
        "description":"Incluso Instalação com tubulação até 3m",
        "images": "Ar-10.webp",
        "price": 4449.99,
        "promo": "ou R$ 4.840,00 em 8x sem juros"
    },

    {
        "id": 10,
        "name":"Ar-Condicionado 18mil BTUs Midea Inverter 220w",
        "description":"Incluso Instalação com tubulação até 3m",
        "images": "Ar-11.webp",
        "price": 4258.99,
        "promo": "ou R$ 4.579,90 em 8x sem juros"
    },

    {
        "id": 11,
        "name":"Ar-Condicionado 18mil BTUs Inverter Elgin 220w",
        "description":"Incluso Instalação com tubulação até 3m",
        "images": "Ar-12.webp",
        "price": 3998.99,
        "promo": "ou R$ 4.180,90 em 8x sem juros"
    },

    {
        "id": 12,
        "name":"Ar-Condicionado 18mil BTUs Inverter Gree 220w",
        "description":"Incluso Instalação com tubulação até 3m",
        "images": "Ar-13.webp",
        "price": 4379.99,
        "promo": "ou R$ 4.640,70 em 8x sem juros"
    },

    {
        "id": 13,
        "name":"Ar-Condicionado 24mil BTUs Inverter Tcl 220w",
        "description":"Incluso Instalação com tubulação até 3m",
        "images": "Ar-14.webp",
        "price": 5379.99,
        "promo": "ou R$ 5.769,10 em 8x sem juros"
    },

    {
        "id": 14,
        "name":"Ar-Condicionado 24mil BTUs Inverter Eletrolux 220w",
        "description":"Incluso Instalação com tubulação até 3m",
        "images": "Ar-15.webp",
        "price": 4298.99,
        "promo": "ou R$ 4.620,20 em 8x sem juros"
    },

    {
        "id": 15,
        "name":"Ar-Condicionado 24mil BTUs Inverter Philco 220w",
        "description":"Incluso Instalação com tubulação até 3m",
        "images": "Ar-16.webp",
        "price": 4788.99,
        "promo": "ou R$ 4.990,90 em 8x sem juros"
    },

]

let products2 = [
    {
        "id": 16,
        "name":"Climatizador 45L Eos",
        "images": "Clima-1.webp",
        "price": 1398.99,
        "promo": "ou R$ 1.610,90 em 8x sem juros"
    },

    {
        "id": 17,
        "name":"Climatizador 7L Eos",
        "images": "Clima-2.webp",
        "price": 789.99,
        "promo": "ou R$ 900,00 em 8x sem juros"
    },

    {
        "id": 18,
        "name":"Climatizador 3,5L Eos",
        "images": "Clima-3.webp",
        "price": 549.99,
        "promo": "ou R$ 700,00 em 8x sem juros"
    },
]

let products3 = [
    {
        "id": 19,
        "name":"Cortina de Ar 90cm Eos 220w",
        "description":"Sem controle",
        "images": "Cortina-1.webp",
        "price": 779.99,
        "promo": "ou R$ 900,00 em 8x sem juros"
    },

    {
        "id": 20,
        "name":"Cortina de Ar 90cm Eos 220w",
        "description":"Com controle",
        "images": "Cortina-2.webp",
        "price": 849.99,
        "promo": "ou R$ 1.100,00 em 8x sem juros"
    },

    {
        "id": 21,
        "name":"Cortina de Ar 100cm Eos 220w",
        "description":"Sem controle",
        "images": "Cortina-3.webp",
        "price": 879.99,
        "promo": "ou R$ 1.100,00 em 8x sem juros"
    },
    {
        "id": 22,
        "name":"Cortina de Ar 100cm Eos 220w",
        "description":"Com controle",
        "images": "Cortina-4.webp",
        "price": 929.99,
        "promo": "ou R$ 1.210,90 em 8x sem juros"
    },
]
let products4 = [
    {
        "id": 23,
        "name":"Ar-Condicionado 12Mil BTUs Inverter Gree 220w",
        "description":"Incluso Instalação com tubulação até 3m",
        "images": "Ar-8.webp",
        "price": 3288.99,
        "promo": "ou R$ 3.410,90 em 8x sem juros"
    },

    {
        "id": 24,
        "name":"Ar-Condicionado 9mil BTUs Inverter Samsung 220w",
        "description":"Incluso Instalação com tubulação até 3m",
        "images": "Ar-4.webp",
        "price": 3398.99,
        "promo": "ou R$ 3.510,90 em 8x sem juros"
    },

    {
        "id": 25,
        "name":"Climatizador 45L Eos",
        "images": "Clima-1.webp",
        "price": 1398.99,
        "promo": "ou R$ 1.510,90 em 8x sem juros"
    },
    {
        "id": 26,
        "name":"Ar-Condicionado 9mil BTUs Inverter Eletrolux 220w",
        "description":"Incluso Instalação com tubulação até 3m",
        "images": "Ar-3.webp",
        "price": 2698.99,
        "promo": "ou R$ 2.810,90 em 8x sem juros"
    },
]
let listCards = [];

const initApp = () => {
    renderProducts(products, list, addToCart);
    renderProducts(products2, list2, addToCart);
    renderProducts(products3, list3, addToCart);
    renderProducts(products4, list4);
}

const renderProducts = (productsList, container, addToCartFunction) => {
    productsList.forEach((product) => {
        const newDiv = document.createElement("div");
        newDiv.classList.add("item");
        newDiv.innerHTML = `
            <img src="images/${product.images}">
            <div class="title border-t pt-1">${product.name}</div>
            <div class="description">${product.description}</div>
            <div class="price">R$${product.price.toLocaleString()}</div>
            <div class="promo">${product.promo}</div>
            <button class="adicionarCarrinho" onclick="addToCart(${product.id})">Adicione ao Carrinho</button>
        `;
        container.appendChild(newDiv);
    });
}

const renderProducts4 = (productsList, container) => { // Renderizando produtos da lista 4 com comportamento específico
    productsList.forEach((product) => {
        const newDiv = document.createElement("div");
        newDiv.classList.add("item", "card2");
        newDiv.innerHTML = `
            <img src="/images/${product.images}">
            <div class="title border-t pt-1 dark:text-gray-100">${product.name}</div>
            <div class="description py-1 dark:text-gray-100">${product.description}</div>
            <div class="price font-semibold font-montserrat py-2">R$${product.price.toLocaleString()}</div>
            <div class="promo">${product.promo}</div>
            <button class="adicionarCarrinho4" onclick="addToCart4(${product.id})">Comprar Agora</button>
        `;
        list4.appendChild(newDiv);
    });
}

const addToCart = (productId) => {
    const product = findProduct(productId);
    if (!product) return;

    const existingItem = listCards.find(item => item.id === product.id);
    if (existingItem) {
        existingItem.quantity++;
    } else {
        listCards.push({...product, quantity: 1});
    }

    reloadCard();
    updateLocalStorage();

    const modal = document.getElementById("modal-cart");
    modal.classList.remove("hidden");
    modal.classList.add("-translate-y-full");
    setTimeout(() => {
        modal.classList.remove("-translate-y-full");
        setTimeout(() => {
            modal.classList.add("-translate-y-full");
            setTimeout(() => {
                modal.classList.add("hidden");
            }, 300);
        }, 4000);
    }, 0);
}

const addToCart4 = (productId) => { // Função específica para lista4
    const product = findProduct(productId);
    if (!product) return;

    const existingItem = listCards.find(item => item.id === product.id);
    if (existingItem) {
        existingItem.quantity++;
        
    } else {
        listCards.push({...product, quantity: 1}); // Adicionando ao carrinho sem preço extra
    }

    reloadCard();
    updateLocalStorage();

    updateLocalStorage();
    const modal = document.getElementById("modal-cart");
    modal.classList.remove("hidden");
    modal.classList.add("-translate-y-full");
    setTimeout(() => {
        modal.classList.remove("-translate-y-full");
        setTimeout(() => {
            modal.classList.add("-translate-y-full");
            setTimeout(() => {
                modal.classList.add("hidden");
            }, 300);
        }, 4000);
    }, 0);
}

const findProduct = (productId) => {
    const allProducts = [...products, ...products2, ...products3, ...products4];
    return allProducts.find(product => product.id === productId);
}

const reloadCard = () => {
    listCard.innerHTML = "";
    let count = 0;
    let totalPrice = 0;

    listCards.forEach((item) => {
        totalPrice += item.price * item.quantity;
        count += item.quantity;

        const newDiv = document.createElement("li");
        newDiv.innerHTML = `
            <div><img src="images/${item.images}"></div>
            <div class="cardTitle">${item.name}</div>
            <div class="cardPrice -mr-4">R$${(item.price * item.quantity).toLocaleString()}</div>
            <div class="pr-10">
                <button style="background-color:#560bad;" class="cardButton" onclick="changeQuantity(${item.id}, ${item.quantity - 1})">-</button>
                <div class="count">${item.quantity}</div>
                <button style="background-color:#560bad;" class="cardButton" onclick="changeQuantity(${item.id}, ${item.quantity + 1})">+</button>
            </div>
        `;
        listCard.appendChild(newDiv);
    });

    total.innerText = 'R$' + totalPrice.toLocaleString();
    quantity.innerText = count;
}

const changeQuantity = (productId, quantity) => {
    const itemIndex = listCards.findIndex(item => item.id === productId);
    if (itemIndex === -1) return;

    if (quantity <= 0) {
        listCards.splice(itemIndex, 1);
    } else {
        listCards[itemIndex].quantity = quantity;
    }

    reloadCard();
    updateLocalStorage();
}

window.onload = () => {
    const storedCards = JSON.parse(localStorage.getItem('carrinho'));
    if (storedCards) {
        listCards = storedCards;
        reloadCard();
    }
};

const updateLocalStorage = () => {
    localStorage.setItem('carrinho', JSON.stringify(listCards));
}

document.getElementById('close').addEventListener('click', () => {
    location.reload();
});

initApp();


// ============================== Whats App ==============================
function enviarMensagem() {
    var numeroDestino = '67996389988'; 
    var idPedido = Math.floor(Math.random() * 10000 + 1);
    var mensagem = 'Pedido número ' + idPedido + ':\n\n'; 

    var carrinho = JSON.parse(localStorage.getItem('carrinho'));
    if (carrinho) {
        Object.values(carrinho).forEach((product) => {
            if (product) {
                mensagem += `${product.quantity}x\n - ${product.name} - R$${product.price} \n`; 
            }
        });
    }

    mensagem = encodeURIComponent(mensagem);

    var url = 'https://wa.me/' + numeroDestino + '?text=' + mensagem;

    window.open(url, '_blank');
    enviarMensagem(numeroDestino, mensagem);
}

