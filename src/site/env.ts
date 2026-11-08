/**
 * Strict Centralized Environment Configuration
 *
 * PERMANENT RULE:
 * ZERO fallback defaults are allowed for dynamic values.
 * All dynamic endpoints, secrets, and credentials MUST be provided via .env.
 * If any required variable is missing, the application startup halts immediately.
 */

export const REQUIRED_ENV_VARS = [
  "VITE_SITE_URL",
  "VITE_SITE_NAME",
  "VITE_CONTACT_EMAIL",
  "VITE_CONTACT_PHONE_LANDLINE",
  "VITE_CONTACT_PHONE_MOBILE",
  "VITE_CONTACT_ADDRESS",
  "VITE_HUBSPOT_PORTAL_ID",
  "VITE_HUBSPOT_FORM_ID",
  "VITE_HUBSPOT_REGION",
] as const;

export type RequiredEnvVar = (typeof REQUIRED_ENV_VARS)[number];

export interface EnvValidationResult {
  isValid: boolean;
  missing: RequiredEnvVar[];
}

/**
 * Validates the presence of all required environment variables with non-empty values.
 */
export function validateEnvironment(): EnvValidationResult {
  const missing: RequiredEnvVar[] = [];

  for (const envKey of REQUIRED_ENV_VARS) {
    const val = import.meta.env[envKey];
    if (typeof val !== "string" || val.trim().length === 0) {
      missing.push(envKey);
    }
  }

  return {
    isValid: missing.length === 0,
    missing,
  };
}

/**
 * Centralized, type-safe environment configuration with strictly zero fallbacks.
 */
export const envConfig = {
  get siteUrl(): string {
    const val = import.meta.env.VITE_SITE_URL;
    if (!val || typeof val !== "string" || val.trim().length === 0) {
      throw new Error("[FATAL CONFIGURATION ERROR]: Missing required environment variable 'VITE_SITE_URL'.");
    }
    return val.trim();
  },
  get siteName(): string {
    const val = import.meta.env.VITE_SITE_NAME;
    if (!val || typeof val !== "string" || val.trim().length === 0) {
      throw new Error("[FATAL CONFIGURATION ERROR]: Missing required environment variable 'VITE_SITE_NAME'.");
    }
    return val.trim();
  },
  get contactEmail(): string {
    const val = import.meta.env.VITE_CONTACT_EMAIL;
    if (!val || typeof val !== "string" || val.trim().length === 0) {
      throw new Error("[FATAL CONFIGURATION ERROR]: Missing required environment variable 'VITE_CONTACT_EMAIL'.");
    }
    return val.trim();
  },
  get phoneLandline(): string {
    const val = import.meta.env.VITE_CONTACT_PHONE_LANDLINE;
    if (!val || typeof val !== "string" || val.trim().length === 0) {
      throw new Error("[FATAL CONFIGURATION ERROR]: Missing required environment variable 'VITE_CONTACT_PHONE_LANDLINE'.");
    }
    return val.trim();
  },
  get phoneMobile(): string {
    const val = import.meta.env.VITE_CONTACT_PHONE_MOBILE;
    if (!val || typeof val !== "string" || val.trim().length === 0) {
      throw new Error("[FATAL CONFIGURATION ERROR]: Missing required environment variable 'VITE_CONTACT_PHONE_MOBILE'.");
    }
    return val.trim();
  },
  get address(): string {
    const val = import.meta.env.VITE_CONTACT_ADDRESS;
    if (!val || typeof val !== "string" || val.trim().length === 0) {
      throw new Error("[FATAL CONFIGURATION ERROR]: Missing required environment variable 'VITE_CONTACT_ADDRESS'.");
    }
    return val.trim();
  },
  get hubspotPortalId(): string {
    const val = import.meta.env.VITE_HUBSPOT_PORTAL_ID;
    if (!val || typeof val !== "string" || val.trim().length === 0) {
      throw new Error("[FATAL CONFIGURATION ERROR]: Missing required environment variable 'VITE_HUBSPOT_PORTAL_ID'.");
    }
    return val.trim();
  },
  get hubspotFormId(): string {
    const val = import.meta.env.VITE_HUBSPOT_FORM_ID;
    if (!val || typeof val !== "string" || val.trim().length === 0) {
      throw new Error("[FATAL CONFIGURATION ERROR]: Missing required environment variable 'VITE_HUBSPOT_FORM_ID'.");
    }
    return val.trim();
  },
  get hubspotRegion(): string {
    const val = import.meta.env.VITE_HUBSPOT_REGION;
    if (!val || typeof val !== "string" || val.trim().length === 0) {
      throw new Error("[FATAL CONFIGURATION ERROR]: Missing required environment variable 'VITE_HUBSPOT_REGION'.");
    }
    return val.trim();
  },
};
