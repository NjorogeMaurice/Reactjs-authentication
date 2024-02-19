import './App.css';
import './axios';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { Login } from './login';
import {Home} from "./home";
import {Navigation} from './navigation';
import {Logout} from './logout';
import { Register } from './register';
function App() {
    return( 
      <BrowserRouter>
        <Navigation></Navigation>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/logout" element={<Logout/>}/>
          <Route path="/register" element={<Register/>}/>
        </Routes>
      </BrowserRouter>);
}
export default App;