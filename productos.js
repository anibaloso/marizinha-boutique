// Lista de productos con tipo, nombre, imagen y precio
const product = [
    {
        id: 1,
        name: "Camiseta básica blanca",
        type: "camisetas",
        price: 15.99,
        image: "https://via.placeholder.com/200x200?text=Camiseta+Blanca"
    },
    {
        id: 2,
        name: "Pantalón vaquero azul",
        type: "pantalones",
        price: 39.99,
        image: "https://via.placeholder.com/200x200?text=Pantalón+Vaquero"
    },
    {
        id: 3,
        name: "Chaqueta de cuero",
        type: "chaquetas",
        price: 89.99,
        image: "https://via.placeholder.com/200x200?text=Chaqueta+Cuero"
    },
    {
        id: 4,
        name: "Gorra deportiva",
        type: "accesorios",
        price: 12.99,
        image: "https://via.placeholder.com/200x200?text=Gorra+Deportiva"
    },
    {
        id: 5,
        name: "Camiseta estampada",
        type: "camisetas",
        price: 18.99,
        image: "https://via.placeholder.com/200x200?text=Camiseta+Estampada"
    },
    {
        id: 6,
        name: "Pantalón de vestir negro",
        type: "pantalones",
        price: 45.00,
        image: "https://via.placeholder.com/200x200?text=Pantalón+Negro"
    },
    {
        id: 7,
        name: "Chaqueta impermeable",
        type: "chaquetas",
        price: 75.50,
        image: "https://via.placeholder.com/200x200?text=Chaqueta+Impermeable"
    },
    {
        id: 8,
        name: "Bufanda de lana",
        type: "accesorios",
        price: 20.00,
        image: "https://via.placeholder.com/200x200?text=Bufanda+Lana"
    }
];

let products = new product();
console.log("🚀 ~ products:", products)




export { products };