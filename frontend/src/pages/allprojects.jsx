import React, { useEffect, useState } from "react";
import Projectlist from "../component/projectlist";

function Allprojects()  {
        const [tabProjects, setTabProjects] = useState([]);
        useEffect(() => {
            fetch("http://localhost:3000/project/findall")
              .then((res) => res.json())
              .then((data) => {
                console.log(data);
        
                
                setTabProjects(data);
              });
          }, []);
    return ( <Projectlist projects={tabProjects}> </Projectlist>  )
}
export default Allprojects;