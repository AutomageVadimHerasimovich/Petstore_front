import React, {useEffect, useState} from "react";
import {listEmployees} from "../services/EmployeeService.js";

const ListEmployeeComponent = () => {

    const [employees, setEmployees] = useState([])

    useEffect(() => {
        listEmployees().then((response) => {
            setEmployees(response.data)
        }).catch((error) => {
            console.error(error);
        })
    }, [])

    return (
        <div className='container'>
            <h2 className="text-center">List of Employees</h2>
            <table className='table table-striped table-bordered'>
                    <thead>
                        <tr>
                            <th>Employee Id</th>
                            <th>Employee First Name</th>
                            <th>Employee Phone</th>
                            <th>Employee Password</th>
                            <th>Employee Role</th>
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
                                </tr>
                            )
                        }
                </tbody>
            </table>
        </div>
    )
}

export default ListEmployeeComponent;