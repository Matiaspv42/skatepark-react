import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Navbar from './components/Navbar';
import Administrador from './views/Administrador';
import DatosPerfil from './views/DatosPerfil';
import Home from './views/Home';
import Login from './views/Login';
import Registro from './views/Registro';

export default function App() {
  return (
    <BrowserRouter>
    <Navbar/>
      <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/login' element={<Login/>} />
          <Route path='/register' element={<Registro/>} />
          <Route path='/admin' element={<Administrador/>} />
          <Route path='/profile' element={<DatosPerfil/>} />
      </Routes>
    </BrowserRouter>
  );
}
