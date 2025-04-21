
import styles from "./projectform.module.css"
import { Link } from 'react-router-dom'; 

function Projectform ( { }) { 
        return ( <div className= {styles.form}>
           <menu className={`d-flex  mt-4 ${styles.menu}`}>
                    <Link to="/home">
                <li> 
                    <button className={`py-2 ${styles.cancel}`}> Cancel </button>
                </li>
                </Link>
                <li>
                    <button className={`py-2 ${styles.save}`}> Save </button>
                </li>
           </menu>
           <div>
                <p className={`gap-1  ${styles.title}`}>
                    <label  className={` ${styles.label}`}> Title </label>
                    <input type="text"  className={`p-1  ${styles.input}`} />
                </p>
                <p>
                <label  className={` ${styles.label}`}> Description </label>
                <textarea type="text"  className={`p-1  ${styles.input}`} />
                </p>
                <p className={`gap-1  ${styles.title}`}>
                    <label  className={` ${styles.label}`}> Due Date </label>
                    <input type="date"  className={`p-1  ${styles.input}`} />
                </p>
           </div>
        </div>



        )
}
export default Projectform;