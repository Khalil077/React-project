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



  const handleProjectAdded = (newProject) => {
    setTabProjects((prevProjects) => [...prevProjects, newProject]); 
  };
  const handleProjectDeleted = (projectId) => {
    setTabProjects((prevProjects) => prevProjects.filter(project => project.id !== projectId));
    fetchProjects();
  };
  
  useEffect(() => {
    fetchProjects();
  }, []);

  return (
    <div className="d-flex first">
  
      <Sidebar projects={tabProjects} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        

        <Route path="/add" element={<Addproject onProjectAdded={handleProjectAdded} />} />
        <Route path="/Projectdetail/:id" element={<Projectdetail handleProjectDeleted={handleProjectDeleted} />} />
        </Routes>
  
    
    </div>
  )
}

export default App
