import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { createContext, useState } from 'react';
import Navbar from './components/Navbar';
import Administrador from './views/Administrador';
import DatosPerfil from './views/DatosPerfil';
import Home from './views/Home';
import Login from './views/Login';
import Registro from './views/Registro';


// const AuthContext = createContext()

export default function App() {
  // const fakeAuth = () =>
  // new Promise((resolve) => {
  //   setTimeout(() => resolve('2342f2f1d131rf12'), 250);
  // });
  // const [token, setToken] = useState(null);
  // const handleLogin = async () => {
  //   // const token = await fakeAuth();
  //   const token = 132
  //   setToken(token);
  // };
  return (
    <div className='App'>
      {/* <AuthContext.Provider value={token}> */}
      <BrowserRouter>
        <Navbar/>
          <Routes>
              <Route path='/' element={<Home/>} />
              <Route path='/login' element={<Login 
              // onLogin={handleLogin}
              />} />
              <Route path='/register' element={<Registro/>} />
              <Route path='/admin' element={<Administrador/>} />
              <Route path='/profile' element={<DatosPerfil/>} />
          </Routes>
      </BrowserRouter>
    {/* </AuthContext.Provider> */}
    </div>
  );
}
