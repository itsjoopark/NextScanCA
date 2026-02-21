// Default location: Toronto, Ontario
export const DEFAULT_COORDS = {
  lat: 43.6532,
  lng: -79.3832,
};

export const DEFAULT_CITY = "Toronto";

// Region group mapping: region filter ID -> array of province/state codes
export const REGION_GROUPS: Record<string, string[]> = {
  CA: ["QC", "AB", "SK", "NB", "NS"],
  US: ["NY", "MI"],
  ON: ["ON"],
  MX: ["QROO", "JAL"],
};

// Travel display thresholds
export const DRIVE_THRESHOLD_KM = 800;
export const DRIVE_SPEED_KMH = 100;
export const FLIGHT_SPEED_KMH = 800;
export const FLIGHT_ORIGIN = "Pearson International";

// Ontario special handling
export const ONTARIO_MIN_PRICE = "$2,500+";
export const ONTARIO_CURRENCY = "CAD";
