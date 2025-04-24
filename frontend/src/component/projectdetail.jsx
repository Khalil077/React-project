import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import styles from './projectdetail.module.css'
import TaskList from "./TaskList";
function Projectdetail({ handleProjectDeleted }) {  // Correct prop name
    const { id } = useParams();  
    const [project, setProject] = useState(null);
    function formatDate(dateString) {
        const date = new Date(dateString); 
        return date.toLocaleDateString();  
      }
    
    useEffect(() => {
        fetch(`http://localhost:3000/project/findbyid/${id}`)
            .then((res) => res.json())
            .then((data) => {
                setProject(data);  
                console.log(data)
            })
            .catch((err) => {
                console.error("Error fetching project:", err);
            });
    }, [id] //useeffect  mayekhdem kn ki yetbadl el id 
    );

    //delete function of projects : 
    const navigate = useNavigate(); 
    const handleDelete = () => {
        fetch(`http://localhost:3000/project/delete/${id}`, {
            method: "DELETE",
        })
            .then((res) => {
                if (res.ok) {
                    
                    handleProjectDeleted(id); 
                    navigate('/home');


                } else {
                    alert('Error deleting the project.');
                }
            })
            .catch((err) => {
                console.error('Error deleting project:', err);
                alert('Error deleting the project.');
            });
    };

    

    if(project) {
        const formattedDate = formatDate(project.date);
        return ( 
            <div className={` ${styles.d1}`}>
                <header className={`pb-4 ${styles.header}`}>
                    <div className='d-flex '>
                        <h1> {project.title} </h1>
                        <button className={`px-4 py-2 ${styles.button}`} onClick={handleDelete} > Delete</button>
                    </div>
                    <p className={`mb-4 ${styles.date}`}> {formattedDate}</p>
                    <p className={`mb-4 ${styles.title}`}>  {project.title} </p>
                   
                </header>  
                <div className={` ${styles.TasksContainer}`}>
                    <h2 className={` ${styles.tasks}`}> 
                        Tasks
                    </h2>
                    <div className={`d-flex  ${styles.TasksContainer}`}>
                    <input type="text" className={`p-1  ${styles.input}` }/>
                    <button className={`px-4 py-2 ${styles.button}`}> Add</button>
                    </div>
                    {project.ListeTasks.length===0 ?(<p className="my-3">
                    No Tasks
                    </p>) :<TaskList tasks={project.ListeTasks} projectId={id}  setProject={setProject}/>       
                    }
                    {console.log(project.ListeTasks)}
                </div>
    
            </div>
        )

    }

   
 } 

export default Projectdetail
