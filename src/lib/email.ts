export const CONTACT_EMAIL = "melayapalo@gmail.com";

export function mailto(subject: string, body?: string): string {
  let url = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}`;
  if (body) url += `&body=${encodeURIComponent(body)}`;
  return url;
}
