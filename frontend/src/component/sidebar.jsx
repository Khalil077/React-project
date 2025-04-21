import React from "react";
import { Link, NavLink } from "react-router-dom";
import styles from "./sidebar.module.css";
import Allprojects from "../pages/allprojects";

function Sidebar() {
  return (
    <div className={styles.sidebar}>
      <h2 >YOUR PROJECTS</h2>
      <div> <Link to="add">
        <button className="px-3 py-2 add"> + Add Project</button>
        </Link> 
     
      </div>
      <Allprojects> </Allprojects>
    </div>
  );
}

export default Sidebar;