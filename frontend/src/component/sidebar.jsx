import React from "react";
import { Link, NavLink } from "react-router-dom";
import styles from "./sidebar.module.css";
import Projectlist from "./projectlist";
function Sidebar({ projects })  {
  return (
    <div className={styles.sidebar}>
      <h2 >YOUR PROJECTS</h2>
      <div> <Link to="add">
        <button className="px-3 py-2 add"> + Add Project</button>
        </Link> 
     
      </div>

      <Projectlist projects={projects}> </Projectlist>
    </div>
  );
}

export default Sidebar;