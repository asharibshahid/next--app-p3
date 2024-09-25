"use client"

import {useRouter} from 'next/navigation'
import React from 'react'

const contact = () => {
  const router = useRouter();
  return (
    <div>

        <h2>iTS a Contact Page</h2>
        <button onClick={()=>router.push("/")} >Go To Return HomePage</button>
    </div>
  )
}

export default contact