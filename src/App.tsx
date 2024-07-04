import React from "react";
import { BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Clothing from "./pages/Clothing";
import Bestsellers from "./pages/Bestsellers";
const App = () => {
  return (<div className="app"> 
  <Router>
  <Navbar/>
  <Routes>
    <Route path ='/' element={<Home/>}/>
    <Route path ='/bestsellers' element={<Bestsellers/>}/>
    <Route path ='/clothing' element={<Clothing/>}/>
  </Routes>
  </Router> 
  </div>);
};

export default App;
