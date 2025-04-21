import './App.css'
import Sidebar from './component/sidebar'
import { Route, Routes } from "react-router";
import Home from './pages/home';
import Addproject from './pages/addproject';
function App() {

  return (
    <div className="d-flex first">
  
      <Sidebar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />

        <Route path="/add" element={<Addproject />} />
      </Routes>
  
    
    </div>
  )
}

export default App
