export type ServiceArea = {
  slug: string;
  city: string;
  county: string;
  driveTimeFromCleveland: string;
  populationHint: string;
  neighborhoods?: string[];
};

export const SERVICE_AREAS: ServiceArea[] = [
  {
    slug: "cleveland",
    city: "Cleveland",
    county: "Cuyahoga",
    driveTimeFromCleveland: "Home base",
    populationHint: "Serving every Cleveland neighborhood, from Ohio City to Collinwood",
    neighborhoods: ["Ohio City", "Tremont", "Detroit-Shoreway", "Old Brooklyn", "Collinwood", "Buckeye-Shaker"],
  },
  {
    slug: "lakewood",
    city: "Lakewood",
    county: "Cuyahoga",
    driveTimeFromCleveland: "~15 min from downtown",
    populationHint: "Dense residential — think tight driveways, older homes, lots of remodels",
  },
  {
    slug: "parma",
    city: "Parma",
    county: "Cuyahoga",
    driveTimeFromCleveland: "~20 min from downtown",
    populationHint: "Ohio's 7th-largest city — heavy remodeling and roofing volume",
  },
  {
    slug: "strongsville",
    city: "Strongsville",
    county: "Cuyahoga",
    driveTimeFromCleveland: "~25 min from downtown",
    populationHint: "Growing suburb with newer builds and expanding neighborhoods",
  },
  {
    slug: "westlake",
    city: "Westlake",
    county: "Cuyahoga",
    driveTimeFromCleveland: "~25 min from downtown",
    populationHint: "Affluent west-side suburb with high remodel volume",
  },
  {
    slug: "mentor",
    city: "Mentor",
    county: "Lake",
    driveTimeFromCleveland: "~30 min east of downtown",
    populationHint: "Lake County's largest city — plenty of ranch homes and 90s builds needing updates",
  },
  {
    slug: "medina",
    city: "Medina",
    county: "Medina",
    driveTimeFromCleveland: "~35 min south of downtown",
    populationHint: "Growing bedroom community with active construction",
  },
  {
    slug: "brunswick",
    city: "Brunswick",
    county: "Medina",
    driveTimeFromCleveland: "~30 min south of downtown",
    populationHint: "Rapidly growing suburb popular with young families",
  },
  {
    slug: "avon",
    city: "Avon",
    county: "Lorain",
    driveTimeFromCleveland: "~25 min west of downtown",
    populationHint: "One of Ohio's fastest-growing suburbs — new construction everywhere",
  },
  {
    slug: "north-royalton",
    city: "North Royalton",
    county: "Cuyahoga",
    driveTimeFromCleveland: "~25 min from downtown",
    populationHint: "Established suburb with mature homes and steady remodel demand",
  },
  {
    slug: "solon",
    city: "Solon",
    county: "Cuyahoga",
    driveTimeFromCleveland: "~25 min southeast of downtown",
    populationHint: "Executive suburb with larger properties and higher-end remodels",
  },
  {
    slug: "beachwood",
    city: "Beachwood",
    county: "Cuyahoga",
    driveTimeFromCleveland: "~20 min east of downtown",
    populationHint: "Upscale east-side community with tight HOA rules — we know the drill",
  },
];

export function getServiceAreaBySlug(slug: string): ServiceArea | undefined {
  return SERVICE_AREAS.find((a) => a.slug === slug);
}
