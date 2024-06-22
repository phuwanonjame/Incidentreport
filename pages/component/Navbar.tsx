import Link from "next/link"

import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { colors } from "@mui/material";
export default function Navbar() {
    return (
        <nav className="flex flex-col h-screen">
            <div className="w-screen h-16 bg-blue-800 flex justify-between items-center p-4">
                <h1 className="text-white">IT INCIDENT</h1>
                <div className="flex flex-row gap-5">
                    <NotificationsIcon style={{ fontSize: 32, color: "white" }} className="cursor-pointer" />
                    <AccountCircleIcon style={{ fontSize: 32, color: "white" }} className="cursor-pointer" />
                </div>
            </div>
            <div className=" max-md:hidden flex w-52 flex-col flex-grow bg-slate-700 text-white  items-center gap-9">
                <Link href="/" className="p-3 mt-5 cursor-pointer">Dashboard</Link>
                <Link href="/Incident"  className="p-3 mt-5 cursor-pointer">Incidents</Link>
                <Link href="/Chat"  className="p-3 mt-5 cursor-pointer">Chat</Link>
                <Link href="/Report" className="p-3 mt-5 cursor-pointer">Reports</Link>
                <h1 className="p-3 mt-5 cursor-pointer">Settings</h1>
            </div>
        </nav>
    );
}

