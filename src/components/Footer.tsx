import { Facebook, Instagram, Linkedin, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-footer bg-primary text-white px-28">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-heading font-bold text-primary-foreground mb-3">
              <img src="/logo.png" className=""/>
            </h3>
            <p className="text-sm leading-relaxed opacity-80">
              Learn How to Quickly Generate Placeholder Text. Using a Lorem Ipsum Tool. Explore How Lorem Ipsum Generators Can Lorem.
            </p>
          </div>
          <div>
            <h4 className="font-heading font-semibold text-primary-foreground mb-3 ">Quick Links</h4>
            <ul className="space-y-2 text-sm opacity-80">
              <li><a href="#" className="hover:text-amber transition-colors">Home</a></li>
              <li><a href="#" className="hover:text-amber transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-amber transition-colors">Contact Us</a></li>
              <li><a href="#" className="hover:text-amber transition-colors">Blogs</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-heading font-semibold text-primary-foreground mb-3 ">Others</h4>
            <ul className="space-y-2 text-sm opacity-80">
              <li><a href="#" className="hover:text-amber transition-colors">CSR</a></li>
              <li><a href="#" className="hover:text-amber transition-colors">Annual</a></li>
              <li><a href="#" className="hover:text-amber transition-colors">Returns</a></li>
              <li><a href="#" className="hover:text-amber transition-colors">Notices</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-heading font-semibold text-primary-foreground mb-3">Connect with us</h4>
            <div className="flex gap-3 opacity-80">
              <a href="#" className="w-9 h-9 rounded-full bg-primary/30 flex items-center justify-center hover:bg-amber transition-colors">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-primary/30 flex items-center justify-center hover:bg-amber transition-colors">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-primary/30 flex items-center justify-center hover:bg-amber transition-colors">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-primary/30 flex items-center justify-center hover:bg-amber transition-colors">
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-primary/20 mt-8 pt-6 text-center text-xs opacity-60">
          © 2026 Company Name All rights reserved. Designed & Developed by AbyM Technologies | Privacy Policy | Terms and Conditions | Disclaimer
        </div>
      </div>
    </footer>
  );
};

export default Footer;