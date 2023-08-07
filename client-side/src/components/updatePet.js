import React, {useState,useEffect} from "react";
import axios from "axios";
import {useNavigate, useParams,Link,Navigate} from "react-router-dom"
import '../updatePet.css'

const UpdatePet = (props) => {
    const navigate = useNavigate()
    const {id} = useParams();
    const [newPet, setNewPet] = useState({
        name: '',
        pet: '',
        description: '',
        skillOne: '',
        skillTwo: '',
        skillThree: ''
    })

    useEffect( () => {
        axios.get(`http://localhost:8000/api/pets/${id}`)
            .then(res => {
                setNewPet(res.data)
            })
            .catch(err => {
                console.log(err);
            })
    },[])

    const inputChangeHandler = (e) => {
        setNewPet({...newPet, [e.target.name]: e.target.value})
    }

    const submitHandler = (e) => {
        e.preventDefault()

            axios.put(`http://localhost:8000/api/updatePet/${id}`, newPet)
                
                .then(res => {
                    navigate("/")
                })
                .catch(err => {
                    console.log(err);
                })
    }


    return (
        <div className="mainContainer">
            <nav >
                <h1>Pet Shelter</h1>
                <button className="backHome" onClick={() => navigate('/')}>Back Home</button>
            </nav>
            <form onSubmit={submitHandler}>
                <h2>Edit: {newPet.name}</h2>
                <div className="box">
                    <div className="box-left">
                        <label>Pet Name:</label>
                        <input type='text' onChange={inputChangeHandler} name='name' value={newPet.name} />

                        <label>Pet Type:</label>
                        <input type='text' onChange={inputChangeHandler} name='pet' value={newPet.pet} />

                        <label>Pet Description:</label>
                        <input type='text' onChange={inputChangeHandler} name='description' value={newPet.description} />

                        <button>Edit Pet</button>
                    </div>
                    <div className="box-right">
                        <p>Skills (Optionial)</p>

                        <label>Skills 1:</label>
                        <input type='text'onChange={inputChangeHandler} name='skillOne' value={newPet.skillOne}/>

                        <label>Skills 2:</label>
                        <input type='text'onChange={inputChangeHandler} name='skillTwo' value={newPet.skillTwo} />

                        <label>Skills 3:</label>
                        <input type='text'onChange={inputChangeHandler} name='skillThree' value={newPet.skillThree} />

                    </div>
                </div>
            </form>
        </div>
    )
}

export default UpdatePet