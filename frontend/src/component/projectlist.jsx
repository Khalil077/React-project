import Projectitem from "./projectitem";
import styles from "./projectlist.module.css"

function Projectlist(props) { 
    return (
    
        <ol className={styles.list}>
            <div className="row">
                {props.projects.map((element) => {
               
                    
                    return <Projectitem key={element.id} oneproject={element}></Projectitem>
    
    })}
            </div>
        </ol>
        
      )
}
export default Projectlist;