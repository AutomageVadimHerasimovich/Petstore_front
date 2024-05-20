import React, {useState} from "react";
import {createEmployee} from "../services/EmployeeService.js";
import {useNavigate} from "react-router-dom";

const EmployeeComponent = () => {

    const [firstName, setFirstName] = useState('')
    const [phone, setPhone] = useState('')
    const [password, setPassword] = useState('')
    const [role, setRole] = useState('')

    const navigator = useNavigate();

    function saveEmployee(event) {
        event.preventDefault();

        const employee = {firstName, phone, password, role}
        console.log(employee)

        createEmployee(employee).then((response) => {
            console.log(response.data);
            navigator('/employee');
        })
    }

    return (
        <div className='container'>
            <br /> <br />
            <div className='row'>
                <div className='card col-md-6 offset-md-3 offset-md-3'>
                    <h2 className="text-center">Add Employee</h2>
                    <div className='card-body'>
                        <form>
                            <div className='form-group mb-2'>
                                <label className='form-label'>First Name:</label>
                                <input
                                    type='text'
                                    placeholder='Enter Employee First Name'
                                    name='firstName'
                                    value={firstName}
                                    className='form-control'
                                    onChange={(event) => setFirstName(event.target.value)}>
                                </input>
                            </div>

                            <div className='form-group mb-2'>
                                <label className='form-label'>Phone:</label>
                                <input
                                    type='text'
                                    placeholder='Enter Employee Phone'
                                    name='phone'
                                    value={phone}
                                    className='form-control'
                                    onChange={(event) => setPhone(event.target.value)}>
                                </input>
                            </div>

                            <div className='form-group mb-2'>
                                <label className='form-label'>Password:</label>
                                <input
                                    type='password'
                                    placeholder='Enter Employee Password'
                                    name='password'
                                    value={password}
                                    className='form-control'
                                    onChange={(event) => setPassword(event.target.value)}>
                                </input>
                            </div>

                            <div className='form-group mb-2'>
                                <label className='form-label'>Role:</label>
                                <input
                                    type='text'
                                    placeholder='Enter Employee Role'
                                    name='role'
                                    value={role}
                                    className='form-control'
                                    onChange={(event) => setRole(event.target.value)}>
                                </input>
                            </div>

                            <button className='btn btn-success' onClick={saveEmployee}>Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EmployeeComponent;