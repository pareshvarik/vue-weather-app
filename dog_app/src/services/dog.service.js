import axios from "axios";

export function getAllBread() {
  return axios.get(`https://dog.ceo/api/breeds/list/all`);
}
export function getRandomImg(breed_name) {
  return axios.get(`https://dog.ceo/api/breed/${breed_name}/images/random`);
}

export function getBreadImg(name) {
  return axios.get(`https://dog.ceo/api/breed/${name}/images`);
}
