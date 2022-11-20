
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Login from './Pages/Login/Login';
import About from './Pages/About/About';
import Contact from './Pages/Contact/Contact';
import Error from './Pages/Error/Error';
import Header from './Pages/Header/Header';
import Home from './Pages/Home/Home';

function App() {
  return (
    <div className="App main-div">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>} ></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/contact' element={<Contact></Contact>}></Route>
        <Route path='*' element={<Error></Error>}></Route>
      </Routes>
    </div>
  );
}

export default App;
