import React from "react";

interface Condition {
  name: string;
  icon: string;
}

const conditions: Condition[] = [
  { name: "Acne and Pimple Marks", icon: "😷" },
  { name: "Hair Fall and Dandruff", icon: "💇" },
  { name: "Skin Allergy and Rashes", icon: "🩹" },
  { name: "Pigmentation & Uneven Tone", icon: "🎨" },
  { name: "Skin Rejuvenation", icon: "✨" },
  { name: "Fungal Infections", icon: "🦠" },
  { name: "Psoriasis", icon: "🩺" },
  { name: "Eczema and Dry Skin", icon: "💧" },
];

const ConditionsTreated: React.FC = () => {
  return (
    <section id="conditions" className="py-12 bg-background">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground">
            Conditions Dermatologists Treated
          </h2>
          <a href="#" className="text-primary font-semibold text-sm hover:underline">
            View All →
          </a>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4">
          {conditions.map((c) => (
            <div
              key={c.name}
              className="flex flex-col items-center gap-3 p-4 rounded-xl bg-teal-light hover:shadow-md transition-shadow cursor-pointer group"
            >
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-2xl group-hover:bg-primary/20 transition-colors">
                {c.icon}
              </div>
              <span className="text-xs text-center font-medium text-foreground leading-tight">
                {c.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ConditionsTreated;
