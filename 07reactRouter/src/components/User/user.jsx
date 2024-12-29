import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
    const {userid} = useParams()
  return (
    <div className='flex align-center justify-center bg-gray-700 text-white p-4 text-3xl'>user : {userid}</div>
  )
}

export default User