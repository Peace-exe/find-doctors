import React from "react";
import { Phone } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const CallbackBanner: React.FC = () => {
  return (
    <section className="bg-amber-400 py-4">
      <div className="container mx-auto px-4 flex flex-col sm:flex-row items-center justify-center gap-4">
        <div className="flex items-center gap-2 text-foreground font-heading font-semibold text-sm text-center">
          <Phone className="w-4 h-4" />
          Get a call back within 15 minutes from our health advisor for test booking assistance
        </div>
        <div className="flex items-center gap-2">
          <Input
            placeholder="Enter your 10 digit mobile number"
            className="w-64 bg-background text-foreground border-0 focus-visible:ring-primary"
          />
          <Button className="whitespace-nowrap">Get a Callback</Button>
        </div>
      </div>
    </section>
  );
};

export default CallbackBanner;
