import React from 'react'
import style from './home.module.css'
import { Link } from 'react-router-dom'
function Home() {
  return (
    <div className={`text-center  ${style.c1}`}>
        <img className="mx-auto" src="projectimg.png" alt="" />
        <h2 className="mt-4 ">sasa</h2>
        <p className="mb-4"> Select a project or get started with a new one</p>
        <p > 
        <Link  to="/add">
            <button className={`px-4 py-2 ${style.button}`}> Create new project</button>
            </Link>
        </p>
    </div>
  )
}

export default Home
