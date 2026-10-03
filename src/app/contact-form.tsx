"use client";

import { useState, type FormEvent } from "react";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const values = new FormData(form);
    setStatus("sending");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: values.get("name"),
          email: values.get("email"),
          message: values.get("message"),
        }),
      });

      if (!response.ok) throw new Error("Message could not be sent");
      form.reset();
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <label>
        Your name
        <input name="name" autoComplete="name" maxLength={100} required />
      </label>
      <label>
        Email address
        <input name="email" type="email" autoComplete="email" maxLength={254} required />
      </label>
      <label>
        Message
        <textarea name="message" rows={3} maxLength={2000} required />
      </label>
      <div className="form-footer">
        <button className="button" type="submit" disabled={status === "sending"}>
          {status === "sending" ? "Sending..." : "Send message"}
          <span className="arrow" aria-hidden="true">↗</span>
        </button>
        <p className="form-status" role="status" aria-live="polite">
          {status === "sent" && "Thanks, your message has been sent."}
          {status === "error" && "Could not send right now. Please email directly instead."}
        </p>
      </div>
      <a className="email-fallback" href="mailto:yadavvikashgajraj@gmail.com">yadavvikashgajraj@gmail.com</a>
    </form>
  );
}