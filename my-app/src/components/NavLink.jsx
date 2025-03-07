import { usePathname } from 'next/navigation'
import React from 'react'
import Link from 'next/link'

const NavLink = ({links}) => {

const pathname = usePathname()

  return (
    <Link className={`rounded p-1 ${pathname === links.url ? "text-white bg-black" : ""}`} href={links.url}>{links.title}</Link>
  )
}

export default NavLink