"use client";

import { useState } from "react";

type WorkerFormState = {
  name: string;
  email: string;
  phone: string;
  location: string;
  availability: string;
  note: string;
  skills: string[];
};

const SKILLS = [
  "Moving help",
  "Furniture assembly",
  "Cleaning",
  "Handyman",
  "Errands",
  "Pet help",
] as const;

type WorkerFormErrors = Partial<Record<keyof WorkerFormState, string>>;

export default function BecomeAWorkerPage() {
  const [form, setForm] = useState<WorkerFormState>({
    name: "",
    email: "",
    phone: "",
    location: "",
    availability: "",
    note: "",
    skills: [],
  });
  const [touched, setTouched] = useState<
    Partial<Record<keyof WorkerFormState, boolean>>
  >({});
  const [submittedOnce, setSubmittedOnce] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [serverError, setServerError] = useState<string | null>(null);

  function updateField<K extends keyof WorkerFormState>(
    key: K,
    value: WorkerFormState[K],
  ) {
    setServerError(null);
    setSubmitted(false);
    setForm((prev) => ({ ...prev, [key]: value }));
  }

  function toggleSkill(skill: string) {
    setServerError(null);
    setSubmitted(false);
    setTouched((prev) => ({ ...prev, skills: true }));

    setForm((prev) => {
      const hasSkill = prev.skills.includes(skill);
      return {
        ...prev,
        skills: hasSkill
          ? prev.skills.filter((s) => s !== skill)
          : [...prev.skills, skill],
      };
    });
  }

  function validate(next: WorkerFormState): WorkerFormErrors {
    const errors: WorkerFormErrors = {};

    if (!next.name.trim()) errors.name = "Please enter your name.";
    if (!next.email.trim()) errors.email = "Please enter your email.";
    if (next.email && !/^\S+@\S+\.\S+$/.test(next.email))
      errors.email = "Please enter a valid email.";

    if (!next.phone.trim()) errors.phone = "Please enter your phone number.";
    if (!next.location.trim()) errors.location = "Please enter your NYC area.";
    if (next.skills.length === 0) errors.skills = "Select at least one skill.";
    if (!next.availability.trim())
      errors.availability = "Please tell us your availability.";

    return errors;
  }

  const errors = validate(form);
  const isValid = Object.keys(errors).length === 0;

  function shouldShowError(field: keyof WorkerFormState) {
    return submittedOnce || touched[field];
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmittedOnce(true);
    setServerError(null);

    const currentErrors = validate(form);
    if (Object.keys(currentErrors).length > 0) return;

    try {
      setIsSubmitting(true);

      const res = await fetch("/api/worker-application", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!res.ok) {
        const body = await res.json().catch(() => null);
        setServerError(body?.error ?? "Submission failed. Please try again.");
        return;
      }

      setSubmitted(true);

      setForm({
        name: "",
        email: "",
        phone: "",
        location: "",
        availability: "",
        note: "",
        skills: [],
      });
      setTouched({});
      setSubmittedOnce(false);
    } catch {
      setServerError("Network error. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <main className="mx-auto max-w-2xl px-6 py-16">
      <h1 className="text-4xl font-bold tracking-tight">Become a worker</h1>
      <p className="mt-4 text-gray-600 dark:text-gray-300">
        Apply to work with Odd Jobs in NYC. This is a demo form (no backend
        yet).
      </p>

      {submitted && (
        <div className="mb-8 rounded-md border border-green-600 bg-green-50 p-4 text-green-800 dark:border-green-500 dark:bg-green-900/30 dark:text-green-200">
          <p className="font-medium">Application submitted</p>
          <p className="mt-1 text-sm">
            Thanks — we&apos;ll reach out soon if it&apos;s a fit.
          </p>
        </div>
      )}

      {serverError && (
        <div className="mb-8 rounded-md border border-red-600 bg-red-50 p-4 text-red-800 dark:border-red-500 dark:bg-red-900/30 dark:text-red-200">
          {serverError}
        </div>
      )}

      <form onSubmit={handleSubmit} className="mt-10 space-y-6">
        <div className="grid gap-2">
          <label className="font-medium" htmlFor="name">
            Full name
          </label>
          <input
            id="name"
            className="rounded-md border px-3 py-2 dark:border-gray-700 dark:bg-transparent"
            value={form.name}
            onChange={(e) => updateField("name", e.target.value)}
            onBlur={() => setTouched((prev) => ({ ...prev, name: true }))}
            placeholder="Your name"
            autoComplete="name"
          />
          {shouldShowError("name") && errors.name && (
            <p className="text-sm text-red-600 dark:text-red-400">
              {errors.name}
            </p>
          )}
        </div>

        <div className="grid gap-2">
          <label className="font-medium" htmlFor="email">
            Email
          </label>
          <input
            id="email"
            type="email"
            className="rounded-md border px-3 py-2 dark:border-gray-700 dark:bg-transparent"
            value={form.email}
            onChange={(e) => updateField("email", e.target.value)}
            onBlur={() => setTouched((prev) => ({ ...prev, email: true }))}
            placeholder="you@example.com"
            autoComplete="email"
          />
          {shouldShowError("email") && errors.email && (
            <p className="text-sm text-red-600 dark:text-red-400">
              {errors.email}
            </p>
          )}
        </div>

        <div className="grid gap-2">
          <label className="font-medium" htmlFor="phone">
            Phone
          </label>
          <input
            id="phone"
            className="rounded-md border px-3 py-2 dark:border-gray-700 dark:bg-transparent"
            value={form.phone}
            onChange={(e) => updateField("phone", e.target.value)}
            onBlur={() => setTouched((prev) => ({ ...prev, phone: true }))}
            placeholder="(555) 555-5555"
            autoComplete="tel"
          />
          {shouldShowError("phone") && errors.phone && (
            <p className="text-sm text-red-600 dark:text-red-400">
              {errors.phone}
            </p>
          )}
        </div>

        <div className="grid gap-2">
          <label className="font-medium" htmlFor="location">
            Where in NYC?
          </label>
          <input
            id="location"
            className="rounded-md border px-3 py-2 dark:border-gray-700 dark:bg-transparent"
            value={form.location}
            onChange={(e) => updateField("location", e.target.value)}
            onBlur={() => setTouched((prev) => ({ ...prev, location: true }))}
            placeholder="Astoria, Queens"
          />
          {shouldShowError("location") && errors.location && (
            <p className="text-sm text-red-600 dark:text-red-400">
              {errors.location}
            </p>
          )}
        </div>

        <div className="grid gap-3">
          <p className="font-medium">Skills</p>
          <div className="grid gap-2 sm:grid-cols-2">
            {SKILLS.map((skill) => {
              const checked = form.skills.includes(skill);
              return (
                <label
                  key={skill}
                  className="flex items-center gap-3 rounded-md border px-3 py-2 dark:border-gray-700"
                >
                  <input
                    type="checkbox"
                    checked={checked}
                    onChange={() => toggleSkill(skill)}
                  />
                  <span>{skill}</span>
                </label>
              );
            })}
          </div>

          {shouldShowError("skills") && errors.skills && (
            <p className="text-sm text-red-600 dark:text-red-400">
              {errors.skills}
            </p>
          )}
        </div>

        <div className="grid gap-2">
          <label className="font-medium" htmlFor="availability">
            Availability
          </label>
          <input
            id="availability"
            className="rounded-md border px-3 py-2 dark:border-gray-700 dark:bg-transparent"
            value={form.availability}
            onChange={(e) => updateField("availability", e.target.value)}
            onBlur={() =>
              setTouched((prev) => ({ ...prev, availability: true }))
            }
            placeholder="Weeknights after 6pm, weekends"
          />
          {shouldShowError("availability") && errors.availability && (
            <p className="text-sm text-red-600 dark:text-red-400">
              {errors.availability}
            </p>
          )}
        </div>

        <div className="grid gap-2">
          <label className="font-medium" htmlFor="note">
            Anything else? (optional)
          </label>
          <textarea
            id="note"
            className="min-h-28 rounded-md border px-3 py-2 dark:border-gray-700 dark:bg-transparent"
            value={form.note}
            onChange={(e) => updateField("note", e.target.value)}
            placeholder="Tell us about your experience, reliability, or what you like doing."
          />
        </div>

        {submittedOnce && !isValid && (
          <p className="text-sm text-red-600 dark:text-red-400">
            Please fix the errors above to submit.
          </p>
        )}

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full rounded-md bg-black px-6 py-3 text-white font-medium transition hover:bg-gray-800 disabled:cursor-not-allowed disabled:opacity-50"
        >
          {isSubmitting ? "Submitting..." : "Submit application"}
        </button>
      </form>
    </main>
  );
}
