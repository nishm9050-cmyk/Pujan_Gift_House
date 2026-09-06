import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Nav from './Components/Nav.jsx'
import Home from './Pages/Home.jsx'
import Cakes from './Pages/Products/Cakes.jsx'
import Gifts from './Pages/Products/Gifts.jsx'
import Accessories from './Pages/Products/Accessories.jsx'
import About from './Pages/About.jsx';
import Contact from './Pages/Contact.jsx';
import Cart from './Pages/Cart.jsx';
function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
    <Nav />
      <Routes>
      <Route exact path='/' element={<Home/>} />
      <Route exact path='/products/cakes' element={<Cakes/>} />
      <Route exact path='/products/gifts' element={<Gifts/>} />
      <Route exact path='/products/accessories' element={<Accessories />} />

      <Route exact path='/about' element={<About />} />
      <Route exact path='/contact' element={<Contact />} />
      <Route exact path='/contact' element={<Contact />} />
      <Route exact path='/cart' element={<Cart />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
