import React from 'react'
import SubForm from '../components/SubForm'

function Input({setSubLink}) {
  return (
    <>
      <SubForm setSubLink = {(newSubLink) => setSubLink(newSubLink)}></SubForm>
    </>
  )
}

export default Input