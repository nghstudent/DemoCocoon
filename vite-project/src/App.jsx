import './App.css'
import ProductIntro from './components/ProductIntro/ProductIntro'
import Home from './pages/Home/Home'
import Home2 from './pages/Home/Home2'
import Home3 from './pages/Home/Home3'
import Home4 from './pages/Home/Home4'
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {

  return (

    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/product' element={<ProductIntro/>} />
        <Route path='/home2' element={<Home2/>} />
      </Routes>
    </BrowserRouter>

  )
}

export default App