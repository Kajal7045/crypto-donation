import React from 'react'
import "./App.css"
import {BrowserRouter as Router , Route , Routes , BrowserRouter} from "react-router-dom"
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Home from "./components/Home.jsx"
import About from "./components/About.jsx"
import Contact from "./components/Contact.jsx"
import Donate from "./components/Donate.jsx"
import NotFound from "./components/NotFound.jsx"
import Footer from "./components/Footer.jsx"
import Navbar from "./components/Navbar.jsx"

function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path = '/' element={<Home/>}></Route>
        <Route path = '/about' element ={<About/>}> </Route>
        <Route path ='/contact' element={<Contact/>} > </Route>
        <Route path='/donate' element= {<Donate/>}> </Route>
        <Route path='*' element = {<NotFound/>}></Route>
        
      </Routes>
      <Footer/>
      <ToastContainer postion="top-center"/>

    </Router>
  )
}

export default App