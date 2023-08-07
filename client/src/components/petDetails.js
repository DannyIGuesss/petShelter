import React, {useEffect,useState}from "react";
import axios from "axios";
import {useParams, useNavigate, Link} from 'react-router-dom'
import '../petDetails.css'

const Details = (props) => {
    const {id} = useParams()
    const navigate = useNavigate()
    const{removeFromDom} = props
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

    const deletePet = (e) => {
        axios.delete(`http://localhost:8000/api/deletePet/${id}`)
            // .then(removeFromDom(id)) Having this gave me an error and removing it fixed it so for now I will keep it in 
            .then(navigate('/'))
            .catch(err => console.log(err))
    }

    return(
        <div className="mainContainer">
            <nav className="d-flex justify-content-between">
                <h1>Pet Shelter</h1>
                <button className="backHome" onClick={() => navigate('/')}>Back Home</button>
            </nav>
            <div>
                <p className="header">Details about: {newPet.name}</p>
                <div className="main">
                    <h2 className="type">Pet Type: {newPet.pet}</h2>
                    <h2 className="des">Description: {newPet.description}</h2>
                    <div className="skill-cont">
                        <h2 className="skills">Skills:</h2>
                        <div className="skills-div">
                            <h2>{newPet.skillOne}</h2>
                            <h2>{newPet.skillTwo}</h2>
                            <h2>{newPet.skillThree}</h2>
                        </div>
                    </div>
                </div>
                <button onClick={() => deletePet()} className="adopt">Adopt {newPet.name}</button>
            </div>
        </div>
    )
}

export default Details;