export default function FAQItem({
  question,
  answer,
}: {
  question: string;
  answer: string;
}) {
  return (
    <div>
      <h3 className="text-lg font-semibold">{question}</h3>
      <p className="mt-2 text-gray-600 dark:text-gray-300">{answer}</p>
    </div>
  );
}