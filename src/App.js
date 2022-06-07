import { Route, Routes } from 'react-router-dom';
import Navbar  from './Pages/Shared/Navbar'
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
     <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/" element={<Login />}/>
    </Routes>
    </div>
  );
}

export default App;
