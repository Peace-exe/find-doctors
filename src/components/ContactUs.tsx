import React, { useState, type ChangeEvent } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import contactImage from "/contactUsImg.png";

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
    <section id="contact" className="py-12 bg-hero text-hero-foreground">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-2xl md:text-3xl font-heading font-bold mb-6">Get in Touch</h2>
            <form className="space-y-4">
              <div>
                <Label className="text-hero-foreground">Name</Label>
                <Input
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter full name"
                  className="bg-background text-foreground border-0 focus-visible:ring-amber"
                />
              </div>
              <div>
                <Label className="text-hero-foreground">Mobile</Label>
                <Input
                  name="mobile"
                  value={formData.mobile}
                  onChange={handleChange}
                  placeholder="Enter Mobile No."
                  className="bg-background text-foreground border-0 focus-visible:ring-amber"
                />
              </div>
              <div>
                <Label className="text-hero-foreground">Email</Label>
                <Input
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter email"
                  className="bg-background text-foreground border-0 focus-visible:ring-amber"
                />
              </div>
              <div>
                <Label className="text-hero-foreground">Message</Label>
                <Textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="How can we help you?"
                  rows={3}
                  className="bg-background text-foreground border-0 focus-visible:ring-amber resize-none"
                />
              </div>
              <Button type="button" className="bg-amber text-foreground hover:opacity-90">
                Submit
              </Button>
            </form>
          </div>
          <div className="hidden md:block">
            <img
              src={contactImage}
              alt="Doctor consultation"
              className="rounded-2xl shadow-2xl w-full max-w-md mx-auto object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
