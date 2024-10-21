"use client"

import {useRouter} from 'next/navigation'
import React from 'react'

const Contact = () => {
  const router = useRouter();
  return (
    <div>

        <h2 className='bg-black'>iTS a Contact Page</h2>
        <button className='bg-neutral-800' onClick={()=>router.push("/")} >Go To Return HomePage</button>
    </div>
  )
}

export default Contact