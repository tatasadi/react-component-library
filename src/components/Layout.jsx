import React from 'react'
import { Outlet, NavLink } from 'react-router-dom'

export default function Layout() {
  return (
    <>
      <header className="bg-slate-700 text-slate-100 p-4 flex justify-between">
        <nav className="flex gap-4">
          <NavLink
            to="buttons"
            className={({ isActive }) =>
              isActive ? "font-bold" : ""
            }
          >
            Buttons
          </NavLink>
          <NavLink
            to="menus"
            className={({ isActive }) =>
              isActive ? "font-bold" : ""
            }
          >
            Menus
          </NavLink>
          <NavLink
            to="stars"
            className={({ isActive }) =>
              isActive ? "font-bold" : ""
            }
          >
            Stars
          </NavLink>
        </nav>
      </header>
      <main className='p-10'>
        <Outlet />
      </main>

    </>
  )
}
