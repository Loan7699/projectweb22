import axios from "axios";

function getAllProducts() {
    return axios.get(url:'https://fakestoreapi.com/products');
}

export function getProductsById(id) {
    return axios.get(url:'https://fakestoreapi.com/products/${id}');
}

// cú pháp export/import: export function hoặc export const /let
// import {name} from "module";
// import name from 'module';