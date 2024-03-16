
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
        "id": 0,
        "name":"Climatizador 45L Eos",
        "images": "Clima-1.webp",
        "price": 1398.99,
        "promo": "ou R$ 1.610,90 em 8x sem juros"
    },

    {
        "id": 1,
        "name":"Climatizador 7L Eos",
        "images": "Clima-2.webp",
        "price": 789.99,
        "promo": "ou R$ 900,00 em 8x sem juros"
    },

    {
        "id": 2,
        "name":"Climatizador 3,5L Eos",
        "images": "Clima-3.webp",
        "price": 549.99,
        "promo": "ou R$ 700,00 em 8x sem juros"
    },
]

let products3 = [
    {
        "id": 0,
        "name":"Cortina de Ar 90cm Eos 220w",
        "description":"Sem controle",
        "images": "Cortina-1.webp",
        "price": 779.99,
        "promo": "ou R$ 900,00 em 8x sem juros"
    },

    {
        "id": 1,
        "name":"Cortina de Ar 90cm Eos 220w",
        "description":"Com controle",
        "images": "Cortina-2.webp",
        "price": 849.99,
        "promo": "ou R$ 1.100,00 em 8x sem juros"
    },

    {
        "id": 2,
        "name":"Cortina de Ar 100cm Eos 220w",
        "description":"Sem controle",
        "images": "Cortina-3.webp",
        "price": 879.99,
        "promo": "ou R$ 1.100,00 em 8x sem juros"
    },
    {
        "id": 3,
        "name":"Cortina de Ar 100cm Eos 220w",
        "description":"Com controle",
        "images": "Cortina-4.webp",
        "price": 929.99,
        "promo": "ou R$ 1.210,90 em 8x sem juros"
    },
]
let products4 = [
    {
        "id": 0,
        "name":"Ar-Condicionado 12Mil BTUs Inverter Gree 220w",
        "description":"Incluso Instalação com tubulação até 3m",
        "images": "Ar-8.webp",
        "price": 3288.99,
        "promo": "ou R$ 3.410,90 em 8x sem juros"
    },

    {
        "id": 1,
        "name":"Ar-Condicionado 9mil BTUs Inverter Samsung 220w",
        "description":"Incluso Instalação com tubulação até 3m",
        "images": "Ar-4.webp",
        "price": 3398.99,
        "promo": "ou R$ 3.510,90 em 8x sem juros"
    },

    {
        "id": 2,
        "name":"Climatizador 45L Eos",
        "images": "Clima-1.webp",
        "price": 1398.99,
        "promo": "ou R$ 1.510,90 em 8x sem juros"
    },
    {
        "id": 3,
        "name":"Ar-Condicionado 9mil BTUs Inverter Eletrolux 220w",
        "description":"Incluso Instalação com tubulação até 3m",
        "images": "Ar-3.webp",
        "price": 2698.99,
        "promo": "ou R$ 2.810,90 em 8x sem juros"
    },
]

let listCards = [];

const initApp = () => {
    products.forEach((value, key) => {
        let newDiv = document.createElement("div");
        newDiv.classList.add("item", "card3");
        newDiv.innerHTML = `
        <img src = "images/${value.images}">
        <div class = "title border-t pt-1">${value.name}</div>
        <div class = "description">${value.description}</div>
        <div class = "price">R$${value.price.toLocaleString()}</div>
        <div class = "promo">${value.promo}</div>
        <button class="adicionarCarrinho" onclick = " adicionarAoCarrinho(${key})">Adicione ao Carrinho
        </button>
        `
        list.appendChild(newDiv)
    })

    products2.forEach((value, key) => {
        let newDiv = document.createElement("div");
        newDiv.classList.add("item");
        newDiv.innerHTML = `
        <img src = "/images/${value.images}">
        <div class = "title border-t pt-1">${value.name}</div>
        <div class = "price">R$${value.price.toLocaleString()}</div>
        <div class = "promo">${value.promo}</div>
        <button class="adicionarCarrinho2" onclick = " adicionarAoCarrinho2(${key})">Adicione ao Carrinho
        </button>
        `
        list2.appendChild(newDiv)
    })

    products3.forEach((value, key) => {
        let newDiv = document.createElement("div");
        newDiv.classList.add("item");
        newDiv.innerHTML = `
        <img src = "/public/${value.images}">
        <div class = "title border-t pt-1">${value.name}</div>
        <div class = "description">${value.description}</div>
        <div class = "price py-3 font-montserrat font-semibold">R$${value.price.toLocaleString()}</div>
        <div class = "promo">${value.promo}</div>
        <button class="adicionarCarrinho3" onclick = " adicionarAoCarrinho3(${key})">Adicione ao Carrinho
        </button>
        `
        list3.appendChild(newDiv)
    })

    products4.forEach((value, key) => {
        let newDiv = document.createElement("div");
        newDiv.classList.add("item", "card2");
        newDiv.innerHTML = `
        <img src = "/public/${value.images}">
        <div class = "title border-t pt-1 dark:text-gray-100">${value.name}</div>
        <div class = "description py-1 dark:text-gray-100">${value.description}</div>
        <div class = "price font-semibold font-montserrat py-2 dark:txt-white text-black">R$${value.price.toLocaleString()}</div>
        <div class = "promo">${value.promo}</div>
        <button class="adicionarCarrinho4" onclick = "adicionarAoCarrinho4(${key})">Comprar Agora
        </button>
        `
        list4.appendChild(newDiv)
    })


}

initApp()

