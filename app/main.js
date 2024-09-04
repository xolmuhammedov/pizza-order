"use strict";

const pizzaTypes = {
    pepperoni: {
        id: 1,
        type: "PEPPERONI",
        price: 1.40,
        img: "./assets/pepperoni.webp"
    },
    tomato: {
        id: 2,
        type: "TOMATO",
        price: 1.10,
        img: "./assets/tomato.jpg"
    },
    chicago: {
        id: 3,
        type: "CHICAGO",
        price: 2.10,
        img: "./assets/chicago.jpg"
    },
    padellino: {
        id: 4,
        type: "PADELLINO",
        price: 1.5,
        img: "./assets/padellino.jpeg"
    }
};

// Function to update the order display
function updateOrderDisplay() {
    const pizzaSelect = document.getElementById('pizzas-option');
    const piecesSelect = document.getElementById('pieces__select');
    const toppings = ['cheese', 'peppers', 'olives', 'beans'];
    const drinks = ['blacktea', 'greentea', 'cappucino', 'mojito'];
    const ordersDiv = document.getElementById('orders');

    let orderInfo = "";

    // Selected pizza
    let selectedPizza = pizzaTypes[pizzaSelect.value];
    if (selectedPizza) {
        orderInfo += `Pizza: ${selectedPizza.type}\n`;
        orderInfo += `Price: $${selectedPizza.price.toFixed(2)}\n`;
    } else {
        orderInfo += "No pizza selected\n";
    }

    // Number of pieces
    orderInfo += `Quantity: ${piecesSelect.value}\n`;

    // Toppings
    let selectedToppings = toppings.filter(topping => document.getElementById(topping).checked);
    if (selectedToppings.length > 0) {
        orderInfo += "Toppings: " + selectedToppings.join(", ") + "\n";
    }

    // Drinks
    let selectedDrinks = drinks.filter(drink => document.getElementById(drink).checked);
    if (selectedDrinks.length > 0) {
        orderInfo += "Drinks: " + selectedDrinks.join(", ") + "\n";
    }

    ordersDiv.textContent = orderInfo;
}

// Add event listeners
document.addEventListener('DOMContentLoaded', function() {
    const pizzaSelect = document.getElementById('pizzas-option');
    const piecesSelect = document.getElementById('pieces__select');
    const toppings = ['cheese', 'peppers', 'olives', 'beans'];
    const drinks = ['blacktea', 'greentea', 'cappucino', 'mojito'];

    pizzaSelect.addEventListener('change', updateOrderDisplay);
    piecesSelect.addEventListener('change', updateOrderDisplay);

    toppings.forEach(topping => {
        document.getElementById(topping).addEventListener('change', updateOrderDisplay);
    });

    drinks.forEach(drink => {
        document.getElementById(drink).addEventListener('change', updateOrderDisplay);
    });

    // Initial update
    updateOrderDisplay();
});






// const green = document.getElementById('greentea');
// if(green.checked){
//     const docs = document.getElementById('orders').innerHTML = JSON.stringify(paddelino);
// }else{
//     console.log(false);
// }

//const docs = document.getElementById('orders').innerHTML = JSON.stringify(paddelino);
// for(let item in paddelino)
// {
//     console.log(item);
//     console.log(Object.values(paddelino));
// }
// document.getElementById("pizzas").innerHTML = JSON.stringify(paddelino);