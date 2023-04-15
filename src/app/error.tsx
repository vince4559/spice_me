"use client"
import Link from 'next/link'
import React, { useEffect } from 'react'

const Error = ({error, reset}:{error:Error, reset: () => void}) => {
    useEffect(() => {
        console.log(error)
    }, [error])
  return (
    <div>
      <p>Something went wrong</p>
      <button onClick={() => reset()}>
        Reset boundaries
      </button>
      <Link href={'/'} className='underline' >Go Back Home</Link>
    </div>
  )
}

export default Error
