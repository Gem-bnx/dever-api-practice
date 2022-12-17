import React from 'react'
import HeroImg from '../components/HeroImg'
import { Link } from 'react-router-dom'
function Output({sublink}) {
    // console.log('hi', sublink)
  return (
    <>
        <Link to={"/"}><button>HOME</button></Link>
        <HeroImg sublink={sublink}></HeroImg>
    </>
  )
}

export default Output