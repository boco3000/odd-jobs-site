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
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [serverError, setServerError] = useState<string | null>(null);
  const [serverFieldErrors, setServerFieldErrors] = useState<FormErrors>({});

  function updateField<K extends keyof FormState>(key: K, value: FormState[K]) {
    setServerError(null);
    setServerFieldErrors((prev) => ({ ...prev, [key]: undefined }));
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

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmittedOnce(true);
    setServerError(null);
    setServerFieldErrors({});

    const currentErrors = validate(form);
    if (Object.keys(currentErrors).length > 0) return;

    try {
      setIsSubmitting(true);

      const res = await fetch("/api/request-help", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!res.ok) {
        const body = await res.json().catch(() => null);

        if (body?.errors && typeof body.errors === "object") {
          setServerFieldErrors(body.errors);
          setSubmittedOnce(true);
          setServerError(null);
          return;
        }

        setServerError(body?.error ?? "Submission failed. Please try again.");
        return;
      }

      setServerFieldErrors({});
      setSubmitted(true);
      setForm({ name: "", email: "", location: "", task: "", when: "" });
      setTouched({});
      setSubmittedOnce(false);
    } catch {
      setServerError("Network error. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  }

  const labelClass = "font-medium";
  const inputClass =
    "rounded-md border px-3 py-2 bg-white text-gray-900 placeholder:text-gray-400 " +
    "dark:bg-transparent dark:text-gray-100 dark:placeholder:text-gray-500 dark:border-gray-700 " +
    "focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2 focus:ring-offset-white " +
    "dark:focus:ring-offset-black";
  const textareaClass = inputClass + " min-h-28";
  const errorClass = "text-sm text-red-600 dark:text-red-400";

  return (
    <main className="mx-auto max-w-2xl px-6 py-16">
      <h1 className="text-4xl font-bold tracking-tight">Request help</h1>
      <p className="mt-4 text-gray-600 dark:text-gray-300">
        Tell us what you need done. This is a demo form (no backend yet).
      </p>

      {submitted && (
        <div
        role="status" 
        className="mb-8 rounded-md border border-green-600 bg-green-50 p-4 text-green-800 dark:border-green-500 dark:bg-green-900/30 dark:text-green-200">
          <p className="font-medium">Request submitted successfully</p>
          <p className="mt-1 text-sm">
            We&apos;ll review your request and get back to you shortly.
          </p>
        </div>
      )}

      {serverError && (
        <div 
        role="alert"
        className="mb-8 rounded-md border border-red-600 bg-red-50 p-4 text-red-800 dark:border-red-500 dark:bg-red-900/30 dark:text-red-200">
          {serverError}
        </div>
      )}

      <form onSubmit={handleSubmit} className="mt-10 space-y-6">
        <div className="grid gap-2">
          <label className="font-medium" htmlFor="name">
            Your name
          </label>
          <input
            id="name"
            type="name"
            required
            className="rounded-md border px-3 py-2 dark:border-gray-700 dark:bg-transparent"
            value={form.name}
            onChange={(e) => updateField("name", e.target.value)}
            onBlur={() => setTouched((prev) => ({ ...prev, name: true }))}
            placeholder="you@example.com"
            autoComplete="name"
            aria-invalid={!!(errors.name ?? serverFieldErrors.name)}
            aria-describedby={
              (errors.name ?? serverFieldErrors.name) ? "name-error" : undefined
            }
          />

          {shouldShowError("name") &&
            (errors.name ?? serverFieldErrors.name) && (
              <p
                id="name-error"
                role="alert"
                className="text-sm text-red-600 dark:text-red-400"
              >
                {errors.name ?? serverFieldErrors.name}
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
            required
            className="rounded-md border px-3 py-2 dark:border-gray-700 dark:bg-transparent"
            value={form.email}
            onChange={(e) => updateField("email", e.target.value)}
            onBlur={() => setTouched((prev) => ({ ...prev, email: true }))}
            placeholder="you@example.com"
            autoComplete="email"
            aria-invalid={!!(errors.email ?? serverFieldErrors.email)}
            aria-describedby={
              (errors.email ?? serverFieldErrors.email)
                ? "email-error"
                : undefined
            }
          />

          {shouldShowError("email") &&
            (errors.email ?? serverFieldErrors.email) && (
              <p
                id="email-error"
                role="alert"
                className="text-sm text-red-600 dark:text-red-400"
              >
                {errors.email ?? serverFieldErrors.email}
              </p>
            )}
        </div>

        <div className="grid gap-2">
          <label className="font-medium" htmlFor="location">
            Location (NYC neighborhood)
          </label>
          <input
            id="location"
            type="location"
            required
            className="rounded-md border px-3 py-2 dark:border-gray-700 dark:bg-transparent"
            value={form.location}
            onChange={(e) => updateField("location", e.target.value)}
            onBlur={() => setTouched((prev) => ({ ...prev, location: true }))}
            placeholder="Williamsburg, Brooklyn"
            autoComplete="location"
            aria-invalid={!!(errors.location ?? serverFieldErrors.location)}
            aria-describedby={
              (errors.location ?? serverFieldErrors.location)
                ? "location-error"
                : undefined
            }
          />

          {shouldShowError("location") &&
            (errors.location ?? serverFieldErrors.location) && (
              <p
                id="location-error"
                role="alert"
                className="text-sm text-red-600 dark:text-red-400"
              >
                {errors.location ?? serverFieldErrors.location}
              </p>
            )}
        </div>

        <div className="grid gap-2">
          <label className="font-medium" htmlFor="task">
            What do you need done?
          </label>

          <textarea
            id="task"
            required
            className="min-h-28 rounded-md border px-3 py-2 dark:border-gray-700 dark:bg-transparent"
            value={form.task}
            onChange={(e) => updateField("task", e.target.value)}
            onBlur={() => setTouched((prev) => ({ ...prev, task: true }))}
            placeholder="Example: assemble an IKEA dresser and mount a mirror."
            aria-invalid={!!(errors.task ?? serverFieldErrors.task)}
            aria-describedby={
              (errors.task ?? serverFieldErrors.task) ? "task-error" : undefined
            }
          />

          {shouldShowError("task") &&
            (errors.task ?? serverFieldErrors.task) && (
              <p
                id="task-error"
                role="alert"
                className="text-sm text-red-600 dark:text-red-400"
              >
                {errors.task ?? serverFieldErrors.task}
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
          {shouldShowError("when") &&
            (errors.when ?? serverFieldErrors.when) && (
              <p className="text-sm text-red-600 dark:text-red-400">
                {errors.when ?? serverFieldErrors.when}
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
          disabled={isSubmitting}
          className="w-full rounded-md bg-black px-6 py-3 text-white font-medium transition hover:bg-gray-800 disabled:cursor-not-allowed disabled:opacity-50"
        >
          {isSubmitting ? "Submitting..." : "Submit request"}
        </button>
      </form>
    </main>
  );
}
