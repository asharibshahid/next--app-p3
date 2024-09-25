"use client"

import React from 'react'
import HomePage from '../page'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
const aboutPage = () => {
  const router = useRouter();
  return (
    <div>aboutPage <br />
    <Link href="/">
       Go To Homepage
      </Link> <br />
      <button onClick={()=>router.push("/")} >Go To Return HomePage</button>
      </div>
  )
}

export default aboutPage