import React from 'react'
import { Outlet, NavLink } from 'react-router-dom'

function NavItem({ to, children }) {
  return <NavLink
    to={to}
    className={({ isActive }) =>
      isActive ? "font-bold" : ""
    }
  >{children}</NavLink>
}

export default function Layout() {
  return (
    <>
      <header className="bg-slate-700 text-slate-100 p-4 flex justify-between">
        <nav className="flex gap-4">
          <NavItem to="buttons">Buttons</NavItem>
          <NavItem to="menus">Menus</NavItem>
          <NavItem to="stars">Stars</NavItem>
          <NavItem to="badges">Badges</NavItem>
          <NavItem to="banners">Banners</NavItem>
          <NavItem to="cards">Cards</NavItem>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>

    </>
  )
}
