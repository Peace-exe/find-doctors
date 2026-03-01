import Footer from "@/components/Footer";
import Navbar from "@/components/NavBar";
import { Outlet } from "react-router-dom";

export default function Layout(){
    return <>
    <Navbar/>
    <Outlet/>
    <Footer/>
    </>
}