export type ProjectPlaceholder = {
  title: string;
  description: string;
  tags: string[];
  comingSoon: true;
};

export const featuredRepos: string[] = [];

export const projectPlaceholders: ProjectPlaceholder[] = [
  {
    title: 'AI Developer Tooling',
    description: 'Automation workflows, Claude Code integrations, and developer productivity tooling built for engineering teams at scale.',
    tags: ['Claude Code', 'Python', 'Automation'],
    comingSoon: true,
  },
  {
    title: 'Data Platform Patterns',
    description: 'Reference implementations and patterns for event-driven and batch data platforms on AWS.',
    tags: ['PySpark', 'Kafka', 'AWS EMR', 'Snowflake'],
    comingSoon: true,
  },
  {
    title: 'Infrastructure Automation',
    description: 'IaC templates and scripted tooling for reliable, repeatable cloud infrastructure deployment.',
    tags: ['Terraform', 'Ansible', 'AWS'],
    comingSoon: true,
  },
];
