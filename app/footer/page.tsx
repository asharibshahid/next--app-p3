"use client"


import React from 'react'
import {useRouter} from 'next/navigation'
const footer = () => {
const router = useRouter();
  return (
    <div>footer <br />
        <button onClick={()=>router.push("/")} >Go To Return HomePage</button>
    </div>
  )
}

export default footer