import React from "react";
import { Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

interface Testimonial {
  name: string;
  treatment: string;
  text: string;
}

const testimonials: Testimonial[] = [
  {
    name: "Sujata Rawat",
    treatment: "Acne Treatment",
    text: "Lorem ipsum dolor sit amet consectetur. Massa sed dapibus adipiscing felia at. Integer id dictum ullamcorper magna nam eget. Elementum semper ultrices quam eleifend dignissim etiam velit molestie diam.",
  },
  {
    name: "Vickey Rajput",
    treatment: "Hair Loss",
    text: "Lorem ipsum dolor sit amet consectetur. Massa sed dapibus adipiscing felia at. Integer id dictum ullamcorper magna nam eget. Elementum semper ultrices quam eleifend dignissim etiam velit molestie diam.",
  },
];

const Testimonials: React.FC = () => {
  return (
    <section className="py-12 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground">
            What our users have to say
          </h2>
          <a href="#" className="text-primary font-semibold text-sm hover:underline">
            View All →
          </a>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {testimonials.map((t, i) => (
            <Card key={i}>
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center font-heading font-bold text-primary">
                    {t.name[0]}
                  </div>
                  <div>
                    <h4 className="font-heading font-semibold text-primary text-sm">{t.name}</h4>
                    <p className="text-xs text-muted-foreground">{t.treatment}</p>
                  </div>
                </div>
                <div className="flex gap-0.5 mb-3">
                  {Array.from({ length: 5 }, (_, s) => (
                    <Star key={s} className="w-4 h-4 text-amber fill-amber" />
                  ))}
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">{t.text}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
