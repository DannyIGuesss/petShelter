import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import { useState } from 'react';
import MainPage from './components/mainPage';
import PetForm from './components/petForm';
import Details from './components/petDetails';
import UpdatePet from './components/updatePet';

function App() {
  const [pets, setPets] = useState([]);

  const removeFromDom = id => {
    setPets(pets.filter(pet => pet._id !== id))
}

  return (
    <div className='app'>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<MainPage pets = {pets} setPets = {setPets}/>}  />
            <Route path='/petForm' element={<PetForm pets = {pets} setPets = {setPets}/>} />
            <Route path='/pets/:id' element={<Details removeFromDom={removeFromDom}/>} />
            <Route path='/updatePets/:id' element={<UpdatePet/>} />
          </Routes>
        </BrowserRouter>

    </div>
  );
}

export default App;