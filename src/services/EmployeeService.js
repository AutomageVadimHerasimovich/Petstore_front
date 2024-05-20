import axios from "axios";
import employeeComponent from "../components/EmployeeComponent.jsx";

const REST_API_BASE_URL = 'http://localhost:8080/api/v1/employee';
const REST_API_SAVE_URL = 'http://localhost:8080/api/v1/employee/saveEmployee';

export const listEmployees = () =>  axios.get(REST_API_BASE_URL);

export const  createEmployee = (employee) => axios.post(REST_API_SAVE_URL, employee)