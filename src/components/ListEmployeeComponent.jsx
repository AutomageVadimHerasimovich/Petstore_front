import React from "react";

const ListEmployeeComponent = () => {
    const dummyData = [
        {
            id: 1,
            firstName: 'John',
            phone: 'Doe',
            password: "123456789",
            role: "user",
            pets: "xyita"
        },
        {
            id: 2,
            firstName: 'Jane',
            phone: 'Doe',
            password: "123456789",
            role: "user",
            pets: "xyita"
        },
        {
            id: 3,
            firstName: 'John',
            phone: 'Doe',
            password: "123456789",
            role: "user",
            pets: "xyita"
        },
        {
            id: 4,
            firstName: 'Jane',
            phone: 'Doe',
            password: "123456789",
            role: "user",
            pets: "xyita"
        },
        {
            id: 5,
            firstName: 'John',
            phone: 'Doe',
            password: "123456789",
            role: "user",
            pets: "xyita"
        },
        {
            id: 6,
            firstName: 'Jane',
            phone: 'Doe',
            password: "123456789",
            role: "user",
            pets: "xyita"
        },
        {
            id: 7,
            firstName: 'John',
            phone: 'Doe',
            password: "123456789",
            role: "user",
            pets: "xyita"
        },
        {
            id: 8,
            firstName: 'Jane',
            phone: 'Doe',
            password: "123456789",
            role: "user",
            pets: "xyita"

        }
    ]
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
                            <th>Employee Pets</th>
                        </tr>
                    </thead>
                <tbody>
                        {
                            dummyData.map(employee =>
                                <tr key={employee.id}>
                                    <td>{employee.id}</td>
                                    <td>{employee.firstName}</td>
                                    <td>{employee.phone}</td>
                                    <td>{employee.password}</td>
                                    <td>{employee.role}</td>
                                    <td>{employee.pets}</td>
                                </tr>
                            )
                        }
                </tbody>
            </table>
        </div>
    )
}

export default ListEmployeeComponent;