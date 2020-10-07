import axios from 'axios'

const URL = " http://localhost:3000/products/";

export function getAll() {
    return axios.get(URL);
}

export function addProduct(product) {
    return axios.post(URL, product);
}

export function updateProduct(product) {
    return axios.put(URL + product.id, product)
}

export function deleteProduct(id) {
    return axios.delete(URL + id);
}