"use client";

import { FormEvent, useState } from "react";

const apiUrl = process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:4000";

const fields = [
  { name: "name", label: "Your Name", placeholder: "Your Name", icon: "user", required: true },
  { name: "email", label: "Email", placeholder: "Your Email Address", icon: "mail", required: false },
  { name: "phone", label: "Phone", placeholder: "Your Phone", icon: "phone", required: true },
  { name: "movingType", label: "Moving Type", placeholder: "Moving Type", icon: "truck", required: true },
  { name: "movingFrom", label: "Moving From", placeholder: "Moving From", icon: "pin", required: true },
  { name: "movingTo", label: "Moving To", placeholder: "Moving To", icon: "pin", required: true },
] as const;

export function QuoteForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    setStatus("loading");
    setMessage("");

    const formData = new FormData(form);
    const payload = Object.fromEntries(formData.entries());

    try {
      const response = await fetch(`${apiUrl}/api/leads/jaipur-movers`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...payload,
          page: typeof window !== "undefined" ? window.location.href : "website",
        }),
      });

      if (!response.ok) {
        const errorBody = await response.json().catch(() => null);
        throw new Error(errorBody?.message ?? "Failed");
      }

      form.reset();
      setStatus("success");
      setMessage("Thank you! Your enquiry has been sent.");
    } catch (error) {
      setStatus("error");
      setMessage(error instanceof Error ? error.message : "Sorry, enquiry send nahi hui. Please call/WhatsApp.");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="grid items-end gap-4 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-[1fr_1fr_1fr_1fr_1fr_1fr_1fr]">
      {fields.map((field) => (
        <Input
          key={field.name}
          name={field.name}
          label={field.label}
          placeholder={field.placeholder}
          icon={field.icon}
          required={field.required}
        />
      ))}
      <button
        disabled={status === "loading"}
        className="flex min-h-14 items-center justify-center gap-3 rounded-xl bg-black px-5 text-base font-black uppercase text-white shadow-2xl shadow-red-950/30 transition hover:-translate-y-0.5 hover:bg-slate-900 disabled:cursor-not-allowed disabled:opacity-70 md:col-span-2 lg:col-span-4 xl:col-span-1"
      >
        <Icon name="send" className="h-6 w-6 text-white" />
        {status === "loading" ? "Sending..." : "Submit"}
      </button>
      {message ? (
        <p className={`rounded-xl px-4 py-3 text-sm font-black md:col-span-2 lg:col-span-4 xl:col-span-7 ${status === "success" ? "bg-white text-emerald-700" : "bg-white text-red-700"}`}>
          {message}
        </p>
      ) : null}
    </form>
  );
}

function Input({
  label,
  placeholder,
  icon,
  name,
  required,
}: {
  label: string;
  placeholder: string;
  icon: string;
  name: string;
  required?: boolean;
}) {
  return (
    <label className="grid gap-2">
      <span className="text-sm font-black text-white lg:text-base">{label}</span>
      <span className="flex min-h-14 overflow-hidden rounded-xl bg-white shadow-xl shadow-red-950/10 ring-1 ring-white/20">
        <span className="grid w-12 shrink-0 place-items-center bg-slate-50 text-slate-800">
          <Icon name={icon} className="h-5 w-5" />
        </span>
        <input
          name={name}
          required={required}
          className="w-full min-w-0 bg-white px-3 text-sm font-semibold text-slate-900 outline-none placeholder:text-sm placeholder:font-semibold placeholder:text-slate-500"
          placeholder={placeholder}
        />
      </span>
    </label>
  );
}

function Icon({ name, className = "h-6 w-6" }: { name: string; className?: string }) {
  const common = {
    className,
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
  };

  if (name === "phone") return <svg {...common}><path d="M6.6 10.8c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.59.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1C10.61 21 3 13.39 3 4c0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.26.2 2.47.57 3.59.11.35.03.74-.25 1.02l-2.22 2.19Z" fill="currentColor"/></svg>;
  if (name === "mail") return <svg {...common}><path d="M4 6h16a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2Zm8 7 8-5H4l8 5Zm0 2L4 10v6h16v-6l-8 5Z" fill="currentColor"/></svg>;
  if (name === "pin") return <svg {...common}><path d="M12 2a7 7 0 0 0-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 0 0-7-7Zm0 9.5A2.5 2.5 0 1 1 12 6a2.5 2.5 0 0 1 0 5.5Z" fill="currentColor"/></svg>;
  if (name === "truck") return <svg {...common}><path d="M3 5h12v9h1.5l2-3H21v6h-2a3 3 0 0 1-6 0H9a3 3 0 0 1-6 0H1V7a2 2 0 0 1 2-2Zm3 13.5A1.5 1.5 0 1 0 6 15a1.5 1.5 0 0 0 0 3.5Zm10 0A1.5 1.5 0 1 0 16 15a1.5 1.5 0 0 0 0 3.5Z" fill="currentColor"/></svg>;
  if (name === "send") return <svg {...common}><path d="m21.5 3.2-6.8 17.1c-.3.8-1.4.9-1.9.2l-3.6-5.1-5.1-3.6c-.7-.5-.6-1.6.2-1.9L21.4 3c.1 0 .2.1.1.2ZM7 11.2l3.5 2.4 2.4 3.5 4.1-10-10 4.1Z" fill="currentColor"/></svg>;
  return <svg {...common}><path d="M12 12a5 5 0 1 0-5-5 5 5 0 0 0 5 5Zm0 2c-5 0-9 2.5-9 5.5A1.5 1.5 0 0 0 4.5 21h15a1.5 1.5 0 0 0 1.5-1.5C21 16.5 17 14 12 14Z" fill="currentColor"/></svg>;
}
