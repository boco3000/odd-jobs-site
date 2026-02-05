"use client";

import { useState } from "react";

export default function FAQItem({
  question,
  answer,
}: {
  question: string;
  answer: string;
}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className="flex w-full items-center justify-between text-left"
      >
        <h3 className="text-lg font-semibold">{question}</h3>
        <span className="text-xl">{isOpen ? "−" : "+"}</span>
      </button>

      {isOpen && (
        <p className="mt-2 text-gray-600 dark:text-gray-300">{answer}</p>
      )}
    </div>
  );
}