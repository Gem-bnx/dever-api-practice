import React from 'react'

function HeroImg({sublink}) {
    const link = 'https://api.opendota.com'+ sublink;
    // console.log('link', link)
  return (
    <>
        <img className='hero-img' src={link} alt="HIHI" ></img>
    </>
  )
}

export default HeroImg