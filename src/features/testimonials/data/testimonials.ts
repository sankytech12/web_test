export type Testimonial = {
  quote: string;
  name: string;
  role: string;
};

export const testimonials: Testimonial[] = [
  { quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Shah & Shah shipped our AI assistant in ten weeks, and it paid for itself within a quarter.", name: "Jordan Ellis", role: "CEO, Northwind Retail" },
  { quote: "Sed do eiusmod tempor incididunt ut labore. Their engineers felt like an extension of our own team from day one.", name: "Sofia Marin", role: "CTO, Atlas Logistics" },
  { quote: "Ut enim ad minim veniam, quis nostrud exercitation. Rare mix of product thinking and rock-solid engineering.", name: "Kenji Watanabe", role: "VP Digital, Meridian Health" },
];
