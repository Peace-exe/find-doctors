import { Search, User, Menu, X } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-hero text-hero-foreground sticky top-0 z-50 bg-[#018C94] px-28 text-white">
      <div className="container mx-auto flex items-center justify-between py-3 px-4">
        <div className="flex items-center gap-2">
          <span className="text-2xl font-heading font-bold tracking-tight">
            <img src="/logo.png" className=""/>
          </span>
        </div>

        <div className="hidden md:flex items-center gap-8 font-medium text-sm ">
          <a href="#" className="hover:text-amber transition-colors hover:text-black">Home</a>
          <a href="#about" className="hover:text-amber transition-colors hover:text-black">About Us</a>
          <a href="#conditions" className="hover:text-amber transition-colors hover:text-black">Specialties</a>
          <a href="#articles" className="hover:text-amber transition-colors hover:text-black">Articles</a>
        </div>

        <div className="hidden md:flex items-center gap-3">
          <button className="p-2 rounded-full hover:bg-teal-dark transition-colors">
            <Search className="w-4 h-4 hover:text-black" />
          </button>
                    {/*
            <button className="flex items-center gap-2 bg-amber text-foreground px-4 py-2 rounded-full text-sm font-semibold hover:opacity-90 transition-opacity">
            <User className="w-4 h-4" />
            Login
            </button>
            */}
          
        </div>

        <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-teal-dark px-4 pb-4 flex flex-col gap-3 text-sm font-medium">
          <a href="#" className="py-2 border-b border-primary">Home</a>
          <a href="#about" className="py-2 border-b border-primary">About Us</a>
          <a href="#conditions" className="py-2 border-b border-primary">Specialties</a>
          <a href="#articles" className="py-2">Articles</a>
          <button className="bg-amber text-foreground px-4 py-2 rounded-full text-sm font-semibold w-fit">
            Login
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;