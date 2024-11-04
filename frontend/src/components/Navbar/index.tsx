'use client'

import * as React from "react"
import { usePathname } from "next/navigation"
import dynamic from "next/dynamic"
import { useAuth } from "@/contexts/AuthContext"

const NavbarContent = dynamic(() => import('./NavbarContent'), {
  ssr: false,
  loading: () => <NavbarSkeleton />,
})

export function NavbarSkeleton() {
  return (
    <div className="flex items-center justify-between bg-white px-4 py-2 shadow-sm animate-pulse">
      <div className="flex items-center space-x-2">
        <div className="w-10 h-10 bg-gray-200 rounded-full" />
        <div className="w-60 h-10 bg-gray-200 rounded-full" />
      </div>
      <div className="hidden md:flex space-x-2">
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className="w-10 h-10 bg-gray-200 rounded-lg" />
        ))}
      </div>
      <div className="flex items-center space-x-2">
        <div className="w-10 h-10 bg-gray-200 rounded-lg" />
        <div className="w-10 h-10 bg-gray-200 rounded-lg" />
        <div className="w-10 h-10 bg-gray-200 rounded-full" />
      </div>
    </div>
  )
}

const Navbar = () => {
  const pathname = usePathname()
  const { user, loading } = useAuth()
  
  // List of routes where navbar should be hidden
  const hideNavbarRoutes = ['/login', '/register']
  
  // Hide navbar on auth routes or when auth is still loading
  if (hideNavbarRoutes.includes(pathname)) {
    return null
  }

  // Show skeleton while loading
  if (loading) {
    return <NavbarSkeleton />
  }

  return <NavbarContent />
}

export default Navbar