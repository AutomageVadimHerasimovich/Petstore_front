import React, {useEffect, useState} from "react";
import { deletePet, listPets} from "../services/PetService.js";
import {useNavigate} from "react-router-dom";

const ListPetComponent = () => {

    const [pets, setPets] = useState([])

    const navigator = useNavigate();

    useEffect(() => {
        getAllPets();
    }, [])

    function getAllPets() {
        listPets().then((response) => {
            setPets(response.data)
        }).catch((error) => {
            console.error(error);
        })
    }

    function addNewPet() {
        navigator('/petstore/savePet');
    }

    function updatePet(phone) {
        navigator(`/petstore/updatePet/${phone}`);
    }

    function removePet(phone) {
        console.log("Pet deleted with Phone: " + phone);

        deletePet(phone).then(() => {
            getAllPets();
            navigator('/petstore');
        }).catch((error) => {
            console.error(error);
        })
    }

    function connectionPetToEmployee(phone) {
        navigator(`/petstore/connectPetToEmployee/${phone}`);
    }

    return (
        <div className='container'>
            <h2 className="text-center basic-component-container basic-component-text-box">List of Pets</h2>
            <button className="btn btn-primary mb-2" onClick={addNewPet}>Add Pet</button>
            <table className='table table-striped table-bordered'>
                    <thead>
                        <tr>
                            <th>Pet Id</th>
                            <th>Pet Name</th>
                            <th>Pet Phone</th>
                            <th>Pet Url</th>
                            <th>Pet Age</th>
                            <th>Pet Status</th>
                            <th className="actions-column">Actions</th>
                        </tr>
                    </thead>
                <tbody>
                        {
                            pets.map(pet =>
                                <tr key={pet.id}>
                                    <td>{pet.id}</td>
                                    <td>{pet.name}</td>
                                    <td>{pet.phone}</td>
                                    <td>{pet.url}</td>
                                    <td>{pet.age}</td>
                                    <td>{pet.status}</td>
                                    <td>
                                        <button className="btn btn-info" onClick={() => updatePet(pet.phone)}>Update</button>
                                        <button className="btn btn-danger" onClick={() => removePet(pet.phone)}
                                                style={{marginLeft: "10px"}}
                                        >Delete</button>
                                        <button className="btn btn-success" onClick={() => connectionPetToEmployee(pet.phone)}
                                                style={{marginLeft: "10px"}}
                                        >Connect</button>

                                    </td>
                                </tr>
                            )
                        }
                </tbody>
            </table>
        </div>
    )
}

export default ListPetComponent;