import React from "react";
import { Link, NavLink } from "react-router-dom";
import styles from "./sidebar.module.css";

function Sidebar() {
  return (
    <div className={styles.sidebar}>
      <h2 >YOUR PROJECTS</h2>
      <div> <Link to="add">
        <button className="px-3 py-2"> + Add Project</button>
        </Link> 
      </div>
 
    </div>
  );
}

export default Sidebar;