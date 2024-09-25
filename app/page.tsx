

"use client"
import {useRouter} from 'next/navigation'


import Link from "next/link";


export default function HomePage() {
  const router = useRouter();
  return (
    
    <div>
      <h1>It's a HomePage</h1>
      <Link href="/navbar">
       Go To NavbarPage
      </Link><br />
      <Link href="/about">
       Go To aboutPage
      </Link><br />
      <Link href="/contact">
       Go To contact
      </Link><br />
      <Link href="/footer">
       Go To  Footer
      </Link><br />
      <br />
      <button onClick={()=>router.push("/navbar")} >Go To NavPage</button><br />
      <button onClick={()=>router.push("/about")} >Go To aboutPage</button><br />
      <button onClick={()=>router.push("/contact")} >Go To ContactPage</button><br />
      <button onClick={()=>router.push("/footer")} >Go To footerPage</button><br />
    </div>
  );
}
