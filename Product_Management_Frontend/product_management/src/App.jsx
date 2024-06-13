import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Navbar } from './components/Navbar'
import { Routes,Route } from 'react-router'
import AddProduct from './components/AddProduct'
import Home from './components/Home'
import EditProduct from './components/EditProduct'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <Router> */}

      <Navbar />
      <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/addProduct" element={<AddProduct/>}></Route>
          <Route path='/editProduct/:id' element={<EditProduct/>}></Route>
      </Routes>
      
      {/* </Router> */}
    </>
  )
}

export default App
