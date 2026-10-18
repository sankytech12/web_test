export type TeamMember = {
  name: string;
  role: string;
  bio: string;
  initials: string;
};

export const team: TeamMember[] = [
  { name: "Aarav Shah", role: "Co-Founder & CEO", initials: "AS", bio: "Lorem ipsum dolor sit amet. 20 years building and scaling software businesses." },
  { name: "Meera Shah", role: "Co-Founder & COO", initials: "MS", bio: "Consectetur adipiscing elit. Leads delivery, client success and operations." },
  { name: "Daniel Okafor", role: "CTO", initials: "DO", bio: "Sed do eiusmod tempor. Sets technical direction across AI, web, mobile and cloud." },
  { name: "Priya Raman", role: "Head of AI", initials: "PR", bio: "Ut labore et dolore magna. Former research scientist focused on applied machine learning." },
];
