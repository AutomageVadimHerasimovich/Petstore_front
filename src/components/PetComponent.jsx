import React, {useEffect, useState} from "react";
import {createPet, getPet, updatePet} from "../services/PetService.js";
import {useNavigate, useParams} from "react-router-dom";

const PetComponent = () => {

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

    function savePet(event) {
        event.preventDefault();

        if (validateForm()) {
            const pet = {name, phone, status, age, url: url.trim() !== '' ? url : 'Without Picture'}
            console.log(pet)

            createPet(pet).then((response) => {
                console.log(response.data);
                navigator('/petstore');
            })
        }
    }

    function redactPet(event) {
        event.preventDefault();

        if (validateForm()) {
            const pet = {name, phone, status, age, url}
            console.log(pet)

            updatePet(pet).then((response) => {
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

        if (age.trim()){
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
        if (phoneParam) {
            return <h2 className="text-center">Update Pet</h2>
        } else {
            return <h2 className="text-center">Add Pet</h2>
        }
    }

    function pageButton() {
        if (phoneParam) {
            return <button className='btn btn-info' onClick={redactPet}>Update</button>
        } else {
            return <button className='btn btn-success' onClick={savePet}>Submit</button>
        }
    }

    function pageIfPhone() {
        if (!phoneParam) {
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
            ) } else {
            useEffect(() => {
                setPhone(phoneParam);
            })
            return <div></div>
        }
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
                            <div className='form-group mb-2'>
                                <label className='form-label'>Name:</label>
                                <input
                                    type='text'
                                    placeholder='Enter Pet Name'
                                    name='name'
                                    value={name}
                                    className={'form-control' + (errors.name ? ' is-invalid' : '')}
                                    onChange={(event) => setName(event.target.value)}>
                                </input>
                                {errors.firstName && <div className='invalid-feedback'> { errors.firstName} </div>}
                            </div>
                            {
                            pageIfPhone()
                            }
                            <div className='form-group mb-2'>
                                <label className='form-label'>Status:</label>
                                <input
                                    type='text'
                                    placeholder='Enter Pet Status'
                                    name='status'
                                    value={status}
                                    className={'form-control' + (errors.status ? ' is-invalid' : '')}
                                    onChange={(event) => setStatus(event.target.value)}>
                                </input>
                                {errors.status && <div className='invalid-feedback'> { errors.status} </div>}
                            </div>

                            <div className='form-group mb-2'>
                                <label className='form-label'>Age:</label>
                                <input
                                    type='text'
                                    placeholder='Enter Pet Age'
                                    name='age'
                                    value={age}
                                    className={'form-control' + (errors.age ? ' is-invalid' : '')}
                                    onChange={(event) => setAge(event.target.value)}>
                                </input>
                                {errors.age && <div className='invalid-feedback'> { errors.age} </div>}
                            </div>
                                {
                                    pageButton()
                                }
                            {/*<button className='btn btn-success' onClick={saveEmployee}>Submit</button>*/}
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PetComponent;