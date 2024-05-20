import React, {useState} from "react";
import {createEmployee} from "../services/EmployeeService.js";
import {useNavigate} from "react-router-dom";

const EmployeeComponent = () => {

    const [firstName, setFirstName] = useState('')
    const [phone, setPhone] = useState('')
    const [password, setPassword] = useState('')
    const [role, setRole] = useState('')

    const [errors, setErrors] = useState({
        firstName: '',
        phone: '',
        password: '',
        role: ''
    })

    const navigator = useNavigate();

    function saveEmployee(event) {
        event.preventDefault();

        if (validateForm()) {
            const employee = {firstName, phone, password, role}
            console.log(employee)

            createEmployee(employee).then((response) => {
                console.log(response.data);
                navigator('/employee');
            })
        }
    }

    function validateForm() {
        let valid = true;

        const errorsCopy = {... errors}

        if (firstName.trim()){
            errorsCopy.firstName = '';
        } else {
            errorsCopy.firstName = 'First Name is required';
            valid = false;
        }

        if (phone.trim()){
            errorsCopy.phone = '';
        } else {
            errorsCopy.phone = 'Phone is required';
            valid = false;
        }

        if (password.trim()){
            errorsCopy.password = '';
        } else {
            errorsCopy.password = 'Password is required';
            valid = false;
        }

        if (role.trim()) {
            errorsCopy.role = '';
        } else {
            errorsCopy.role = 'Role is required';
            valid = false;
        }

        setErrors(errorsCopy);

        return valid;
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
                                    className={'form-control' + (errors.firstName ? ' is-invalid' : '')}
                                    onChange={(event) => setFirstName(event.target.value)}>
                                </input>
                                {errors.firstName && <div className='invalid-feedback'> { errors.firstName} </div>}
                            </div>

                            <div className='form-group mb-2'>
                                <label className='form-label'>Phone:</label>
                                <input
                                    type='text'
                                    placeholder='Enter Employee Phone'
                                    name='phone'
                                    value={phone}
                                    className={'form-control' + (errors.phone ? ' is-invalid' : '')}
                                    onChange={(event) => setPhone(event.target.value)}>
                                </input>
                                {errors.phone && <div className='invalid-feedback'> { errors.phone} </div>}
                            </div>

                            <div className='form-group mb-2'>
                                <label className='form-label'>Password:</label>
                                <input
                                    type='password'
                                    placeholder='Enter Employee Password'
                                    name='password'
                                    value={password}
                                    className={'form-control' + (errors.password ? ' is-invalid' : '')}
                                    onChange={(event) => setPassword(event.target.value)}>
                                </input>
                                {errors.password && <div className='invalid-feedback'> { errors.password} </div>}
                            </div>

                            <div className='form-group mb-2'>
                                <label className='form-label'>Role:</label>
                                <input
                                    type='text'
                                    placeholder='Enter Employee Role'
                                    name='role'
                                    value={role}
                                    className={'form-control' + (errors.role ? ' is-invalid' : '')}
                                    onChange={(event) => setRole(event.target.value)}>
                                </input>
                                {errors.role && <div className='invalid-feedback'> { errors.role} </div>}
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