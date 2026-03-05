import React from "react";
import { Button } from "@/components/ui/button";

import articleImg1 from "/articleImg1.png";
import articleImg2 from "/articleImg2.png";
interface Article {
  title: string;
  excerpt: string;
  image: string;
}

const articles: Article[] = [
  {
    title: "What is Cosmetic Dermatology?",
    excerpt:
      "Cosmetic dermatology is a subspecialty of dermatology that focuses on aesthetic issues and the applications of the discipline...",
    image: articleImg1, 
  },
  {
    title: "Why Visit a Dermatologist?",
    excerpt:
      "When it comes to skin care issues, dermatologists hold a key role in safeguarding your overall well-being, ensuring your skin not only...",
    image: articleImg2, 
  },
];

const ArticlesSection: React.FC = () => {
  return (
    <section id="articles" className="py-12 bg-primary/10 mx-4 rounded-xl md:mx-16 lg:px-32">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground mb-3">
              Read top articles from health expert
            </h2>
            <p className="text-muted-foreground mb-6">
              Health articles that keep you informed about good health practices and achieve your goals.
            </p>
            <Button>See all articles</Button>
          </div>
          <div className="space-y-4">
            {articles.map((article) => (
  <div key={article.title} className="rounded-xl border border-border hover:shadow-md transition-shadow overflow-hidden flex items-stretch">
    <div className="w-32 sm:w-36 shrink-0">
      <img
        src={article.image}
        alt={article.title}
        className="w-full h-full object-cover block"
      />
    </div>
    <div className="p-4 flex flex-col justify-center">
      <h3 className="font-heading font-semibold text-foreground mb-2 text-sm sm:text-base">
        {article.title}
      </h3>
      <p className="text-xs sm:text-sm text-muted-foreground line-clamp-3">
        {article.excerpt}
      </p>
    </div>
  </div>
))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ArticlesSection;