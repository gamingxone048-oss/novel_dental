
export interface Service {
  name: string;
  detail: string;
  icon: string;
}

export interface TeamMember {
  name: string;
  bio: string;
  image: string;
}

export const servicesData: Service[] = [
  { name: 'Prosthodontics & Full Mouth Rehabilitation', detail: 'Comprehensive solutions for dental prosthetics and full mouth reconstruction.', icon: 'M13 13v8h8v-8h-8zM3 21h8v-8H3v8zM3 3v8h8V3H3zm13.66-1.31L11 7.34 16.66 13l5.66-5.66-5.66-5.65z' },
  { name: 'Cosmetic & Aesthetic Dentistry', detail: 'Enhancing smiles through whitening, veneers, and aesthetic bonding.', icon: 'M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z' },
  { name: 'Dental Implants', detail: 'Permanent solution for missing teeth with surgical placement of titanium roots.', icon: 'M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z' },
  { name: 'Oral & Maxillofacial Surgery', detail: 'Advanced surgical procedures for jaws, face, and oral cavity, including wisdom teeth removal.', icon: 'M19 4h-3.5L12 8.5 8.5 4H5v16h14V4zM10 18H8v-2h2v2zm0-3H8v-2h2v2zm0-3H8V8h2v2zm4 6h-2v-2h2v2zm0-3h-2v-2h2v2zm0-3h-2V8h2v2z' },
  { name: 'Orthodontics (Braces / Aligners)', detail: 'Correcting misaligned teeth and jaws using braces, clear aligners, and retainers.', icon: 'M12 5.5c-4.69 0-8.5 3.81-8.5 8.5s3.81 8.5 8.5 8.5 8.5-3.81 8.5-8.5-3.81-8.5-8.5-8.5zm0 15c-3.58 0-6.5-2.92-6.5-6.5S8.42 7.5 12 7.5s6.5 2.92 6.5 6.5-2.92 6.5-6.5 6.5zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z' },
  { name: 'Periodontics (Gum Treatment)', detail: 'Treatment and prevention of gum diseases, including scaling, root planning, and flap surgery.', icon: 'M19 10c0-1.87-.8-3.59-2.09-4.72l-1.42 1.42C16.48 7.46 17 8.67 17 10c0 2.76-2.24 5-5 5s-5-2.24-5-5c0-1.33.52-2.54 1.48-3.59L6.09 5.28C4.8 6.41 4 8.13 4 10c0 4.42 3.58 8 8 8s8-3.58 8-8z' },
  { name: 'Root Canal & Endodontics', detail: 'Saving damaged teeth by removing infected pulp and sealing the root canal system.', icon: 'M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm-1 7h5.5L14 3.5V9z' },
  { name: 'General Dentistry', detail: 'Routine check-ups, fillings, and preventative care for the entire family.', icon: 'M12 11.55c-1.48-1.54-3.5-2.55-5.55-2.55C4.24 9 2 11.24 2 14s2.24 5 4.45 5c2.05 0 4.07-1.01 5.55-2.55 1.48 1.54 3.5 2.55 5.55 2.55 2.21 0 4.45-2.24 4.45-5s-2.24-5-4.45-5c-2.05 0-4.07 1.01-5.55 2.55z' },
];

export const teamMembers: TeamMember[] = [
  {
    name: "Dr. Sumeet Jain",
    bio: "Dr. Sumeet Jain is a highly skilled dental surgeon, graduated from Govt Dental College Indore, gold medalist in academics, and a fellow of renowned TMDU, Tokyo, Japan with specializations in dental implants, smile design, full mouth rehabilitation, crowns, complete denture, sleep apnea, TMJ disorders, maxillofacial prosthesis with vast experience of more than 22 years in empathetical, ethical and precise practice in dentistry.",
    image: "https://i.postimg.cc/rwwvC9Yg/42c145ca4f7a43cd8e49d4a6f763b4a7-1.jpg",
  },
];