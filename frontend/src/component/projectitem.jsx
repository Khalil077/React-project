import styles from './projectitem.module.css'

function Projectitem(props) { 
    return <li className={styles.li}>
        <button className={`py-1  px-2 button ${styles.button}`}> {props.oneproject.title} </button>
    </li>
}
export default Projectitem;