import styles from './projectitem.module.css'
import { Link, NavLink } from "react-router-dom";

function Projectitem(props) { 
    return      <Link to={`/projectdetail/${props.oneproject.id}`}>
    <li className={styles.li}>
        <button className={`py-1  px-2 button ${styles.button}`}> {props.oneproject.title} </button>
    </li>
    </Link>
}
export default Projectitem;