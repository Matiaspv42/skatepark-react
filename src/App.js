import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { createContext, useState } from 'react';
import Navbar from './components/Navbar';
import Administrador from './views/Administrador';
import DatosPerfil from './views/DatosPerfil';
import Home from './views/Home';
import Login from './views/Login';
import Registro from './views/Registro';
import AuthContext from './AuthContext';



export default function App() {
  const fakeAuth = () =>
  new Promise((resolve) => {
    setTimeout(() => resolve('2342f2f1d131rf12'), 250);
  });
  const [token, setToken] = useState('123');
  const [login, setLogin] = useState(false)
  return (
    <div className='App'>
      <AuthContext.Provider value={{token, setToken, login, setLogin}}>
      <BrowserRouter>
        <Navbar/>
          <Routes>
              <Route path='/' element={<Home/>} />
              <Route path='/login' element={<Login />} />
              <Route path='/register' element={<Registro/>} />
              {login && <Route path='/admin' element={<Administrador/>} />}
              {login && <Route path='/profile' element={<DatosPerfil/>} />}
          </Routes>
      </BrowserRouter>
    </AuthContext.Provider>
    </div>
  );
}
