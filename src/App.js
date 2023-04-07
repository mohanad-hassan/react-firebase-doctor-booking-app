import { Route,Routes,BrowserRouter } from "react-router-dom";

import Home from './Pages/Home'
import Login from './Pages/Login'
import Register from './Pages/Register'


function App() {

  return (

  <BrowserRouter>
    <div className="App">
      STARTPAGE
 <Routes>
  <Route path ='/login' element={<Login/>}/>
  <Route path ='/register' element={<Register/>}/>
  <Route path ='/' element={<Home/>}/>
 </Routes>
     
    </div>
    </BrowserRouter>
  );
}



export default App;