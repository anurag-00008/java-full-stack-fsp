//import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav';
import "bootstrap/dist/css/bootstrap.css";
import FoodList from './components/FoodList';
import DeleteFood from './components/DeleteFood';
import UpdateFood from './components/UpdateFood';
import SearchFood from './components/SearchFood';
import Contact from './components/Contact';
import AddFood from './components/AddFood';
import { Routes,Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <h2>FOOD APP</h2>
      <Nav/>
      <Routes>
        <Route path="/addfood" element={<AddFood/>}/>
        <Route path="/foodlist" element={<FoodList/>}/>
        <Route path="/delfood" element={<DeleteFood/>}/>
        <Route path="/updfood" element={<UpdateFood/>}/>
        <Route path="/searchfood" element={<SearchFood/>}/>
        <Route path="/contactus" element={<Contact/>}/>
      </Routes>
    </div>
  );
}

export default App;
