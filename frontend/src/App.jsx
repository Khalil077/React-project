import './App.css'
import Sidebar from './component/sidebar'
import { Route, Routes } from "react-router";
import Home from './pages/home';
import Addproject from './pages/addproject';
import React, { useEffect, useState } from "react";
import Projectdetail from './component/projectdetail';
function App() {
  const [tabProjects, setTabProjects] = useState([]);

  const fetchProjects = () => {
    fetch("http://localhost:3000/project/findall")
      .then((res) => res.json())
      .then((data) => {
        setTabProjects(data); 
      });
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  const handleProjectAdded = (newProject) => {
    setTabProjects((prevProjects) => [...prevProjects, newProject]); 
  };

  return (
    <div className="d-flex first">
  
      <Sidebar projects={tabProjects} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        

        <Route path="/add" element={<Addproject onProjectAdded={handleProjectAdded} />} />
        <Route path="/Projectdetail/:id" element={<Projectdetail />} />
      </Routes>
  
    
    </div>
  )
}

export default App
