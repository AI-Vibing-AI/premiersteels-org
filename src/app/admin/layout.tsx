import type { Metadata } from "next";

/**
 * Admin section layout — server component.
 * Exports noindex metadata so every /admin/* page is excluded from search indexes,
 * even if an external site links to it and Googlebot follows the link.
 * The robots.ts disallow rule covers crawl-discovery; this tag covers linked-page indexing.
 */
export const metadata: Metadata = {
  robots: {
    index: false,
    follow: false,
  },
};

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
