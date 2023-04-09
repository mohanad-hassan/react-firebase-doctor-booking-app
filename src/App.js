import { Route,Routes,BrowserRouter } from "react-router-dom";

import Home from './Pages/Home'
import Login from './Pages/Login'
import Register from './Pages/Register'
import ProtectedRoute from './components/ProtectdRoute'
import Profile from './Pages/Profile'
import DoctorForm from "./Pages/DoctorForm/DoctorForm";
import Spinner from "./components/Spinner";
import { useSelector } from "react-redux";

function App() {
const {loading } = useSelector((state) => {return state.loader })
  return (

  <BrowserRouter>
    <div className="App">
     {loading && <Spinner/>}
 <Routes>
  <Route path ='/login' element={<Login/>}/>
  <Route path ='/register' element={<Register/>}/>
  <Route path ='/' element={<ProtectedRoute> <Home/>  </ProtectedRoute>}/>
  <Route path ='/profile' element={<ProtectedRoute> <Profile/>  </ProtectedRoute>}/>
  <Route path ='/apply-doctor' element={<ProtectedRoute> <DoctorForm/>  </ProtectedRoute>}/>
 </Routes>
     
    </div>
    </BrowserRouter>
  );
}



export default App;