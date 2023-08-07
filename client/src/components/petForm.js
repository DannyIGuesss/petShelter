import React, {useState, useEffect} from "react";
import axios from "axios";
import {Link,useNavigate} from "react-router-dom"
import '../petForm.css'


const PetForm = (props) => {
    const navigate = useNavigate()
    const {pets, setPets} = props
    const [newPets, setNewPets] = useState({
        name: '',
        pet: '',
        description: '',
        skillOne: '',
        skillTwo: '',
        skillThree: ''
    })

    const inputChangeHandler = (e) => {
        console.log(e.target.value);
        setNewPets({...newPets, [e.target.name]: e.target.value})
    }
    


    const submitHandler = (e) => {
        e.preventDefault() 
        axios.post('http://localhost:8000/api/createPet', newPets)
            .then(res => {
                setPets(...pets, res.data)
            })
            .catch(err => {
                console.log(err);
            })
        
        setNewPets({
        name: '',
        pet: '',
        description: '',
        skillOne: '',
        skillTwo: '',
        skillThree: ''
        })

        navigate('/')

    }

    return(
        <div className="main-container">
            <nav className="nav-bar">
                <h1>Pet Shelter</h1>
                <button className='backHome' onClick={() => navigate('/')}>Back Home</button>
            </nav>
            <form onSubmit={submitHandler}>
                <h2>Know a pet needing a home?</h2>
                <div className="box">
                    <div className="box-left">
                        <label>Name:</label>
                        <input type='text' onChange={inputChangeHandler} name='name' value={newPets.name} />

                        <label>Pet Type:</label>
                        <input type='text' onChange={inputChangeHandler} name='pet' value={newPets.pet} />

                        <label>Pet Description:</label>
                        <input type='text' onChange={inputChangeHandler} name='description' value={newPets.description} />
                        <button >Add Pet</button>
                    </div>
                    <div className="box-right">
                        <p>Skills (Optionial)</p>

                        <label>Skills 1:</label>
                        <input type='text'onChange={inputChangeHandler} name='skillOne' value={newPets.skillOne}/>

                        <label>Skills 2:</label>
                        <input type='text'onChange={inputChangeHandler} name='skillTwo' value={newPets.skillTwo} />

                        <label>Skills 3:</label>
                        <input type='text'onChange={inputChangeHandler} name='skillThree' value={newPets.skillThree} />

                    </div>
                </div>
                
            </form>
        </div>
    )
}

export default PetForm