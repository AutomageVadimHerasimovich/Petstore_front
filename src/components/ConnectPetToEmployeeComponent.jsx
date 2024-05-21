import React, {useEffect, useState} from "react";
import {connectPetToEmployee, getPet} from "../services/PetService.js";
import {useNavigate, useParams} from "react-router-dom";

const ConnectPetToEmployeeComponent = () => {

    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [status, setStatus] = useState('')
    const [age, setAge] = useState('')
    const [url, setUrl] = useState('')

    const [errorMessage, setErrorMessage] = useState(null);
    const { phone: phoneParam } = useParams();
    const [errors, setErrors] = useState({
        name: '',
        phone: '',
        status: '',
        age: '',
        url: ''
    })

    const navigator = useNavigate();

    useEffect(() => {
        if (phoneParam) {
            getPet(phoneParam).then((response) => {
                setName(response.data.name);
                setPhone(response.data.phone);
                setStatus(response.data.status);
                setAge(response.data.age);
                setUrl(response.data.url);
            }).catch((error) => {
                console.error(error);
            })
        }
    }, [phoneParam])

    function redactPet(event) {
        event.preventDefault();

        if (validateForm()) {
            const pet = {name, phone, status, age, url}
            console.log(pet)

            connectPetToEmployee(phoneParam, phone).then((response) => {
            // updatePet(pet).then((response) => {
                console.log(response.data);
                navigator('/petstore');
            }).catch((error) => {
                if (error.response && error.response.status === 500) {
                    console.error('Pet not found');
                    setErrorMessage('Pet not found by Phone');
                } else {
                    console.error(error);
                    setErrorMessage('Error updating pet');
                }
            })
        }
    }

    function validateForm() {
        let valid = true;

        const errorsCopy = {... errors}

        if (name.trim()){
            errorsCopy.name = '';
        } else {
            errorsCopy.name = 'Name is required';
            valid = false;
        }

        if (phone.trim()){
            errorsCopy.phone = '';
        } else {
            errorsCopy.phone = 'Phone is required';
            valid = false;
        }

        if (age){
            errorsCopy.age = '';
        } else {
            errorsCopy.age = 'Age is required';
            valid = false;
        }

        if (status.trim()) {
            errorsCopy.status = '';
        } else {
            errorsCopy.status = 'Status is required';
            valid = false;
        }

        setErrors(errorsCopy);

        return valid;
    }

    function pageTitle() {
            return <h2 className="text-center">Connect Pet</h2>
    }

    function pageButton() {
            return <button className='btn btn-outline-success' onClick={redactPet}>Connect</button>
    }

    function pageIfPhone() {
            return (
                <div className='form-group mb-2'>
                    <label className='form-label'>Phone:</label>
                    <input
                        type='text'
                        placeholder='Enter Pet Phone'
                        name='phone'
                        value={phone}
                        className={'form-control' + (errors.phone ? ' is-invalid' : '')}
                        onChange={(event) => setPhone(event.target.value)}>
                    </input>
                    {errors.phone && <div className='invalid-feedback'> { errors.phone} </div>}
                </div>
            )
    }

    return (
        <div className='container'>
            <br /> <br />
            <div className='row'>
                <div className='card col-md-6 offset-md-3 offset-md-3'>
                    {
                        pageTitle()
                    }
                    <div className='card-body'>
                        <form>
                            {
                                errorMessage && <div className='alert alert-danger'>{errorMessage}</div>
                            }
                            {
                                pageIfPhone()
                            }
                            {
                                pageButton()
                            }
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ConnectPetToEmployeeComponent;