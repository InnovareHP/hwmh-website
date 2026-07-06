"use server";

import { Resend } from "resend";
import { contactSchema } from "@/lib/contact-schema";
import { renderContactNotification } from "@/lib/emails/contact-notification";

export type ContactState = {
  ok: boolean;
  message: string;
  errors?: Record<string, string>;
};

const resend = new Resend(process.env.RESEND_API_KEY);

export async function submitContact(
  _prev: ContactState,
  formData: FormData
): Promise<ContactState> {
  const parsed = contactSchema.safeParse({
    firstName: formData.get("firstName"),
    lastName: formData.get("lastName"),
    email: formData.get("email"),
    phone: formData.get("phone"),
    address: formData.get("address"),
    message: formData.get("message"),
    company: formData.get("company"),
  });

  if (!parsed.success) {
    const errors: Record<string, string> = {};
    for (const issue of parsed.error.issues) {
      const key = issue.path[0];
      if (typeof key === "string" && !errors[key]) errors[key] = issue.message;
    }
    return {
      ok: false,
      message: "Please fix the highlighted fields.",
      errors,
    };
  }

  const { company, ...data } = parsed.data;

  // Honeypot tripped — pretend success so bots get no signal.
  if (company) {
    return { ok: true, message: "Thanks! We'll be in touch soon." };
  }

  // Comma-separated list of recipients.
  const to = (process.env.CONTACT_EMAIL_TO ?? "")
    .split(",")
    .map((addr) => addr.trim())
    .filter(Boolean);
  const from = process.env.CONTACT_EMAIL_FROM;

  if (to.length === 0 || !from || !process.env.RESEND_API_KEY) {
    console.error("Contact form email is not configured (missing env vars).");
    return {
      ok: false,
      message: "Something went wrong on our end. Please call us at (269) 217-1123.",
    };
  }

  const { subject, html, text } = renderContactNotification(data);

  try {
    const { error } = await resend.emails.send({
      from,
      to,
      subject,
      html,
      text,
      replyTo: data.email,
    });

    if (error) {
      console.error("Resend error:", error);
      return {
        ok: false,
        message: "We couldn't send your message. Please try again shortly.",
      };
    }
  } catch (err) {
    console.error("Contact form send failed:", err);
    return {
      ok: false,
      message: "We couldn't send your message. Please try again shortly.",
    };
  }

  return { ok: true, message: "Thanks! We'll be in touch soon." };
}
