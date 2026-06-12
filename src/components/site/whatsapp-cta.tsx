import { MessageCircle } from "lucide-react";
import { whatsappUrl } from "@/lib/site";

/**
 * Reusable WhatsApp CTA block.
 *
 * Usage:
 *   <WhatsAppCta />
 *   <WhatsAppCta message="Hi, I need Fe 500D — 50 MT — Delhi" label="Get Fe 500D Quote" />
 *   <WhatsAppCta size="sm" />
 *
 * Props:
 *   message?  Custom prefilled message. Defaults to the structured inquiry template.
 *   label?    Button label text. Defaults to "Send Bulk Inquiry on WhatsApp".
 *   size?     "sm" | "lg" (default "lg") — controls padding/font sizing.
 *   className? Extra Tailwind classes on the outer wrapper.
 */
export type WhatsAppCtaProps = {
  message?: string;
  label?: string;
  size?: "sm" | "lg";
  className?: string;
};

export function WhatsAppCta({
  message,
  label = "Send Bulk Inquiry on WhatsApp",
  size = "lg",
  className = "",
}: WhatsAppCtaProps) {
  const href = whatsappUrl(message);

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className={[
        "plausible-event-name=whatsapp_click",
        "group inline-flex items-center gap-3 rounded-xl",
        "border border-[#25D366]/40 bg-[#25D366]/8",
        "font-semibold text-[#25D366] transition-all",
        "hover:border-[#25D366]/70 hover:bg-[#25D366]/15",
        size === "lg"
          ? "px-7 py-4 text-base"
          : "px-5 py-2.5 text-sm",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <MessageCircle
        className={size === "lg" ? "h-5 w-5" : "h-4 w-4"}
        aria-hidden
      />
      {label}
      <span
        aria-hidden
        className="ml-1 transition-transform group-hover:translate-x-0.5"
      >
        →
      </span>
    </a>
  );
}
