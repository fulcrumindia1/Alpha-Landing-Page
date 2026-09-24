import { useEffect } from "react";

const SITE_NAME = "Fulcrum-India";
const DEFAULT_TITLE = `${SITE_NAME} — Entrepreneur Guidance, Journey & Scheme Intelligence`;
const DEFAULT_DESCRIPTION =
  "Fulcrum-India helps entrepreneurs build their profile, connect with guidance, discover relevant government schemes, and track their entrepreneurial journey in one place.";

interface PageMetaOptions {
  /** Page-specific title (will be suffixed with " — Fulcrum-India") */
  title: string;
  /** Page-specific meta description */
  description?: string;
  /** Path segment for canonical URL, e.g. "/privacy". Defaults to "/" */
  path?: string;
}

/**
 * Lightweight hook for dynamic per-page SEO metadata.
 *
 * Updates `document.title`, `<meta name="description">`,
 * `<link rel="canonical">`, and Open Graph tags on mount,
 * then restores defaults on unmount.
 */
export function usePageMeta({ title, description, path = "/" }: PageMetaOptions) {
  useEffect(() => {
    const fullTitle = `${title} — ${SITE_NAME}`;
    document.title = fullTitle;

    const desc = description || DEFAULT_DESCRIPTION;
    const metaDesc = document.querySelector<HTMLMetaElement>('meta[name="description"]');
    if (metaDesc) metaDesc.content = desc;

    const ogTitle = document.querySelector<HTMLMetaElement>('meta[property="og:title"]');
    if (ogTitle) ogTitle.content = fullTitle;

    const ogDesc = document.querySelector<HTMLMetaElement>('meta[property="og:description"]');
    if (ogDesc) ogDesc.content = desc;

    const twTitle = document.querySelector<HTMLMetaElement>('meta[name="twitter:title"]');
    if (twTitle) twTitle.content = fullTitle;

    const twDesc = document.querySelector<HTMLMetaElement>('meta[name="twitter:description"]');
    if (twDesc) twDesc.content = desc;

    return () => {
      document.title = DEFAULT_TITLE;
      if (metaDesc) metaDesc.content = DEFAULT_DESCRIPTION;
      if (ogTitle) ogTitle.content = `${SITE_NAME} — Every Entrepreneur Deserves Guidance`;
      if (ogDesc) ogDesc.content = DEFAULT_DESCRIPTION;
      if (twTitle) twTitle.content = `${SITE_NAME} — Every Entrepreneur Deserves Guidance`;
      if (twDesc) twDesc.content = DEFAULT_DESCRIPTION;
    };
  }, [title, description, path]);
}
