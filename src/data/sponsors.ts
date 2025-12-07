// FerrisKey Sponsors Data
export type SponsorTier = "platinum" | "gold" | "supporter";

export interface Sponsor {
  id: string;
  name: string;
  logo: string;
  website: string;
  tier: SponsorTier;
  description?: string;
  since?: string;
}

export const sponsors: Sponsor[] = [
  // Platinum Sponsors
  {
    id: "cloudiam",
    name: "Cloud-IAM",
    logo: "/sponsors/cloudiam.png",
    website: "https://eu1.hubs.ly/H0q0Kbb0",
    tier: "platinum",
    description: "Cloud Identity & Access Management",
  },

  // Gold Sponsors
  {
    id: "nudibranches",
    name: "Nudibranches Technologies",
    logo: "/sponsors/nudibranches.png",
    website: "https://nudibranches.tech",
    description: "Sovereign AI Data Platform",
    tier: "gold",
  },

  // Supporters
  {
    id: "mineral",
    name: "Mineral",
    logo: "/sponsors/mineral.png",
    website: "https://mineral-foundation.org/",
    tier: "supporter",
  },
  {
    id: "polytech-montpellier",
    name: "Polytech Montpellier",
    logo: "/sponsors/polytech-montpellier.png",
    website: "https://www.polytech.umontpellier.fr/",
    tier: "supporter",
  },
];

export const getSponsorsByTier = (tier: SponsorTier): Sponsor[] => {
  return sponsors.filter((sponsor) => sponsor.tier === tier);
};

export const getPlatinumSponsors = (): Sponsor[] => {
  return getSponsorsByTier("platinum");
};

export const getGoldSponsors = (): Sponsor[] => {
  return getSponsorsByTier("gold");
};

export const getSupporters = (): Sponsor[] => {
  return getSponsorsByTier("supporter");
};
