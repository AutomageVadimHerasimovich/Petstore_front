import React, { useState} from "react";
import {connectPetToEmployee} from "../services/PetService.js";
import {useNavigate, useParams} from "react-router-dom";

const ConnectPetToEmployeeComponent = () => {

    const [phone, setPhone] = useState('')

    const [errorMessage, setErrorMessage] = useState(null);
    const { phone: phoneParam } = useParams();
    const [errors, setErrors] = useState({
        phone: ''
    })

    const navigator = useNavigate();

    function connectPet(event) {
        event.preventDefault();

        if (validateForm()) {
            const pet = {phone}
            console.log(pet)

            connectPetToEmployee(phoneParam, phone).then((response) => {
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

        if (phone.trim()){
            errorsCopy.phone = '';
        } else {
            errorsCopy.phone = 'Phone is required';
            valid = false;
        }

        setErrors(errorsCopy);

        return valid;
    }

    function pageTitle() {
            return <h2 className="text-center">Connect Pet</h2>
    }

    function pageButton() {
            return <button className='btn btn-outline-success' onClick={connectPet}>Connect</button>
    }

    function pagePhone() {
            return (
                <div className='form-group mb-2'>
                    <label className='form-label'>Employee Phone to connect:</label>
                    <input
                        type='text'
                        placeholder='Enter Employee Phone to connect'
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
                                pagePhone()
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