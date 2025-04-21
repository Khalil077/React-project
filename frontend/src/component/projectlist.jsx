import Projectitem from "./projectitem";


function Projectlist(props) { 
    return (
    
        <ol className='list'>
            <div className="row">
                {props.projects.map((element) => {
               
                    
                    return <Projectitem key={element.id} oneproject={element}></Projectitem>
    
    })}
            </div>
        </ol>
        
      )
}
export default Projectlist;