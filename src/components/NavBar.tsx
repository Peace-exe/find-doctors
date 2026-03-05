import { Search, Menu, X, User } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <nav className="bg-hero text-hero-foreground sticky top-0 z-50 bg-primary px-28">
      <div className="container mx-auto flex items-center justify-between py-3 px-4">
        <div className="flex items-center gap-2">
          <span className="text-2xl font-heading font-bold tracking-tight">
            <img src="/logo.png" className="" />
          </span>
        </div>

        <div className="hidden md:flex items-center gap-8 font-medium text-sm">
          <a href="#" className="hover:text-amber-400 transition-colors">Home</a>
          <a href="#about" className="hover:text-amber-400 transition-colors">About Us</a>
          <a href="#conditions" className="hover:text-amber-400 transition-colors">Specialties</a>
          <a href="#articles" className="hover:text-amber-400 transition-colors">Articles</a>
        </div>

        <div className="hidden md:flex items-center gap-3">
          <button
            onClick={() => navigate("/search")}
            className="p-2 rounded-full hover:bg-teal-dark transition-colors"
          >
            <Search className="w-4 h-4 hover:text-amber-400" />
          </button>

          <button className="flex items-center gap-2 bg-amber-400 text-foreground px-4 py-2 rounded-full text-sm font-semibold hover:opacity-90 transition-opacity">
            <User className="w-4 h-4" />
            Login
          </button>
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