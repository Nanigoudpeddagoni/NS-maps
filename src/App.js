import './App.css';
import About from './components/About'; 
import Navbar from './components/Navbar';
import Services from './components/Services';
import Contact from './components/contact';
import Home from './components/Home';
import Maps from './mapsComponents/Maps.js';
import Map from './mapsComponents/Map.js'
import {BrowserRouter ,Routes,Route} from 'react-router-dom'
function App() {
  return (
    <div className='maindiv'>
      <BrowserRouter>
      <Navbar/>
      <Routes>     
          <Route path='/' element={<Home/>}></Route>
          <Route path='/About' element={<About/>}></Route>
          <Route path='/contact' element={<Contact/>}></Route>
          <Route path='/Services' element={<Services/>}></Route>
          <Route path='/Maps' element={<Maps/>}></Route>
          <Route path='/Map' element={<Map/>}></Route>
      </Routes>
      </BrowserRouter>
       
       
  
    </div>
  );
}

export default App;