const addToCard = key => {
    if(listCards[key] == null) {
        listCards[key] = JSON.parse(JSON.stringify(products[key]));
        listCards[key].quantity = 1
    }

    reloadCard()
}
const reloadCard = () => {
    listCard.innerHTML = "";
    let count = 0;
    let totalPrice = 0;

    listCards.forEach((value, key) => {
        totalPrice = totalPrice + value.price;
        count = count + value.quantity;

        if(value != null) {
            let newDiv = document.createElement("li");
            newDiv.innerHTML = `
            <div><img src = "/public/${value.images}"></div>
            <div class = "cardTitle">${value.name}</div>
            <div class = "cardPrice -mr-4">R$${value.price.toLocaleString()}</div>

            <div class="pr-10">
                    <button style = "background-color:#560bad;" class = "cardButton" onclick = "changeQuantity(${key}, ${value.quantity - 1})">-</button>
                    <div class = "count">${value.quantity}</div>
                    <button style = "background-color:#560bad;" class = "cardButton" onclick = "changeQuantity(${key}, ${value.quantity + 1})">+</button>
            </div>
        `
        listCard.appendChild(newDiv);
        }

        total.innerText = 'R$' + totalPrice.toLocaleString();
        quantity.innerText = count;
    })
}

const changeQuantity = (key, quantity) => {
    if(quantity == 0) {
        delete listCards[key]
    }
    else {
        listCards[key].quantity = quantity;
        listCards[key].price = quantity * products[key].price
    }

    reloadCard();
    updateLocalStorage();
}

window.onload = function() {
    var carrinho = JSON.parse(localStorage.getItem('carrinho'));
    if (carrinho) {
        listCards = carrinho;
        reloadCard();
    }
};

// Adicionar produtos ao carrinho e ao localStorage
function adicionarAoCarrinho(key) {
    if (!listCards[key]) {
        listCards[key] = JSON.parse(JSON.stringify(products[key]));
        listCards[key].quantity = 1;
    } else {
        listCards[key].quantity++;
    }
    reloadCard();
    updateLocalStorage();

    var modal = document.getElementById("modal-cart");
    
    modal.classList.remove("hidden");
    
    modal.classList.add("-translate-y-full");
    
    setTimeout(function() {
        modal.classList.remove("-translate-y-full");
        
        setTimeout(function() {
            modal.classList.add("-translate-y-full");
            
            setTimeout(function() {
                modal.classList.add("hidden");
            }, 300); 
        }, 4000); 
    }, 0);

}

function updateLocalStorage() {
    localStorage.setItem('carrinho', JSON.stringify(listCards));
}

document.getElementById('close').addEventListener('click', function() {
    
    location.reload();
});

function adicionarAoCarrinho2(key) {
    if (!listCards[key]) {
        listCards[key] = JSON.parse(JSON.stringify(products2[key]));
        listCards[key].quantity = 1;
    } else {
        listCards[key].quantity++;
    }
    reloadCard();
    updateLocalStorage();
    
    var modal = document.getElementById("modal-cart");
    
    modal.classList.remove("hidden");
    
    modal.classList.add("-translate-y-full");
    
    setTimeout(function() {
        modal.classList.remove("-translate-y-full");
        
        setTimeout(function() {
            modal.classList.add("-translate-y-full");
            
            setTimeout(function() {
                modal.classList.add("hidden");
            }, 300); 
        }, 4000); 
    }, 0); 


}

function updateLocalStorage() {
    localStorage.setItem('carrinho', JSON.stringify(listCards));
}

document.getElementById('close').addEventListener('click', function() {
    
    location.reload();
});

function adicionarAoCarrinho3(key) {
    if (!listCards[key]) {
        listCards[key] = JSON.parse(JSON.stringify(products3[key]));
        listCards[key].quantity = 1;
    } else {
        listCards[key].quantity++;
    }
    reloadCard();
    updateLocalStorage();
   
    var modal = document.getElementById("modal-cart");
    
    modal.classList.remove("hidden");
    
    modal.classList.add("-translate-y-full");
    
    setTimeout(function() {
        modal.classList.remove("-translate-y-full");
        
        setTimeout(function() {
            modal.classList.add("-translate-y-full");
            
            setTimeout(function() {
                modal.classList.add("hidden");
            }, 300); 
        }, 4000); 
    }, 0); 

}

function updateLocalStorage() {
    localStorage.setItem('carrinho', JSON.stringify(listCards));
}

document.getElementById('close').addEventListener('click', function() {
    
    location.reload();
});

function adicionarAoCarrinho4(key) {
    if (!listCards[key]) {
        listCards[key] = JSON.parse(JSON.stringify(products4[key]));
        listCards[key].quantity = 1;
    } else {
        listCards[key].quantity++;
    }
    reloadCard();
    updateLocalStorage();
    
    var modal = document.getElementById("modal-cart");
    
    modal.classList.remove("hidden");
    
    modal.classList.add("-translate-y-full");
    
    setTimeout(function() {
        modal.classList.remove("-translate-y-full");
        
        setTimeout(function() {
            modal.classList.add("-translate-y-full");
            
            setTimeout(function() {
                modal.classList.add("hidden");
            }, 300); 
        }, 4000); 
    }, 0); 

}

function updateLocalStorage() {
    localStorage.setItem('carrinho', JSON.stringify(listCards));
}

document.getElementById('close').addEventListener('click', function() {

    location.reload();
});


// ============================== Whats App ==============================
function enviarMensagem() {
    var numeroDestino = '67996721069'; 
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
}

enviarMensagem(numeroDestino, mensagem);


