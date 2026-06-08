export type Property = {
  id: string;
  title: string;
  type: "Apartment" | "Villa" | "Plot" | "Office" | "Shop" | "Penthouse";
  listing: "Buy" | "Rent" | "Commercial" | "New Project";
  price: number; // in INR
  pricePer?: string;
  bhk?: number;
  area: number; // sqft
  city: string;
  locality: string;
  image: string;
  gallery?: string[];
  verified: boolean;
  featured?: boolean;
  builder?: string;
  agent: string;
  amenities: string[];
  postedDays: number;
  rating: number;
  views: number;
  description: string;
};

const img = (id: string) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=1200&q=70`;

export const properties: Property[] = [
  {
    id: "p-001",
    title: "Skyline Penthouse with Private Terrace",
    type: "Penthouse",
    listing: "Buy",
    price: 48500000,
    bhk: 4,
    area: 3850,
    city: "Mumbai",
    locality: "Bandra West",
    image: img("1600585154340-be6161a56a0c"),
    gallery: [img("1600585154340-be6161a56a0c"), img("1600566753190-17f0baa2a6c3"), img("1613490493576-7fde63acd811")],
    verified: true,
    featured: true,
    builder: "Lodha Group",
    agent: "Anika Mehra",
    amenities: ["Private Pool", "Sky Lounge", "Concierge", "EV Charging"],
    postedDays: 2,
    rating: 4.9,
    views: 12480,
    description: "A double-height penthouse with curated interiors, panoramic Arabian Sea views and a 1,200 sqft entertaining terrace.",
  },
  {
    id: "p-002",
    title: "Cliffside Villa, Designed by Studio Lotus",
    type: "Villa",
    listing: "Buy",
    price: 72000000,
    bhk: 5,
    area: 6200,
    city: "Goa",
    locality: "Assagao",
    image: img("1613490493576-7fde63acd811"),
    verified: true,
    featured: true,
    builder: "Isprava",
    agent: "Karan Shetty",
    amenities: ["Infinity Pool", "Wine Cellar", "Home Office", "Garden"],
    postedDays: 5,
    rating: 4.8,
    views: 8421,
    description: "An architecturally significant retreat carved into a laterite cliff with a 60ft infinity edge pool.",
  },
  {
    id: "p-003",
    title: "Editorial Loft in the Arts District",
    type: "Apartment",
    listing: "Rent",
    price: 185000,
    pricePer: "/ month",
    bhk: 3,
    area: 2100,
    city: "Bengaluru",
    locality: "Indiranagar",
    image: img("1505691938895-1758d7feb511"),
    verified: true,
    builder: "Prestige",
    agent: "Riya Kapoor",
    amenities: ["Concierge", "Co-working", "Gym", "Pet Friendly"],
    postedDays: 1,
    rating: 4.7,
    views: 5210,
    description: "Industrial-luxe loft with 14ft ceilings, oak floors and a curated furniture package by Beyond Designs.",
  },
  {
    id: "p-004",
    title: "Grade-A Office Floor with River Views",
    type: "Office",
    listing: "Commercial",
    price: 320,
    pricePer: "/ sqft / mo",
    area: 18500,
    city: "Gurgaon",
    locality: "Cyber Hub",
    image: img("1497366216548-37526070297c"),
    verified: true,
    agent: "Rohan Iyer",
    amenities: ["LEED Platinum", "End-of-trip", "Cafeteria", "DG Backup"],
    postedDays: 7,
    rating: 4.6,
    views: 3120,
    description: "Full-floor warm-shell offering with 4.2m slab-to-slab and 70% efficiency on the leasable plate.",
  },
  {
    id: "p-005",
    title: "Linear House — A Quiet Modernist Plot",
    type: "Plot",
    listing: "Buy",
    price: 21500000,
    area: 4800,
    city: "Pune",
    locality: "Koregaon Park",
    image: img("1600596542815-ffad4c1539a9"),
    verified: false,
    agent: "Devika Rao",
    amenities: ["Gated", "Clear Title", "Corner Plot"],
    postedDays: 14,
    rating: 4.4,
    views: 980,
    description: "Rare 4,800 sqft east-facing plot inside a low-density gated enclave with mature canopy.",
  },
  {
    id: "p-006",
    title: "The Mews — Garden Townhouses",
    type: "Villa",
    listing: "New Project",
    price: 38500000,
    bhk: 4,
    area: 4100,
    city: "Hyderabad",
    locality: "Kokapet",
    image: img("1600047509807-ba8f99d2cdde"),
    verified: true,
    featured: true,
    builder: "Aparna Constructions",
    agent: "Meera Naidu",
    amenities: ["Private Garden", "Clubhouse", "Tennis Court", "Concierge"],
    postedDays: 3,
    rating: 4.8,
    views: 6710,
    description: "A limited collection of 28 garden townhouses across 9 acres, RERA-approved, possession Q3 2026.",
  },
  {
    id: "p-007",
    title: "High-Street Retail Shop, Park Street",
    type: "Shop",
    listing: "Commercial",
    price: 95000,
    pricePer: "/ month",
    area: 850,
    city: "Kolkata",
    locality: "Park Street",
    image: img("1582407947304-fd86f028f716"),
    verified: true,
    agent: "Aakash Banerjee",
    amenities: ["High Footfall", "Glass Frontage", "24x7"],
    postedDays: 9,
    rating: 4.5,
    views: 2140,
    description: "Ground-floor retail on Kolkata's most coveted high street, ready for fit-out.",
  },
  {
    id: "p-008",
    title: "Garden Apartment in a Heritage Block",
    type: "Apartment",
    listing: "Buy",
    price: 28500000,
    bhk: 3,
    area: 2450,
    city: "Delhi",
    locality: "Sundar Nagar",
    image: img("1502672260266-1c1ef2d93688"),
    verified: true,
    agent: "Vikram Anand",
    amenities: ["Private Garden", "Servant Quarter", "Power Backup"],
    postedDays: 6,
    rating: 4.7,
    views: 4310,
    description: "Restored ground-floor residence in one of Lutyens' most discreet enclaves.",
  },
];

export const cities = ["Mumbai", "Bengaluru", "Delhi NCR", "Pune", "Hyderabad", "Goa", "Kolkata", "Chennai"];

export const builders = [
  { id: "b-1", name: "Lodha Group", projects: 142, rating: 4.7, city: "Mumbai", est: 1980 },
  { id: "b-2", name: "Prestige Estates", projects: 218, rating: 4.6, city: "Bengaluru", est: 1986 },
  { id: "b-3", name: "DLF", projects: 312, rating: 4.5, city: "Delhi NCR", est: 1946 },
  { id: "b-4", name: "Godrej Properties", projects: 184, rating: 4.7, city: "Mumbai", est: 1990 },
  { id: "b-5", name: "Isprava", projects: 48, rating: 4.9, city: "Goa", est: 2014 },
  { id: "b-6", name: "Aparna Constructions", projects: 71, rating: 4.6, city: "Hyderabad", est: 1996 },
];

export const agents = [
  { id: "a-1", name: "Anika Mehra", city: "Mumbai", deals: 142, rating: 4.9, specialty: "Luxury Residential", since: 2014, avatar: "https://i.pravatar.cc/200?img=47" },
  { id: "a-2", name: "Karan Shetty", city: "Goa", deals: 86, rating: 4.8, specialty: "Holiday Homes", since: 2017, avatar: "https://i.pravatar.cc/200?img=12" },
  { id: "a-3", name: "Riya Kapoor", city: "Bengaluru", deals: 211, rating: 4.7, specialty: "Premium Rentals", since: 2012, avatar: "https://i.pravatar.cc/200?img=45" },
  { id: "a-4", name: "Rohan Iyer", city: "Gurgaon", deals: 64, rating: 4.6, specialty: "Commercial Leasing", since: 2016, avatar: "https://i.pravatar.cc/200?img=33" },
  { id: "a-5", name: "Meera Naidu", city: "Hyderabad", deals: 124, rating: 4.8, specialty: "New Projects", since: 2015, avatar: "https://i.pravatar.cc/200?img=49" },
  { id: "a-6", name: "Vikram Anand", city: "Delhi", deals: 178, rating: 4.7, specialty: "Lutyens & Central Delhi", since: 2010, avatar: "https://i.pravatar.cc/200?img=15" },
];

export type Lead = {
  id: string;
  name: string;
  email: string;
  phone: string;
  property: string;
  city: string;
  stage: "New" | "Contacted" | "Interested" | "Site Visit" | "Negotiation" | "Booking" | "Closed";
  score: number;
  source: "Website" | "WhatsApp" | "Referral" | "Ads" | "Partner";
  budget: number;
  assignedTo: string;
  updatedAt: string;
};

export const leads: Lead[] = [
  { id: "l-1", name: "Ishaan Verma", email: "ishaan@verma.in", phone: "+91 98201 22345", property: "Skyline Penthouse", city: "Mumbai", stage: "Negotiation", score: 92, source: "Website", budget: 50000000, assignedTo: "Anika Mehra", updatedAt: "2h ago" },
  { id: "l-2", name: "Priya Sundaram", email: "priya.s@gmail.com", phone: "+91 99000 11221", property: "Editorial Loft", city: "Bengaluru", stage: "Site Visit", score: 78, source: "WhatsApp", budget: 22000000, assignedTo: "Riya Kapoor", updatedAt: "5h ago" },
  { id: "l-3", name: "Aditya Rao", email: "adi@rao.co", phone: "+91 88800 32109", property: "Cliffside Villa", city: "Goa", stage: "Interested", score: 84, source: "Referral", budget: 80000000, assignedTo: "Karan Shetty", updatedAt: "1d ago" },
  { id: "l-4", name: "Nisha Bhatt", email: "nisha@bhatt.in", phone: "+91 90000 44188", property: "The Mews", city: "Hyderabad", stage: "Booking", score: 96, source: "Ads", budget: 42000000, assignedTo: "Meera Naidu", updatedAt: "30m ago" },
  { id: "l-5", name: "Aarav Kapoor", email: "aarav.k@me.com", phone: "+91 98765 41212", property: "Garden Apartment", city: "Delhi", stage: "Contacted", score: 65, source: "Website", budget: 30000000, assignedTo: "Vikram Anand", updatedAt: "3h ago" },
  { id: "l-6", name: "Sara Khan", email: "sara@khan.com", phone: "+91 99888 12009", property: "Linear House Plot", city: "Pune", stage: "New", score: 54, source: "Partner", budget: 25000000, assignedTo: "Devika Rao", updatedAt: "12m ago" },
  { id: "l-7", name: "Rahul Bose", email: "rahul@bose.in", phone: "+91 90909 80808", property: "Cyber Hub Office", city: "Gurgaon", stage: "Closed", score: 100, source: "Referral", budget: 60000000, assignedTo: "Rohan Iyer", updatedAt: "2d ago" },
];

export const stages: Lead["stage"][] = ["New", "Contacted", "Interested", "Site Visit", "Negotiation", "Booking", "Closed"];

export const revenueSeries = [
  { month: "Jan", revenue: 42, leads: 120 },
  { month: "Feb", revenue: 58, leads: 142 },
  { month: "Mar", revenue: 71, leads: 168 },
  { month: "Apr", revenue: 64, leads: 154 },
  { month: "May", revenue: 88, leads: 196 },
  { month: "Jun", revenue: 104, leads: 215 },
  { month: "Jul", revenue: 121, leads: 248 },
  { month: "Aug", revenue: 142, leads: 276 },
  { month: "Sep", revenue: 138, leads: 268 },
  { month: "Oct", revenue: 168, leads: 312 },
  { month: "Nov", revenue: 185, leads: 340 },
  { month: "Dec", revenue: 212, leads: 384 },
];

export const sourceMix = [
  { name: "Website", value: 42 },
  { name: "WhatsApp", value: 22 },
  { name: "Referral", value: 18 },
  { name: "Ads", value: 12 },
  { name: "Partner", value: 6 },
];

export const recentActivity = [
  { id: 1, kind: "lead", text: "New lead Ishaan Verma assigned to Anika Mehra", time: "2m" },
  { id: 2, kind: "booking", text: "Booking confirmed: The Mews #B-204", time: "21m" },
  { id: 3, kind: "visit", text: "Site visit scheduled — Cliffside Villa, Sat 11:00", time: "1h" },
  { id: 4, kind: "message", text: "WhatsApp reply from Priya Sundaram", time: "2h" },
  { id: 5, kind: "alert", text: "Price drop matched 3 saved searches", time: "4h" },
];

export function formatINR(value: number): string {
  if (value >= 10000000) return `₹${(value / 10000000).toFixed(2)} Cr`;
  if (value >= 100000) return `₹${(value / 100000).toFixed(2)} L`;
  return `₹${value.toLocaleString("en-IN")}`;
}
