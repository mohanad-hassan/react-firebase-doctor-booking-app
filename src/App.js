import { Route,Routes,BrowserRouter } from "react-router-dom";

import Home from './Pages/Home'
import Login from './Pages/Login'
import Register from './Pages/Register'
import ProtectedRoute from './components/ProtectdRoute'
import Profile from './Pages/Profile'


function App() {

  return (

  <BrowserRouter>
    <div className="App">
 <Routes>
  <Route path ='/login' element={<Login/>}/>
  <Route path ='/register' element={<Register/>}/>
  <Route path ='/' element={<ProtectedRoute> <Home/>  </ProtectedRoute>}/>
  <Route path ='/profile' element={<ProtectedRoute> <Profile/>  </ProtectedRoute>}/>
 </Routes>
     
    </div>
    </BrowserRouter>
  );
}



export default App;