import React from "react";
import { NavLink } from "react-router-dom";
import styles from './projectitem.module.css';

function Projectitem(props) {
    return (
        <li className={styles.li}>
          <NavLink  to={`/projectdetail/${props.oneproject.id}`}>
{
    ({isActive}) => {
        console.log(isActive);
        
        return   <button className={`py-1 px-2 ${styles.button} ${isActive ? styles.activeButton : null}`}>
        {props.oneproject.title}
    </button>
    }
}
</NavLink>
        </li>
    );
}

export default Projectitem;
