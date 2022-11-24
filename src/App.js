
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Login from './Pages/Login/Login';
import About from './Pages/About/About';
import Contact from './Pages/Contact/Contact';
import Error from './Pages/Error/Error';
import Header from './Pages/Header/Header';
import Home from './Pages/Home/Home';
import Coxbazar from './Pages/Home/Cities/Coxbazar/Coxbazar';
import Dhaka from './Pages/Home/Cities/Dhaka/Dhaka';
import Ctg from './Pages/Home/Cities/Ctg/Ctg';
import Kuakata from './Pages/Home/Cities/Kuakata/Kuakata';
import Cities from './Pages/Home/Cities/Cities';
import SingleHotelDetails from './Pages/SingleHotelDetails/SingleHotelDetails';
import Bookings from './Pages/Bookings/Bookings';
import Signup from './Pages/Signup/Signup';
import RequireAuth from './Pages/RequireAuth/RequireAuth';

function App() {
  return (
    <div className=" main-div">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>} ></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/contact' element={<Contact></Contact>}></Route>
        <Route path='/cities' element={<Cities></Cities>}></Route>
        <Route path='/cities/:hotelId' element={<SingleHotelDetails></SingleHotelDetails>}></Route>
        <Route path='/coxbazar' element={<Coxbazar></Coxbazar>}></Route>
        <Route path='/dhaka' element={<Dhaka></Dhaka>}></Route>
        <Route path='/kuakata' element={<Kuakata></Kuakata>}></Route>
        <Route path='/ctg' element={<Ctg></Ctg>}></Route>
        <Route path='/signup' element={<Signup></Signup>}></Route>
        <Route path='/bookings' element={<RequireAuth><Bookings></Bookings></RequireAuth>}></Route>
        <Route path='*' element={<Error></Error>}></Route>
      </Routes>
    </div>
  );
}

export default App;
