import faker from "faker";

const shoppingText = `<div>There're ${faker.random.number()} number of product in the cart</div>`;

document.querySelector("#shopping_cart").innerHTML = shoppingText;
