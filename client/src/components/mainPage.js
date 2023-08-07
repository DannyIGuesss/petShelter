import {Link,useNavigate} from "react-router-dom"
import axios from 'axios'
import React, {useEffect,useState} from "react"
import '../mainPage.css'

const MainPage = (props) => {

const {pets, setPets} = props
const [newPet, setNewPet] = useState([])
const navigate = useNavigate()

useEffect(() => {
    axios.get('http://localhost:8000/api/pets')
        .then( allPets => {
            setNewPet(allPets.data)

        })
        .catch(err => {
            console.log(err);
        })
})



    return (
        <div className="main-container">
            <nav className="nav-bar">
                <p>Pet Shelter</p>
                {/* <Link to={'/petForm'} className='formLink'>add a pet to the shelter</Link> */}
                <button onClick={() => navigate('/petForm')} className="addPet">Add a pet to the shelter</button>
            </nav>
            <div className="bodyContainer">
                <h2>These pets are looking for a good home</h2>
                {
                    <table className="tableBox">
                        <tbody className="row">
                            <tr className="top-row">
                                <th className="rowOne">Name</th>
                                <th className="rowOne">Type</th>
                                <th className="rowOne">Actions</th>
                            </tr>

                            {newPet.map((pet, index) => {
                                return (
                                    <tr key={index} className="rowNew">
                                        <th className="rowTwo petName">{pet.name}</th>
                                        <th className="rowTwo">{pet.pet}</th>
                                        <th className="link"><Link to={`/pets/${pet._id}`} className="ml-2">Details</Link>
                                            <Link to={`/updatePets/${pet._id}`}>Edit</Link>
                                        </th>
                                    </tr>
                                )
                            })}
                        </tbody>
                        
                    </table>
                }
            </div>

        </div>
    )
}

export default MainPage