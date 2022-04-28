import {Product} from "./Product";
import {ProductManager} from "./ProductManager";

let laptop = new Product("Laptop", 20000);
let iphone = new Product("Iphone", 10000);
let productManager = new ProductManager();
productManager.addProduct(laptop);
productManager.addProduct(iphone);

console.log(productManager.getAll);