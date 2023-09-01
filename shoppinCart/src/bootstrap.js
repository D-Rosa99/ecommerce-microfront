import faker from "faker";

export const mount = (element) => {
  const shoppingText = `<div>There're ${faker.random.number()} number of product in the cart</div>`;

  element.innerHTML = shoppingText;
};

if (process.env.NODE_ENV === "development") {
  const el = document.querySelector("#dev_shopping_cart");

  if (el) {
    mount(el);
  }
}
