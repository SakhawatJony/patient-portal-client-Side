import { Route, Routes } from 'react-router-dom';
import Navbar  from './Pages/Shared/Navbar'
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import Appointment from './Pages/Appointment/Appointment';

function App() {
  return (
    <div className="px-12">
      <Navbar></Navbar>
     <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/" element={<Login />}/>
      <Route path="/appointment" element={<Appointment />}/>
    </Routes>
    </div>
  );
}

export default App;
