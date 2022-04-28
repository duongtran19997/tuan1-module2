"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductManager = void 0;
var ProductManager = /** @class */ (function () {
    function ProductManager() {
        this.Product = [];
    }
    ProductManager.prototype.getAll = function () {
        return this.Product;
    };
    ProductManager.prototype.addProduct = function (product) {
        this.Product.push(product);
    };
    return ProductManager;
}());
exports.ProductManager = ProductManager;
