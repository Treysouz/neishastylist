/**
 * Asset data from Hygraph query response
 **/
export interface HygraphAsset {
  url: string;
}

export type ServiceType = "Styling" | "Haircuts" | "Hair Treatments" | "Nails";

/**
 * Service data from Hygraph query response
 **/
export interface Service {
  id: string;
  name: string;
  type: ServiceType;
}

/**
 * Employee data from Hygraph query response
 **/
export interface Employee {
  id: string;
  name: string;
  role: string;
  social: string;
}
