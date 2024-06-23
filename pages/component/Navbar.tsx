import Link from "next/link"

import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MenuIcon from '@mui/icons-material/Menu';
import { colors } from "@mui/material";
import { useState } from "react";
export default function Navbar() {
    const [openham,setOpenham]=useState(false)
    return (
        <nav className="flex flex-col h-screen">
            <div className="w-screen h-16 bg-blue-800 flex  justify-between items-center p-4">
                <div className="hidden max-md:block cursor-pointer" onClick={()=>setOpenham(!openham)}>
                    <MenuIcon  style={{color: "white",fontSize:40}}></MenuIcon>
                </div>
                <h1 className="text-white max-md:hidden">IT INCIDENT</h1>
                <div className="flex flex-row gap-5">
                    <NotificationsIcon style={{ fontSize: 32, color: "white" }} className="cursor-pointer" />
                    <AccountCircleIcon style={{ fontSize: 32, color: "white" }} className="cursor-pointer" />
                </div>
               
            </div>
            {openham && (
                <div className=" z-10 flex flex-col  bg-slate-700 text-white  items-center gap-9">
                <Link href="/" className="p-3 mt-5 cursor-pointer" onClick={()=>setOpenham(!openham)}>Dashboard</Link>
                <Link href="/Incident"  className="p-3 mt-5 cursor-pointer" onClick={()=>setOpenham(!openham)}>Incidents</Link>
                <Link href="/Chat"  className="p-3 mt-5 cursor-pointer" onClick={()=>setOpenham(!openham)}>Chat</Link>
                <Link href="/Report" className="p-3 mt-5 cursor-pointer" onClick={()=>setOpenham(!openham)}>Reports</Link>
                <h1 className="p-3 mt-5 cursor-pointer">Settings</h1>
            </div>
            )}
            <div className="max-md:hidden  flex w-52 flex-col flex-grow bg-slate-700 text-white  items-center gap-9">
                <Link href="/" className="p-3 mt-5 cursor-pointer">Dashboard</Link>
                <Link href="/Incident"  className="p-3 mt-5 cursor-pointer">Incidents</Link>
                <Link href="/Chat"  className="p-3 mt-5 cursor-pointer">Chat</Link>
                <Link href="/Report" className="p-3 mt-5 cursor-pointer">Reports</Link>
                <h1 className="p-3 mt-5 cursor-pointer">Settings</h1>
            </div>
            
            
        </nav>
    );
}
 
