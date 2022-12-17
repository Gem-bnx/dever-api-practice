import React from 'react'
import {Link} from "react-router-dom"
function Home() {
  return (
    <div className='container'>
        <Link className="btn" to={'/input'}><button>INPUT</button></Link>
        <Link className="btn" to={'/output'}><button>OUTPUT</button></Link>
    </div>
  )
}

export default Home