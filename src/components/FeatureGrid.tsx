import FeatureCard from "@/components/FeatureCard";

const FEATURES = [
  {
    title: "Post a task",
    description: "Tell us what you need done, where in NYC, and when.",
  },
  {
    title: "Get matched",
    description: "We connect you with a reliable, vetted OddJobs worker.",
  },
  {
    title: "Get it done",
    description: "Your task gets completed quickly and professionally.",
  },
] as const;

export default function FeatureGrid() {
  return (
    <section className="mt-24 grid gap-12 md:grid-cols-3">
      {FEATURES.map((feature) => (
        <FeatureCard
          key={feature.title}
          title={feature.title}
          description={feature.description}
        />
      ))}
    </section>
  );
}