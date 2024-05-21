import axios from "axios";

const REST_API_BASE_URL = 'http://localhost:8080/api/v1/employee';
const REST_API_SAVE_URL = 'http://localhost:8080/api/v1/employee/saveEmployee';
const REST_API_UPDATE_URL = 'http://localhost:8080/api/v1/employee/updateEmployee';

export const listEmployees = () =>  axios.get(REST_API_BASE_URL);

export const  createEmployee = (employee) => axios.post(REST_API_SAVE_URL, employee)

export const updateEmployee = (employee) => axios.put(REST_API_UPDATE_URL, employee)

export const getEmployee = (employeePhone) => axios.get(REST_API_BASE_URL + '/' + employeePhone)