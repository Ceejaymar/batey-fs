"use server";

// export const runtime = "nodejs"; // ensure Node (not Edge)

import { z } from "zod";

const ContactSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, { message: "Name must be at least 2 characters" })
    .max(80),
  email: z.email({ message: "Enter a valid email" }).trim().toLowerCase(),
  message: z
    .string()
    .trim()
    .min(10, { message: "Message must be at least 10 characters" })
    .max(2000),
  company: z
    .string()
    .optional()
    .transform((v) => v ?? "")
    .refine((v) => v === "", { message: "Bots are not allowed" }),
});

type Fields = z.infer<typeof ContactSchema>;
type State = {
  ok: boolean;
  errors?: Partial<Record<keyof Fields, string[]>>;
  values?: Partial<Fields>;
  generalError?: string;
};

// Strip useActionState namespace like "1_name" -> "name", ignore $ACTION_* keys
function readForm(formData: FormData) {
  const out: Record<string, string> = {};
  for (const [k, v] of formData.entries()) {
    if (k.startsWith("$")) continue;
    const key = k.replace(/^\d+_/, "");
    out[key] = typeof v === "string" ? v : String(v);
  }
  return out;
}

export async function submitAction(
  _prev: State,
  formData: FormData
): Promise<State> {
  const data = readForm(formData);

  const parsed = ContactSchema.safeParse({
    name: data.name ?? "",
    email: data.email ?? "",
    message: data.message ?? "",
    company: data.company ?? "",
  });

  if (!parsed.success) {
    const { fieldErrors } = parsed.error.flatten();
    return {
      ok: false,
      errors: fieldErrors,
      values: {
        name: data.name ?? "",
        email: data.email ?? "",
        message: data.message ?? "",
      },
    };
  }

  const apiKey = process.env.RESEND;
  const from = process.env.CONTACT_FROM_EMAIL;
  const to = process.env.CONTACT_TO_EMAIL;

  if (!apiKey || !to) {
    return {
      ok: false,
      generalError: "Email service not configured.",
      values: parsed.data,
    };
  }

  try {
    const resp = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from,
        to: [to],
        reply_to: parsed.data.email,
        subject: `New contact from ${parsed.data.name}`,
        text: `From: ${parsed.data.name} <${parsed.data.email}>\n\n${parsed.data.message}`,
      }),
    });

    if (!resp.ok) {
      const body = await resp.text();

      return {
        ok: false,
        generalError: "Failed to send. Please try again later.",
        values: parsed.data,
      };
    }

    return { ok: true };
  } catch (e) {
    return {
      ok: false,
      generalError: "Failed to send. Please try again later.",
      values: parsed.data,
    };
  }
}
