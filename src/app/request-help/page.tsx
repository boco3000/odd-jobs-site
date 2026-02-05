"use client";

import { useState } from "react";

type FormState = {
  name: string;
  email: string;
  location: string;
  task: string;
  when: string;
};

type FormErrors = Partial<Record<keyof FormState, string>>;

export default function RequestHelpPage() {
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    location: "",
    task: "",
    when: "",
  });

  const [touched, setTouched] = useState<
    Partial<Record<keyof FormState, boolean>>
  >({});

  const [submittedOnce, setSubmittedOnce] = useState(false);

  const [submitted, setSubmitted] = useState(false);

  function updateField<K extends keyof FormState>(key: K, value: FormState[K]) {
    setSubmitted(false);
    setForm((prev) => ({ ...prev, [key]: value }));
  }

  function validate(next: FormState): FormErrors {
    const errors: FormErrors = {};

    if (!next.name.trim()) errors.name = "Please enter your name.";
    if (!next.email.trim()) errors.email = "Please enter your email.";
    if (next.email && !/^\S+@\S+\.\S+$/.test(next.email))
      errors.email = "Please enter a valid email.";
    if (!next.location.trim()) errors.location = "Please enter a neighborhood.";
    if (!next.task.trim()) errors.task = "Please describe the task.";
    if (!next.when.trim()) errors.when = "Please tell us when you need it.";

    return errors;
  }

  const errors = validate(form);
  const isValid = Object.keys(errors).length === 0;

  function shouldShowError(field: keyof FormState) {
    return submittedOnce || touched[field];
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmittedOnce(true);

    const currentErrors = validate(form);
    if (Object.keys(currentErrors).length > 0) {
      return;
    }

    console.log("Request submitted:", form);

    // success
    setSubmitted(true);

    // reset form + validation state
    setForm({
      name: "",
      email: "",
      location: "",
      task: "",
      when: "",
    });
    setTouched({});
    setSubmittedOnce(false);
  }

  return (
    <main className="mx-auto max-w-2xl px-6 py-16">
      <h1 className="text-4xl font-bold tracking-tight">Request help</h1>
      <p className="mt-4 text-gray-600 dark:text-gray-300">
        Tell us what you need done. This is a demo form (no backend yet).
      </p>

      {submitted && (
        <div className="mb-8 rounded-md border border-green-600 bg-green-50 p-4 text-green-800 dark:border-green-500 dark:bg-green-900/30 dark:text-green-200">
          <p className="font-medium">Request submitted successfully</p>
          <p className="mt-1 text-sm">
            We&apos;ll review your request and get back to you shortly.
          </p>
        </div>
      )}

      <form onSubmit={handleSubmit} className="mt-10 space-y-6">
        <div className="grid gap-2">
          <label className="font-medium" htmlFor="name">
            Your name
          </label>
          <input
            id="name"
            className="rounded-md border px-3 py-2 dark:border-gray-700 dark:bg-transparent"
            value={form.name}
            onChange={(e) => updateField("name", e.target.value)}
            onBlur={() => setTouched((prev) => ({ ...prev, name: true }))}
            placeholder="Bo Cochran"
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
          <label className="font-medium" htmlFor="location">
            Location (NYC neighborhood)
          </label>
          <input
            id="location"
            className="rounded-md border px-3 py-2 dark:border-gray-700 dark:bg-transparent"
            value={form.location}
            onChange={(e) => updateField("location", e.target.value)}
            onBlur={() => setTouched((prev) => ({ ...prev, location: true }))}
            placeholder="Williamsburg, Brooklyn"
          />
          {shouldShowError("location") && errors.location && (
            <p className="text-sm text-red-600 dark:text-red-400">
              {errors.location}
            </p>
          )}
        </div>

        <div className="grid gap-2">
          <label className="font-medium" htmlFor="task">
            What do you need done?
          </label>
          <textarea
            id="task"
            className="min-h-28 rounded-md border px-3 py-2 dark:border-gray-700 dark:bg-transparent"
            value={form.task}
            onChange={(e) => updateField("task", e.target.value)}
            onBlur={() => setTouched((prev) => ({ ...prev, task: true }))}
            placeholder="Example: assemble an IKEA dresser and mount a mirror."
          />
          {shouldShowError("task") && errors.task && (
            <p className="text-sm text-red-600 dark:text-red-400">
              {errors.task}
            </p>
          )}
        </div>

        <div className="grid gap-2">
          <label className="font-medium" htmlFor="when">
            When do you need it?
          </label>
          <input
            id="when"
            className="rounded-md border px-3 py-2 dark:border-gray-700 dark:bg-transparent"
            value={form.when}
            onChange={(e) => updateField("when", e.target.value)}
            onBlur={() => setTouched((prev) => ({ ...prev, when: true }))}
            placeholder="Tomorrow after 5pm"
          />
          {shouldShowError("when") && errors.when && (
            <p className="text-sm text-red-600 dark:text-red-400">
              {errors.when}
            </p>
          )}
        </div>

        {submittedOnce && !isValid && (
          <p className="text-sm text-red-600 dark:text-red-400">
            Please fix the errors above to submit.
          </p>
        )}

        <button
          type="submit"
          className="w-full rounded-md bg-black px-6 py-3 text-white font-medium transition hover:bg-gray-800"
        >
          Submit request
        </button>
      </form>
    </main>
  );
}
