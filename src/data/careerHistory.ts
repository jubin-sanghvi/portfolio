export type CareerHistoryItem = {
  company: string;
  role: string;
  start: string;
  end: string;
  location: string;
  summary: string;
};

export const careerHistory: CareerHistoryItem[] = [
  {
    company: 'Infosys',
    role: 'Software Engineer',
    start: 'July 2013',
    end: 'June 2015',
    location: 'Mumbai, India',
    summary: 'Built and deployed components across 3 major Siebel CRM applications in an agile environment, handling production deployments and data migrations at scale.',
  },
  {
    company: 'Directi',
    role: 'Web Solutions Specialist',
    start: 'September 2012',
    end: 'March 2013',
    location: 'Mumbai, India',
    summary: 'Resolved technical issues across chat, email, and phone. Built strategies to improve support efficiency. First exposure to operating at production scale with direct client SLA ownership.',
  },
];
