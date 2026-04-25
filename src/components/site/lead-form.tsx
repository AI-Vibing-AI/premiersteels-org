"use client";

import { useState } from "react";
import { Loader2, MessageCircle, Phone, Send } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { site, whatsappUrl } from "@/lib/site";

export function LeadForm() {
  const [submitting, setSubmitting] = useState(false);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form));

    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        throw new Error(body?.error || `Request failed (${res.status})`);
      }
      toast.success("Inquiry received. We'll be in touch within 4 hours.");
      form.reset();
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : "Could not send inquiry.";
      toast.error(msg, {
        description: "Please WhatsApp us directly so we don't miss your order.",
        action: {
          label: "WhatsApp",
          onClick: () => window.open(whatsappUrl(), "_blank"),
        },
      });
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <section
      id="contact"
      className="section-y relative overflow-hidden bg-gradient-to-b from-background to-surface"
    >
      <div className="container-page relative">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Left — pitch + alternative CTAs */}
          <div className="lg:col-span-5">
            <p className="font-mono text-xs uppercase tracking-[0.25em] text-accent">
              Bulk Quote
            </p>
            <h2 className="text-h1 mt-4">
              Tell us your tonnage.{" "}
              <span className="text-accent">We&apos;ll handle the rest.</span>
            </h2>
            <p className="mt-6 text-lg text-text-muted">
              Share your project requirement, location, and timeline. We&apos;ll respond
              within 4 working hours with a detailed quote, available stock, and
              delivery schedule.
            </p>

            <div className="mt-10 space-y-3">
              <a
                href={whatsappUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 rounded-xl border border-border bg-surface p-5 transition-colors hover:border-accent/50 hover:bg-surface-elevated"
              >
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-[#25D366]/10 text-[#25D366]">
                  <MessageCircle className="h-5 w-5" aria-hidden />
                </div>
                <div className="flex-1">
                  <p className="font-semibold">WhatsApp us directly</p>
                  <p className="text-sm text-text-muted">
                    Fastest. Average reply &lt; 30 minutes during business hours.
                  </p>
                </div>
                <span className="font-mono text-xs uppercase tracking-wider text-accent transition-transform group-hover:translate-x-1">
                  Chat →
                </span>
              </a>

              <a
                href={`tel:${site.contact.phone.replace(/\s+/g, "")}`}
                className="group flex items-center gap-4 rounded-xl border border-border bg-surface p-5 transition-colors hover:border-accent/50 hover:bg-surface-elevated"
              >
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-accent/10 text-accent">
                  <Phone className="h-5 w-5" aria-hidden />
                </div>
                <div className="flex-1">
                  <p className="font-semibold">Call sales</p>
                  <p className="font-mono text-sm text-text-muted">{site.contact.phone}</p>
                </div>
                <span className="font-mono text-xs uppercase tracking-wider text-accent transition-transform group-hover:translate-x-1">
                  Call →
                </span>
              </a>

              <div className="rounded-xl border border-border bg-surface p-5">
                <p className="text-sm font-semibold">Visit the yard</p>
                <p className="mt-1 text-sm text-text-muted">
                  {site.contact.address.street}, {site.contact.address.area},{" "}
                  {site.contact.address.city} {site.contact.address.pincode}
                </p>
                <p className="mt-2 font-mono text-xs uppercase tracking-wider text-accent">
                  {site.contact.hours}
                </p>
              </div>
            </div>
          </div>

          {/* Right — form */}
          <div className="lg:col-span-7">
            <form
              onSubmit={onSubmit}
              className="rounded-2xl border border-border bg-surface p-6 sm:p-8 lg:p-10"
            >
              <div className="grid gap-5 sm:grid-cols-2">
                <Field label="Your name" name="name" required placeholder="Full name" />
                <Field
                  label="Company"
                  name="company"
                  placeholder="Construction firm / project name"
                />
                <Field
                  label="Phone"
                  name="phone"
                  type="tel"
                  required
                  placeholder="+91 99999 99999"
                  pattern="^[+0-9 -]{8,}$"
                />
                <Field
                  label="Email"
                  name="email"
                  type="email"
                  placeholder="you@company.com"
                />
              </div>

              <div className="mt-5 grid gap-5 sm:grid-cols-2">
                <div>
                  <Label htmlFor="grade" className="font-mono text-xs uppercase tracking-wider text-text-muted">
                    Grade required
                  </Label>
                  <Select name="grade" defaultValue="Fe 500D">
                    <SelectTrigger id="grade" className="mt-2 bg-background">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {site.products.map((p) => (
                        <SelectItem key={p.grade} value={p.grade}>
                          {p.grade} — {p.bestFor.split("·")[0].trim()}
                        </SelectItem>
                      ))}
                      <SelectItem value="Mixed">Mixed grades</SelectItem>
                      <SelectItem value="Not sure">Not sure — recommend for me</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <Field
                  label="Tonnage (approx MT)"
                  name="tonnage"
                  required
                  placeholder="e.g. 25, 100, 500"
                />
              </div>

              <div className="mt-5">
                <Field
                  label="Delivery location"
                  name="location"
                  required
                  placeholder="City / project site"
                />
              </div>

              <div className="mt-5">
                <Label htmlFor="message" className="font-mono text-xs uppercase tracking-wider text-text-muted">
                  Project notes (optional)
                </Label>
                <Textarea
                  id="message"
                  name="message"
                  rows={4}
                  placeholder="Sizes needed, casting schedule, anything else we should know."
                  className="mt-2 bg-background"
                />
              </div>

              <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <p className="text-xs text-text-muted">
                  We respond within 4 working hours. No spam — your details stay with our sales team.
                </p>
                <Button
                  type="submit"
                  disabled={submitting}
                  size="lg"
                  className="bg-accent text-accent-foreground hover:bg-accent-hover"
                >
                  {submitting ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Sending…
                    </>
                  ) : (
                    <>
                      <Send className="mr-2 h-4 w-4" /> Send inquiry
                    </>
                  )}
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

type FieldProps = {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
  pattern?: string;
};

function Field({ label, name, type = "text", placeholder, required, pattern }: FieldProps) {
  return (
    <div>
      <Label htmlFor={name} className="font-mono text-xs uppercase tracking-wider text-text-muted">
        {label} {required && <span className="text-accent">*</span>}
      </Label>
      <Input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        required={required}
        pattern={pattern}
        className="mt-2 bg-background"
      />
    </div>
  );
}
