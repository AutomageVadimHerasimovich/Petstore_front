import React, {useEffect, useState} from "react";
import {deleteEmployee, listEmployees} from "../services/EmployeeService.js";
import {useNavigate} from "react-router-dom";

const ListEmployeeComponent = () => {

    const [employees, setEmployees] = useState([])

    const navigator = useNavigate();

    useEffect(() => {
        getAllEmployees();
    }, [])

    function getAllEmployees() {
        listEmployees().then((response) => {
            setEmployees(response.data)
        }).catch((error) => {
            console.error(error);
        })
    }

    function addNewEmployee() {
        navigator('/employee/saveEmployee');
    }

    function updateEmployee(phone) {
        navigator(`/employee/updateEmployee/${phone}`);
    }

    function removeEmployee(phone) {
        console.log("Employee deleted with Phone: " + phone);

        deleteEmployee(phone).then(() => {
            getAllEmployees();
            navigator('/employee');
        }).catch((error) => {
            console.error(error);
        })
    }

    return (
        <div className='container'>
            <h2 className="text-center">List of Employees</h2>
            <button className="btn btn-primary mb-2" onClick={addNewEmployee}>Add Employee</button>
            <table className='table table-striped table-bordered'>
                    <thead>
                        <tr>
                            <th>Employee Id</th>
                            <th>Employee First Name</th>
                            <th>Employee Phone</th>
                            <th>Employee Password</th>
                            <th>Employee Role</th>
                            <th>Employee Pets</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                <tbody>
                        {
                            employees.map(employee =>
                                <tr key={employee.id}>
                                    <td>{employee.id}</td>
                                    <td>{employee.firstName}</td>
                                    <td>{employee.phone}</td>
                                    <td>{employee.password}</td>
                                    <td>{employee.role}</td>
                                    <td>{employee.pets.map(x => x.phone).join(', ')}</td>
                                    <td>
                                        <button className="btn btn-info" onClick={() => updateEmployee(employee.phone)}>Update</button>
                                        <button className="btn btn-danger" onClick={() => removeEmployee(employee.phone)}
                                                style={{marginLeft: "10px"}}
                                        >Delete</button>

                                    </td>
                                </tr>
                            )
                        }
                </tbody>
            </table>
        </div>
    )
}

export default ListEmployeeComponent;