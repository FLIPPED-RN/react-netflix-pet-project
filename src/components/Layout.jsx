import { Outlet } from "react-router-dom";

export function Layout(){
  return <div className="min-h-screen w-full bg-white dark:bg-black text-black dark:text-white px-6 py-5">

    HEADER

    <Outlet />
  </div>
}