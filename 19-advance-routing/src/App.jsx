import React from 'react'
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Product from "./pages/Product";
import Men from './pages/Men';
import Women from './pages/Women';
import NotFound from './pages/NotFound';
import Courses from './pages/Courses';
import CoursesDetails from './pages/CoursesDetails';
import Navbar2 from './components/Navbar2';



const App = () => {
  return (
    <div className='a'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />}/> 
        <Route path='/product' element={<Product />}> 
          <Route path='men' element={<Men />}/> 
          <Route path='women' element={<Women />}/>
        </ Route >
        <Route path='*' element={<NotFound />}/>
        <Route path='/courses' element={<Courses />}/>
        <Route path='/courses/:courseId' element={<CoursesDetails />}/>
      </Routes>
      <Navbar2 /> 
      <Footer />
    </div>
  )
}

export default App