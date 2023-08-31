import faker from "faker";

let products = "";

for (let index = 0; index < 5; index++) {
  const productItem = faker.commerce.productName();
  products += `<div>${productItem}</div>`;
}

document.querySelector('#product_list').innerHTML = products;
