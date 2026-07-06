"use client";

import { useActionState } from "react";
import { useFormStatus } from "react-dom";
import { submitContact, type ContactState } from "@/app/actions/contact";

const initialState: ContactState = { ok: false, message: "" };

const inputClass =
  "w-full rounded-lg border border-gray-300 px-4 py-3 text-base text-black focus:border-[#eebc51] focus:outline-none focus:ring-2 focus:ring-[#eebc51]/30 transition-colors";
const labelClass = "block text-sm font-medium text-gray-700 mb-1.5";
const errorClass = "mt-1 text-sm text-red-600";

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      disabled={pending}
      className="w-full rounded-lg bg-[#eebc51] px-6 py-3.5 text-lg font-semibold text-white transition-opacity hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-60"
    >
      {pending ? "Sending…" : "Send message"}
    </button>
  );
}

const ContactForm = () => {
  const [state, formAction] = useActionState(submitContact, initialState);
  const errors = state.errors ?? {};

  if (state.ok) {
    return (
      <div
        role="status"
        className="rounded-lg border border-green-200 bg-green-50 p-8 text-center"
      >
        <h3 className="text-2xl font-serif text-green-800">Message sent</h3>
        <p className="mt-2 text-green-700">{state.message}</p>
      </div>
    );
  }

  return (
    <form action={formAction} className="space-y-5" noValidate>
      {state.message && !state.ok && (
        <p
          role="alert"
          className="rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700"
        >
          {state.message}
        </p>
      )}

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="firstName" className={labelClass}>
            First name
          </label>
          <input
            id="firstName"
            name="firstName"
            type="text"
            autoComplete="given-name"
            required
            maxLength={80}
            className={inputClass}
            aria-invalid={!!errors.firstName}
          />
          {errors.firstName && <p className={errorClass}>{errors.firstName}</p>}
        </div>
        <div>
          <label htmlFor="lastName" className={labelClass}>
            Last name
          </label>
          <input
            id="lastName"
            name="lastName"
            type="text"
            autoComplete="family-name"
            required
            maxLength={80}
            className={inputClass}
            aria-invalid={!!errors.lastName}
          />
          {errors.lastName && <p className={errorClass}>{errors.lastName}</p>}
        </div>
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="email" className={labelClass}>
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            required
            maxLength={160}
            className={inputClass}
            aria-invalid={!!errors.email}
          />
          {errors.email && <p className={errorClass}>{errors.email}</p>}
        </div>
        <div>
          <label htmlFor="phone" className={labelClass}>
            Phone <span className="text-gray-400">(optional)</span>
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            maxLength={40}
            className={inputClass}
            aria-invalid={!!errors.phone}
          />
          {errors.phone && <p className={errorClass}>{errors.phone}</p>}
        </div>
      </div>

      <div>
        <label htmlFor="address" className={labelClass}>
          Property address <span className="text-gray-400">(optional)</span>
        </label>
        <input
          id="address"
          name="address"
          type="text"
          autoComplete="street-address"
          maxLength={200}
          className={inputClass}
          aria-invalid={!!errors.address}
        />
        {errors.address && <p className={errorClass}>{errors.address}</p>}
      </div>

      <div>
        <label htmlFor="message" className={labelClass}>
          How can we help?
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          maxLength={2000}
          className={`${inputClass} resize-y`}
          aria-invalid={!!errors.message}
        />
        {errors.message && <p className={errorClass}>{errors.message}</p>}
      </div>

      {/* Honeypot: hidden from users, hidden from AT, catches bots. */}
      <div className="hidden" aria-hidden="true">
        <label htmlFor="company">Company</label>
        <input
          id="company"
          name="company"
          type="text"
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      <SubmitButton />

      <p className="text-center text-xs text-gray-400">
        We&apos;ll only use your details to respond to your request.
      </p>
    </form>
  );
};

export default ContactForm;
