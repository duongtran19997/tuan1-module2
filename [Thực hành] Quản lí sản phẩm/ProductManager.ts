import {Product} from "./Product";
export class ProductManager{
    private Product=[];
    constructor() {

    }
    getAll(){
        return this.Product
    }
    addProduct(product){
        this.Product.push(product)
    }
}