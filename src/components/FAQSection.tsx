import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FAQ {
  question: string;
  answer: string;
}

const faqs: FAQ[] = [
  { question: "How long does it take to get the results of my tests?", answer: "Results typically take 24-48 hours depending on the type of test performed." },
  { question: "What are the most common tests that you offer?", answer: "We offer a wide range of tests, but some of the most common include: Complete blood count (CBC), Liver function tests (LFT), Kidney function tests (KFT), Thyroid function tests (TFT), Lipid Profile." },
  { question: "What if I have questions about my test results?", answer: "You can always reach out to our health experts for a detailed explanation of your results." },
  { question: "What are your payment options?", answer: "We accept cash, credit/debit cards, UPI, and all major digital payment methods." },
  { question: "Do you offer home collection services?", answer: "Yes, we offer convenient home collection services. You can book a slot through our platform." },
];

const FAQSection: React.FC = () => {
  return (
    <section className="py-12 bg-background">
      <div className="container mx-auto px-4 max-w-3xl">
        <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground text-center mb-2">
          Frequently Asked Questions
        </h2>
        <p className="text-muted-foreground text-center text-sm mb-8">
          Empowering Global Brands and Startups to Drive Innovation and Success with our unparalleled expertise and commitment to excellence
        </p>
        <Accordion type="single" collapsible defaultValue="item-1">
          {faqs.map((faq, i) => (
            <AccordionItem key={i} value={`item-${i}`}>
              <AccordionTrigger className="text-sm font-medium text-left">
                Q. {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-sm text-muted-foreground">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQSection;
