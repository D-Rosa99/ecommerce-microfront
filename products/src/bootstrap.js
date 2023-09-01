import faker from "faker";

export const mount = (element) => {
  let products = "";

  for (let index = 0; index < 5; index++) {
    const productItem = faker.commerce.productName();
    products += `<div>${productItem}</div>`;
  }

  element.innerHTML = products;
};

if (process.env.NODE_ENV === "development") {
  const el = document.querySelector("#dev_products");

  if (el) {
    mount(el);
  }
}
