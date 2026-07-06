import { z } from "zod";

// Matches ASCII control characters (0x00-0x1F and 0x7F).
// eslint-disable-next-line no-control-regex
const CONTROL_CHARS = /[\x00-\x1F\x7F]/g;
const HTML_TAGS = /<[^>]*>/g;

/**
 * Strip anything that looks like markup, remove control characters, and
 * collapse whitespace. Defense-in-depth: values are also HTML-escaped again
 * at render time in the email template.
 */
export function sanitizeText(value: unknown): string {
  if (typeof value !== "string") return "";
  return value
    .replace(HTML_TAGS, "")
    .replace(CONTROL_CHARS, "")
    .replace(/\s+/g, " ")
    .trim();
}

const name = z
  .string()
  .transform(sanitizeText)
  .pipe(z.string().min(1, "Required").max(80, "Too long"));

const optionalText = (max: number) =>
  z
    .string()
    .optional()
    .transform((v) => sanitizeText(v ?? ""))
    .pipe(z.string().max(max, "Too long"));

export const contactSchema = z.object({
  firstName: name,
  lastName: name,
  email: z
    .string()
    .transform((v) => sanitizeText(v).toLowerCase())
    .pipe(z.string().email("Enter a valid email").max(160)),
  phone: optionalText(40),
  address: optionalText(200),
  message: z
    .string()
    .transform(sanitizeText)
    .pipe(z.string().min(1, "Required").max(2000, "Too long")),
  // Honeypot — real users never fill this. Must be empty.
  company: z
    .string()
    .optional()
    .transform((v) => sanitizeText(v ?? "")),
});

export type ContactInput = z.infer<typeof contactSchema>;
