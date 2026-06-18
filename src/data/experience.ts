export type Role = {
  title: string;
  start: string;
  end: string;
  location: string;
  type?: string;
  description: string;
};

export type CompanyEntry = {
  company: string;
  totalDuration: string;
  roles: Role[];
};

export const experience: CompanyEntry[] = [
  {
    company: 'Cisco',
    totalDuration: '6 yrs 6 mos',
    roles: [
      {
        title: 'Engineering Manager - AI Infrastructure',
        start: 'Jan 2025',
        end: 'Present',
        location: 'McKinney, Texas',
        type: 'Remote',
        description: 'I lead AI and Data Infrastructure for Duo Security. My team owns the platforms that ML scoring, AI Assistant, and security analytics products run on. The biggest project: a Snowflake-managed Iceberg Medallion lakehouse ingesting 50TB/month that retired 30 Delta Lake maintenance workflows and unblocked downstream AI features. I also co-founded the AI Guild, which moved AI-tooling adoption across our 300+ engineer org from 43% to 89% in 6 months.',
      },
      {
        title: 'Engineering Manager - Data Infrastructure',
        start: 'Jun 2021',
        end: 'Dec 2024',
        location: 'McKinney, Texas',
        type: 'Remote',
        description: 'I built Duo\'s Customer Logging Platform from scratch as an IC. This is the same system I later scaled as an EM. The platform standardized log ingestion, storage, and retrieval across Duo, cutting onboarding time from 12 weeks to 2 weeks. I also co-built an Airflow-like DAG workflow engine (2-person team) that cut S3 storage 90% and log export time from 2 hours to 10 minutes using predicate pushdown, partition filtering, and column pruning. My last project in this role was tripling ML scoring pipeline capacity from 15K to 45K customers by profiling and tuning Spark and EMR cluster performance.',
      },
      {
        title: 'Sr. Software Engineer - Data Engineering',
        start: 'Jan 2020',
        end: 'Jun 2021',
        location: 'Austin, Texas',
        type: 'On-site',
        description: 'I built Duo\'s Customer Logging Platform from scratch as an IC. This is the same system I later scaled as an EM. The platform standardized log ingestion, storage, and retrieval across Duo, cutting onboarding time from 12 weeks to 2 weeks. I also co-built an Airflow-like DAG workflow engine (2-person team) that cut S3 storage 90% and log export time from 2 hours to 10 minutes using predicate pushdown, partition filtering, and column pruning. My last project in this role was tripling ML scoring pipeline capacity from 15K to 45K customers by profiling and tuning Spark and EMR cluster performance.',
      },
    ],
  },
  {
    company: 'Aberdeen',
    totalDuration: '3 yrs 1 mo',
    roles: [
      {
        title: 'Senior Software Engineer',
        start: 'Jan 2017',
        end: 'Jan 2020',
        location: 'Greater New York City Area',
        type: 'On-site',
        description: 'I built the real-time data infrastructure that powered programmatic ad bidding at a data analytics company. My main system was an Intent Analytics Engine on AWS EMR processing 25B bid requests/day, powering the company\'s core auction revenue. I also deployed an IP Intelligence system that boosted ad click-through rates 40% week-over-week by leveraging firmographics, intent signals, and geo-location data.',
      },
    ],
  },
];
