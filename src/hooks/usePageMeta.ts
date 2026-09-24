import { useEffect } from "react";
import { PRODUCT_NAME, PUBLIC_SITE_URL, SUPPORTING_MESSAGE } from "@/content/productFacts";

const DEFAULT_TITLE = `${PRODUCT_NAME} — Entrepreneur Guidance, Journey & Scheme Intelligence`;
const DEFAULT_DESCRIPTION = SUPPORTING_MESSAGE;

interface PageMetaOptions {
  /** Page-specific title (will be suffixed with " — Fulcrum-India") */
  title: string;
  /** Page-specific meta description */
  description?: string;
  /** Path segment for canonical URL, e.g. "/privacy". Defaults to "/" */
  path?: string;
}

/**
 * Lightweight hook for dynamic per-page SEO & Social metadata.
 *
 * Updates document.title, meta[name="description"], link[rel="canonical"],
 * and Open Graph/Twitter tags on mount, then restores defaults on unmount.
 */
export function usePageMeta({ title, description, path = "/" }: PageMetaOptions) {
  useEffect(() => {
    const fullTitle = `${title} — ${PRODUCT_NAME}`;
    document.title = fullTitle;

    const desc = description || DEFAULT_DESCRIPTION;
    const canonicalUrl = `${PUBLIC_SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;

    // Canonical Link
    let canonical = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.rel = "canonical";
      document.head.appendChild(canonical);
    }
    canonical.href = canonicalUrl;

    // Meta Description
    const metaDesc = document.querySelector<HTMLMetaElement>('meta[name="description"]');
    if (metaDesc) metaDesc.content = desc;

    // Open Graph
    const ogTitle = document.querySelector<HTMLMetaElement>('meta[property="og:title"]');
    if (ogTitle) ogTitle.content = fullTitle;

    const ogDesc = document.querySelector<HTMLMetaElement>('meta[property="og:description"]');
    if (ogDesc) ogDesc.content = desc;

    const ogUrl = document.querySelector<HTMLMetaElement>('meta[property="og:url"]');
    if (ogUrl) ogUrl.content = canonicalUrl;

    // Twitter
    const twTitle = document.querySelector<HTMLMetaElement>('meta[name="twitter:title"]');
    if (twTitle) twTitle.content = fullTitle;

    const twDesc = document.querySelector<HTMLMetaElement>('meta[name="twitter:description"]');
    if (twDesc) twDesc.content = desc;

    return () => {
      document.title = DEFAULT_TITLE;
      if (canonical) canonical.href = `${PUBLIC_SITE_URL}/`;
      if (metaDesc) metaDesc.content = DEFAULT_DESCRIPTION;
      if (ogTitle) ogTitle.content = `${PRODUCT_NAME} — Every Entrepreneur Deserves Guidance`;
      if (ogDesc) ogDesc.content = DEFAULT_DESCRIPTION;
      if (ogUrl) ogUrl.content = `${PUBLIC_SITE_URL}/`;
      if (twTitle) twTitle.content = `${PRODUCT_NAME} — Every Entrepreneur Deserves Guidance`;
      if (twDesc) twDesc.content = DEFAULT_DESCRIPTION;
    };
  }, [title, description, path]);
}
