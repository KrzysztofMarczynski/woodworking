export type QuoteResult =
  | { ok: true }
  | { ok: false; reason: "missing_endpoint" | "request_failed" };

export async function submitQuoteRequest(form: HTMLFormElement): Promise<QuoteResult> {
  const endpoint = import.meta.env.VITE_QUOTE_ENDPOINT?.trim();
  if (!endpoint) return { ok: false, reason: "missing_endpoint" };

  try {
    const response = await fetch(endpoint, {
      method: "POST",
      body: new FormData(form),
      headers: { Accept: "application/json" },
    });
    return response.ok ? { ok: true } : { ok: false, reason: "request_failed" };
  } catch {
    return { ok: false, reason: "request_failed" };
  }
}

