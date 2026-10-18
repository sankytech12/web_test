"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { CheckCircle2, Loader2 } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { services } from "@/features/services/data/services";
import { Button } from "@/shared/components/ui/button";
import { contactSchema, type ContactInput } from "../lib/schema";

const field =
  "w-full rounded-xl border border-border bg-surface px-4 py-3 text-sm outline-none transition focus:border-accent focus:ring-2 focus:ring-accent/30";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sent" | "error">("idle");
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactInput>({ resolver: zodResolver(contactSchema) });

  async function onSubmit(values: ContactInput) {
    setStatus("idle");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      if (!res.ok) throw new Error();
      reset();
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <div className="rounded-2xl border border-border bg-surface p-10 text-center">
        <CheckCircle2 className="mx-auto mb-4 size-12 text-accent" />
        <h3 className="font-display font-bold tracking-tight text-2xl">Message received</h3>
        <p className="mt-2 text-muted">
          Thank you. A member of our team will reply within one business day.
        </p>
        <Button variant="outline" className="mt-6" onClick={() => setStatus("idle")}>
          Send another message
        </Button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      className="space-y-5 rounded-2xl border border-border bg-surface p-6 sm:p-8"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Name" error={errors.name?.message}>
          <input className={field} autoComplete="name" {...register("name")} />
        </Field>
        <Field label="Email" error={errors.email?.message}>
          <input type="email" className={field} autoComplete="email" {...register("email")} />
        </Field>
        <Field label="Company (optional)" error={errors.company?.message}>
          <input className={field} autoComplete="organization" {...register("company")} />
        </Field>
        <Field label="Service of interest" error={errors.service?.message}>
          <select className={field} defaultValue="" {...register("service")}>
            <option value="">Select a service</option>
            {services.map((s) => (
              <option key={s.slug} value={s.title}>
                {s.title}
              </option>
            ))}
          </select>
        </Field>
      </div>
      <Field label="Message" error={errors.message?.message}>
        <textarea rows={5} className={field} {...register("message")} />
      </Field>
      {/* Honeypot */}
      <input
        tabIndex={-1}
        autoComplete="off"
        aria-hidden
        className="absolute -left-[9999px]"
        {...register("website")}
      />
      {status === "error" && (
        <p role="alert" className="text-sm text-red-600">
          Something went wrong. Please try again or email us directly.
        </p>
      )}
      <Button type="submit" size="lg" disabled={isSubmitting} className="w-full sm:w-auto">
        {isSubmitting && <Loader2 className="size-4 animate-spin" />}
        {isSubmitting ? "Sending…" : "Send message"}
      </Button>
    </form>
  );
}

function Field({
  label,
  error,
  children,
}: {
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <label className="block text-sm font-medium">
      <span className="mb-1.5 block">{label}</span>
      {children}
      {error && <span className="mt-1 block text-xs font-normal text-red-600">{error}</span>}
    </label>
  );
}
