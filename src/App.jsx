import './App.css'
import ListEmployeeComponent from "./components/ListEmployeeComponent.jsx";
import HeaderComponent from "./components/HeaderComponent.jsx";
import FooterComponent from "./components/FooterComponent.jsx";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import EmployeeComponent from "./components/EmployeeComponent.jsx";
import BasicComponent from "./components/BasicComponent.jsx";
import ListPetComponent from "./components/ListPetComponent.jsx";
import PetComponent from "./components/PetComponent.jsx";

function App() {

  return (
    <>
      <BrowserRouter>
          <HeaderComponent/>
          <Routes>
                {/*//http://localhost:3000*/}
                <Route path='/' element={<BasicComponent/>}></Route>
                {/*//http://localhost:3000/employees*/}
                <Route path='/employee' element={<ListEmployeeComponent/>}></Route>
                {/*//http://localhost:3000/petstore*/}
                <Route path='/petstore' element={<ListPetComponent/>}></Route>
                {/*//http://localhost:3000/employees/saveEmployee*/}
                <Route path='/employee/saveEmployee' element={<EmployeeComponent/>}></Route>
                {/*//http://localhost:3000/employees/savePet*/}
                <Route path='/petstore/savePet' element={<PetComponent/>}></Route>
                {/*//http://localhost:3000/employees/updateEmployee/1*/}
                <Route path='/employee/updateEmployee/:phone' element={<EmployeeComponent/>}></Route>
                {/*//http://localhost:3000/employees/updatePet/1*/}
                <Route path='/petstore/updatePet/:phone' element={<PetComponent/>}></Route>
          </Routes>
          <FooterComponent/>
      </BrowserRouter>
    </>
  )
}

export default App
