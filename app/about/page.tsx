"use client"

import React from 'react'

import { useRouter } from 'next/navigation'
import Link from 'next/link'
const AboutPage = () => {
  const router = useRouter();
  return (
    <div>AboutPage <br />
    <Link href="/">
       Go To Homepage
      </Link> <br />
      <button onClick={()=>router.push("/")} >Go To Return HomePage</button>
      </div>
  )
}

export default AboutPage