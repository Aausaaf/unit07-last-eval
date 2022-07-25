import logo from './logo.svg';
import './App.css';
import Navbar from './component/navbar';
import Signup from './component/signup';
import Login from './component/Login';
import { Routes, Route } from "react-router-dom";
import Notes from './component/notes';
function App() {
  return (
    < >
      <Navbar></Navbar> 
     <Routes>
      <Route path="/" element={<Signup></Signup>}/>
      <Route path="/login" element={<Login></Login>}/>
      <Route path="/notes" element={<Notes></Notes>}/>
     </Routes>
    </>
  );
}

export default App;
