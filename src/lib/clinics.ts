import {
  DEFAULT_COORDS,
  DEFAULT_CITY,
  REGION_GROUPS,
  DRIVE_THRESHOLD_KM,
  DRIVE_SPEED_KMH,
  FLIGHT_SPEED_KMH,
  FLIGHT_ORIGIN,
} from "./constants";

export interface ClinicAddress {
  line1?: string;
  city: string;
  region: string;
  postal_code?: string;
  country: string;
}

export interface ClinicContact {
  phone?: string;
  website?: string;
}

export interface ClinicReviews {
  rating: number;
  reviewCount: number;
  googleUrl?: string;
  sampleReviews: string[];
}

export interface Clinic {
  id: string;
  name: string;
  country_code: string;
  region_code: string;
  modalities: string[];
  address: ClinicAddress;
  contact: ClinicContact;
  coordinates: { lat: number; lng: number };
  reviews: ClinicReviews;
  priceRange?: {
    low: number;
    high: number;
    currency: string;
  };
}

/**
 * Haversine formula: calculates distance in km between two coordinates
 */
export function haversineKm(
  lat1: number,
  lon1: number,
  lat2: number,
  lon2: number
): number {
  const R = 6371;
  const dLat = ((lat2 - lat1) * Math.PI) / 180;
  const dLon = ((lon2 - lon1) * Math.PI) / 180;
  const a =
    Math.sin(dLat / 2) ** 2 +
    Math.cos((lat1 * Math.PI) / 180) *
      Math.cos((lat2 * Math.PI) / 180) *
      Math.sin(dLon / 2) ** 2;
  return R * 2 * Math.asin(Math.sqrt(a));
}

/**
 * Get display string for travel distance/time from a reference city
 */
export function getTravelDisplay(
  distanceKm: number,
  userCity: string = DEFAULT_CITY
): string {
  if (distanceKm < 10) return `In ${userCity}`;
  if (distanceKm < DRIVE_THRESHOLD_KM) {
    const hours = Math.round(distanceKm / DRIVE_SPEED_KMH);
    if (hours === 0) return `Near ${userCity}`;
    return `~${hours}h drive from ${userCity}`;
  }
  const hours = Math.round(distanceKm / FLIGHT_SPEED_KMH);
  return `~${hours}h flight from ${FLIGHT_ORIGIN}`;
}

/**
 * Compute distance from default location for a clinic
 */
export function getClinicDistance(clinic: Clinic): number {
  return haversineKm(
    DEFAULT_COORDS.lat,
    DEFAULT_COORDS.lng,
    clinic.coordinates.lat,
    clinic.coordinates.lng
  );
}

/**
 * Filter clinics by scan type modality
 */
export function filterByModality(
  clinics: Clinic[],
  selectedScanType: string | null
): Clinic[] {
  if (!selectedScanType || selectedScanType === "unsure") return clinics;
  return clinics.filter((c) => c.modalities.includes(selectedScanType));
}

/**
 * Filter clinics by selected regions
 */
export function filterByRegion(
  clinics: Clinic[],
  selectedRegions: string[]
): Clinic[] {
  const allowedCodes = selectedRegions.flatMap((r) => REGION_GROUPS[r] || []);
  return clinics.filter((c) => allowedCodes.includes(c.region_code));
}

/**
 * Sort clinics by distance from default location
 */
export function sortByDistance(clinics: Clinic[]): Clinic[] {
  return [...clinics].sort(
    (a, b) => getClinicDistance(a) - getClinicDistance(b)
  );
}

/**
 * Full filter + sort pipeline
 */
export function getFilteredClinics(
  clinics: Clinic[],
  scanType: string | null,
  selectedRegions: string[]
): Clinic[] {
  const filtered = filterByRegion(
    filterByModality(clinics, scanType),
    selectedRegions
  );
  return sortByDistance(filtered);
}

/**
 * Format address display, handling missing fields gracefully
 */
export function formatAddress(address: ClinicAddress): string {
  return [address.line1, address.city, address.region]
    .filter(Boolean)
    .join(", ");
}

/**
 * Construct Google Maps review URL from clinic data
 */
export function getReviewUrl(clinic: Clinic): string {
  return (
    clinic.reviews.googleUrl ||
    `https://www.google.com/maps/search/${encodeURIComponent(
      clinic.name + " " + clinic.address.city
    )}`
  );
}
