import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Home from './pages/home'
import Impresoras from './pages/Impresoras'
import Laptops from './pages/Laptops'
import Monitores from './pages/Monitores'
import Perifericos from './pages/Perifericos'
import Procesadores from './pages/Procesadores'
import Producto from './pages/Producto'
import TerminosyCondiciones from './pages/TerminosyCondiciones'
import Tintas from './pages/Tintas'
import Garantia from './pages/garantia'
import Header from './components/Header'
import Mapfacebook from "./components/Mapfacebook";
import Footer from "./components/Footer";
import CategoryNav from './components/CategoryNav'

const App = () => {
  return (
    <div className='font-sans'>
      <Header />
      <CategoryNav />
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/categorias/impresoras' element={<Impresoras/>}/>
        <Route path='/categorias/laptops' element={<Laptops/>}/>
        <Route path='/categorias/monitores' element={<Monitores/>}/>
        <Route path='/categorias/perifericos' element={<Perifericos/>}/>
        <Route path='/categorias/procesadores' element={<Procesadores/>}/>
        <Route path='/terminos-y-condiciones' element={<TerminosyCondiciones/>}/>
        <Route path='/categorias/tintas' element={<Tintas/>}/>
        <Route path='/product/:id' element={<Producto/>}/>
        <Route path='/garantia' element={<Garantia/>}/>
      </Routes>
      <Mapfacebook />
      <Footer />
    </div>
  )
}

export default App