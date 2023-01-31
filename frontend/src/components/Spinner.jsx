import React from 'react'
import {BallTriangle} from 'react-loader-spinner'

const Spinner = ({message}) => {
  return (
    <div className='flex flex-col justify-center items-center h-full w-full'>
        <BallTriangle type="BallTriangles" color="#00BFFF" height={50} width={200} className="m-5"></BallTriangle>
        <p className='text-lg text-center px-2'>{message}</p>
    </div>
  )
}

export default Spinner