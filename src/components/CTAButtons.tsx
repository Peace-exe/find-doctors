import React from "react";
import { MapPin, Phone } from "lucide-react";

interface CTAItem {
  icon: React.ElementType;
  subtitle: string;
  title: string;
  className: string;
}

const ctaItems: CTAItem[] = [
  {
    icon: MapPin,
    subtitle: "Find near by",
    title: "Dermatologists",
    className: "bg-primary text-primary-foreground hover:bg-teal-dark",
  },
  {
    icon: Phone,
    subtitle: "Talk to",
    title: "Dermatologists",
    className: "bg-amber text-foreground hover:opacity-90",
  },
];

const CTAButtons: React.FC = () => {
  return (
    <section className="py-8 bg-background">
      <div className="container mx-auto px-4 flex flex-col sm:flex-row gap-4 justify-center">
        {ctaItems.map((cta) => {
          const Icon = cta.icon;
          return (
            <button
              key={cta.title + cta.subtitle}
              className={`flex items-center gap-4 px-8 py-5 rounded-xl text-lg font-heading font-semibold transition-all shadow-lg ${cta.className}`}
            >
              <Icon className="w-6 h-6" />
              <div className="text-left">
                <div className="text-xs font-body font-normal opacity-80">{cta.subtitle}</div>
                <div>{cta.title}</div>
              </div>
            </button>
          );
        })}
      </div>
    </section>
  );
};

export default CTAButtons;
