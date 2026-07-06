import type { ContactInput } from "@/lib/contact-schema";

/** Escape user text before dropping it into the HTML email body. */
function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

const BRAND = "#eebc51";

type NotificationData = Omit<ContactInput, "company">;

export function renderContactNotification(data: NotificationData): {
  subject: string;
  html: string;
  text: string;
} {
  const fullName = `${data.firstName} ${data.lastName}`.trim();
  const subject = `New contact form submission — ${fullName}`;

  const rows: Array<[string, string]> = [
    ["Name", fullName],
    ["Email", data.email],
    ["Phone", data.phone || "—"],
    ["Property address", data.address || "—"],
  ];

  const detailRows = rows
    .map(
      ([label, value]) => `
        <tr>
          <td style="padding:8px 0;color:#6b7280;font-size:14px;width:150px;vertical-align:top;">${escapeHtml(
            label
          )}</td>
          <td style="padding:8px 0;color:#111827;font-size:14px;font-weight:600;">${escapeHtml(
            value
          )}</td>
        </tr>`
    )
    .join("");

  const messageHtml = escapeHtml(data.message).replace(/\n/g, "<br/>");

  const html = `<!doctype html>
<html>
  <body style="margin:0;padding:0;background:#f3f4f6;font-family:Arial,Helvetica,sans-serif;">
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#f3f4f6;padding:24px 0;">
      <tr>
        <td align="center">
          <table role="presentation" width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;background:#ffffff;border-radius:12px;overflow:hidden;box-shadow:0 1px 3px rgba(0,0,0,0.08);">
            <tr>
              <td style="background:${BRAND};padding:24px 32px;">
                <h1 style="margin:0;color:#ffffff;font-size:20px;font-weight:700;">Helping With Mom&#39;s Home</h1>
                <p style="margin:4px 0 0;color:#ffffff;font-size:14px;opacity:0.9;">New consultation request</p>
              </td>
            </tr>
            <tr>
              <td style="padding:32px;">
                <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                  ${detailRows}
                </table>
                <div style="margin-top:24px;padding-top:24px;border-top:1px solid #e5e7eb;">
                  <p style="margin:0 0 8px;color:#6b7280;font-size:14px;">Message</p>
                  <p style="margin:0;color:#111827;font-size:15px;line-height:1.6;">${messageHtml}</p>
                </div>
              </td>
            </tr>
            <tr>
              <td style="padding:16px 32px;background:#f9fafb;border-top:1px solid #e5e7eb;">
                <p style="margin:0;color:#9ca3af;font-size:12px;">Reply directly to this email to reach ${escapeHtml(
                  fullName
                )}.</p>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
</html>`;

  const text = [
    `New contact form submission`,
    ``,
    `Name: ${fullName}`,
    `Email: ${data.email}`,
    `Phone: ${data.phone || "—"}`,
    `Property address: ${data.address || "—"}`,
    ``,
    `Message:`,
    data.message,
  ].join("\n");

  return { subject, html, text };
}
