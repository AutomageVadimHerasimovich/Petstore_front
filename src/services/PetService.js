import axios from "axios";

const REST_API_BASE_URL = 'http://localhost:8080/api/v1/petstore';
const REST_API_SAVE_URL = 'http://localhost:8080/api/v1/petstore/savePet';
const REST_API_UPDATE_URL = 'http://localhost:8080/api/v1/petstore/updatePet';
const REST_API_DELETE_URL = 'http://localhost:8080/api/v1/petstore/deletePet';

export const listPets = () =>  axios.get(REST_API_BASE_URL);

export const  createPet = (Pet) => axios.post(REST_API_SAVE_URL, Pet)

export const updatePet = (Pet) => axios.put(REST_API_UPDATE_URL, Pet)

export const getPet = (PetPhone) => axios.get(REST_API_BASE_URL + '/' + PetPhone)

export const deletePet = (PetPhone) => axios.delete(REST_API_DELETE_URL + '/' + PetPhone)