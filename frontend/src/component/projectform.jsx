import React, { useEffect, useRef, useState } from "react";
import styles from "./projectform.module.css"
import { Link } from 'react-router-dom'; 
import { useNavigate } from "react-router-dom";

function Projectform({ onProjectAdded }) {
    const refTitle = useRef("");
    const refDescription = useRef("");
    const refDate = useRef("");
    const navigate = useNavigate()
      function submitHandler(e) {
        e.preventDefault();
       
        const newProject = {
            title: refTitle.current.value,
            description: refDescription.current.value,
            date: refDate.current.value,
           
          };
          console.log(newProject)
          if (newProject.title && newProject.description && newProject.date) {
            fetch("http://localhost:3000/project/add", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                  },
                body: JSON.stringify(newProject),
             
              })
              .then((res) => res.json()) 
              .then((data) => {
                onProjectAdded(data);
                navigate("/home");
                
                console.log("Response from server:", data); 
             
              })
                .catch((err) => {
                  alert("Erreur lors de l'ajout d'un project...");
                });
          } } 
 


        return ( <form onSubmit={submitHandler}>
        <div className= {styles.form}>
           <menu className={`d-flex  mt-4 ${styles.menu}`}>
                    <Link to="/home">
                <li> 
                    <button className={`py-2 ${styles.cancel}`}> Cancel </button>
                </li>
                </Link>
                <li>
                    <button className={`py-2 ${styles.save}`} type="submit">  Save </button>
                </li>
           </menu>
           <div>
                <p className={`gap-1  ${styles.title}`}>
                    <label  className={` ${styles.label}`}> Title </label>
                    <input type="text"  ref={refTitle}  className={`p-1  ${styles.input}`} />
                </p>
                <p>
                <label  className={` ${styles.label}`}> Description </label>
                <textarea type="text" ref={refDescription}  className={`p-1  ${styles.input}`} />
                </p>
                <p className={`gap-1  ${styles.title}`}>
                    <label  className={` ${styles.label}`}> Due Date </label>
                    <input type="date"  ref={refDate} className={`p-1  ${styles.input}`} />
                </p>
           </div>
        </div>
        </form>



        )
}
export default Projectform;