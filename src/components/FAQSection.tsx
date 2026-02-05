import FAQItem from "@/components/FAQItem";

const FAQS = [
  {
    question: "What kinds of jobs can I post?",
    answer:
      "Anything from furniture assembly and moving help to errands, cleaning, and short-term assistance.",
  },
  {
    question: "Are workers vetted?",
    answer:
      "Yes. We focus on quality and reliability, and every worker is reviewed before being accepted.",
  },
  {
    question: "Is Odd Jobs only available in NYC?",
    answer:
      "Yes. Odd Jobs is built specifically for New York City to ensure speed and local expertise.",
  },
] as const;

export default function FAQSection() {
  return (
    <section className="mt-32">
      <h2 className="text-3xl font-bold text-center">
        Frequently asked questions
      </h2>

      <div className="mt-12 space-y-8 max-w-3xl mx-auto">
        {FAQS.map((faq) => (
          <FAQItem
            key={faq.question}
            question={faq.question}
            answer={faq.answer}
          />
        ))}
      </div>
    </section>
  );
}