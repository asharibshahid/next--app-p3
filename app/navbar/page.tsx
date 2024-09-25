
"use client"

import React from 'react'
import Link from 'next/link'
import {useRouter} from 'next/navigation'
const navbarPage = () => {
  const router = useRouter();
  return (
    <div>navbarPage <br />
      <Link href="/">
       Go To Homepage
      </Link><br />
      <button onClick={()=>router.push("/")} >Go To Return HomePage</button>
      </div>
   
  )
}

export default navbarPage