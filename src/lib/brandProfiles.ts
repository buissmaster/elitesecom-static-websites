/**
 * Verified brand profiles — only add URLs here once the profile is live.
 * These feed Organization schema (sameAs) for EEAT and branded search.
 */
export const BRAND = {
  name: "Elitesecom",
  productName: "EliteOMS",
  legalName: "Elitesecom",
  website: "https://www.elitesecom.ai",
  email: "contact@elitesecom.ai",
  phone: "+91-94038-93414",
} as const;

/** Live profiles — included in JSON-LD sameAs */
export const VERIFIED_PROFILES = {
  linkedin: "https://www.linkedin.com/company/elitesecom/",
  facebook: "https://www.facebook.com/people/Elitesecomai/61574797291262/",
  instagram: "https://instagram.com/elitesecom.ai",
  youtube: "https://youtube.com/@elitesecom",
} as const;

export const SAME_AS_URLS: string[] = Object.values(VERIFIED_PROFILES);

/**
 * Phase 1 authority profiles — add to VERIFIED_PROFILES once created.
 * Do NOT add placeholder URLs to schema (Google may treat them as soft 404s).
 */
export const PHASE_1_PROFILE_TARGETS = [
  "Google Business Profile",
  "LinkedIn Company Page",
  "Crunchbase",
  "Product Hunt",
  "GitHub Organization",
  "YouTube Channel",
  "G2",
  "Capterra",
] as const;

/** Topical authority topics for Organization knowsAbout (EEAT) */
export const KNOWS_ABOUT_TOPICS = [
  "Order Management System",
  "Ecommerce Order Management",
  "Multichannel Order Management",
  "Payment Reconciliation",
  "Return Reconciliation",
  "Inventory Management Software",
  "Warehouse Management System",
  "Marketplace Order Management",
  "Amazon Seller Operations",
  "Flipkart Seller Operations",
  "Ecommerce SaaS",
] as const;

export type SocialProfileKey = keyof typeof VERIFIED_PROFILES;

export interface SocialLink {
  key: SocialProfileKey;
  href: string;
  label: string;
}

export const FOOTER_SOCIAL_LINKS: SocialLink[] = [
  { key: "linkedin", href: VERIFIED_PROFILES.linkedin, label: "LinkedIn" },
  { key: "youtube", href: VERIFIED_PROFILES.youtube, label: "YouTube" },
  { key: "instagram", href: VERIFIED_PROFILES.instagram, label: "Instagram" },
  { key: "facebook", href: VERIFIED_PROFILES.facebook, label: "Facebook" },
];
