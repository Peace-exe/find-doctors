import React, { useState, type ChangeEvent } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import contactImage from "/contactUsImg.png";
import bgImage from "/contactUsBg.png";

interface FormData {
  name: string;
  mobile: string;
  email: string;
  message: string;
}

const ContactUs: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    mobile: "",
    email: "",
    message: "",
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="mx-3 sm:mx-6 md:mx-16 lg:mx-32 my-8">
      <div className="rounded-2xl shadow-lg overflow-hidden grid md:grid-cols-2 min-h-125">

        {/* Left: Form panel */}
        <div className="relative text-hero-foreground flex flex-col justify-center">

          {/* Background image */}
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url(${bgImage})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          />

          {/* Primary colour overlay */}
          <div className="absolute inset-0 bg-primary/85 mix-blend-multiply" />

          {/* Form content */}
          <div className="relative px-6 py-10 sm:px-8 sm:py-12 md:px-10">
            <h2 className="text-2xl md:text-3xl font-heading font-bold mb-6 flex justify-center">
              Get in Touch
            </h2>
            <form className="space-y-4">
              <div className="space-y-1">
                <Label className="text-hero-foreground font-medium">Name</Label>
                <Input
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter Full name"
                  className="bg-white text-foreground border-0 focus-visible:ring-amber placeholder:text-muted-foreground/60"
                />
              </div>
              <div className="space-y-1">
                <Label className="text-hero-foreground font-medium">Mobile</Label>
                <Input
                  name="mobile"
                  value={formData.mobile}
                  onChange={handleChange}
                  placeholder="Enter Mobile No."
                  className="bg-white text-foreground border-0 focus-visible:ring-amber placeholder:text-muted-foreground/60"
                />
              </div>
              <div className="space-y-1">
                <Label className="text-hero-foreground font-medium">Email</Label>
                <Input
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter email"
                  className="bg-white text-foreground border-0 focus-visible:ring-amber placeholder:text-muted-foreground/60"
                />
              </div>
              <div className="space-y-1">
                <Label className="text-hero-foreground font-medium">Message</Label>
                <Textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="How can we help you?"
                  rows={4}
                  className="bg-white text-foreground border-0 focus-visible:ring-amber resize-none placeholder:text-muted-foreground/60"
                />
              </div>
              <div className="pt-2 flex justify-center">
                <Button
                  type="button"
                  className="bg-white text-foreground hover:bg-amber px-10 font-semibold shadow-md"
                >
                  Submit
                </Button>
              </div>
            </form>
          </div>
        </div>

        {/* Right: Image panel */}
        <div className="hidden md:block relative">
          <img
            src={contactImage}
            alt="Doctor consultation"
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>

      </div>
    </section>
  );
};

export default ContactUs;