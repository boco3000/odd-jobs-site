import FeatureCard from "@/components/FeatureCard";

export default function FeatureGrid() {
  return (
    <section className="mt-24 grid gap-12 md:grid-cols-3">
      <FeatureCard
        title="Post a task"
        description="Tell us what you need done, where in NYC, and when."
      />
      <FeatureCard
        title="Get matched"
        description="We connect you with a reliable, vetted Odd Jobs worker."
      />
      <FeatureCard
        title="Get it done"
        description="Your task gets completed quickly and professionally."
      />
    </section>
  );
}