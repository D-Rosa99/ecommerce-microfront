import {mount as mountProducts} from "products/ProductList";
import {mount as mountCart} from "shoppingCart/ShoppingCart";

mountProducts(document.querySelector('#my_products'));
mountCart(document.querySelector('#my_shopping_cart'));
