export type SkillCategory = {
  label: string;
  items: string[];
};

export const skills: SkillCategory[] = [
  { label: 'Languages', items: ['Python', 'Java'] },
  { label: 'Data Platforms', items: ['PySpark', 'Snowflake', 'Iceberg', 'Delta Lake', 'Kafka', 'Redis', 'ElasticSearch', 'MySQL'] },
  { label: 'Cloud & IaC', items: ['Amazon Web Services', 'Ansible', 'Terraform'] },
  { label: 'Observability', items: ['Splunk', 'CloudWatch', 'Datadog'] },
  { label: 'AI Tooling', items: ['Claude Code', 'OpenCode'] },
];
