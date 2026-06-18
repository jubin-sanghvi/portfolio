export type ExperienceEntry = {
  company: string;
  role: string;
  start: string;
  end: string;
  location: string;
  summary: string;
  bullets: string[];
  tags?: string[];
};

export const experience: ExperienceEntry[] = [
  {
    company: 'Cisco (Duo Security)',
    role: 'Senior Engineering Manager — AI Infrastructure',
    start: 'January 2025',
    end: 'Present',
    location: 'McKinney, Texas (Remote)',
    summary: 'Led Duo AI Infrastructure team across lakehouse modernization, ML enablement, threat intelligence, and AI developer tooling.',
    bullets: [
      'Spearheaded Snowflake-managed Iceberg Medallion lakehouse ingesting 50TB/month across 14 tables with <1hr data freshness, retiring 30 Delta Lake maintenance workflows across 12 prod deployments to unblock ML scoring and Duo AI Assistant features.',
      'Cut $1.8M/yr in cloud and maintenance costs across 2 modernization projects: migrating legacy Workflow System/S3 pipelines to Snowflake lakehouse ($1M) and consolidating inefficient streaming and batch analytics into batch-only ($800K).',
      'Drove cross-org integration of Cisco Talos ML-classified threat intelligence into Duo\'s data platform, delivering dashboards adopted by 1,100+ enterprise customers in the US and EMEA via hybrid batch and real-time enrichment pipeline.',
      'Catalyzed AI-tooling adoption across a 300+ engineer org from 43% to 89% in 6 months by co-founding the AI Guild, establishing developer paved paths with Architecture, Security, and SRE.',
      'Expanded Duo AI Assistant to APAC via cross-org partnership with Cisco SBG AI, Duo AI, and Freeplay, delivering multilingual LLM support to 160+ APAC enterprise customers.',
      'Built 9+ Claude Code automation workflows (PR review, Confluence monitoring, data generation, security analysis) adopted by engineering leads across 3 squads.',
    ],
    tags: ['Snowflake', 'Iceberg', 'AWS', 'AI Infrastructure', 'Claude Code'],
  },
  {
    company: 'Cisco (Duo Security)',
    role: 'Engineering Manager — Data Infrastructure',
    start: 'June 2021',
    end: 'January 2025',
    location: 'McKinney, Texas',
    summary: 'Led Data Infrastructure team responsible for Customer Logging Platform, pipeline modernization, regional data residency expansion, and end-to-end production ownership across Duo.',
    bullets: [
      'Orchestrated UAE datacenter buildout with SRE that drove $146.8M / 11% YoY international bookings growth, deploying Customer Logging Platform in-region for Middle East market entry.',
      'Captured $2.2M/yr by consolidating legacy data pipeline into Customer Logging Platform, fully retiring it with zero downtime, leading an 11-person team across 3 quarters.',
      'Scaled Customer Logging Platform adoption to 6-8 teams (ML/AI/DS/SRE/Platform) ingesting 200M events/day through cross-team onboarding via surveys, roadshows, and developer workshops.',
      'Doubled Data Infrastructure team from 5 to 11 ICs across 4 countries (US, Canada, UK, Ukraine) in 8 months.',
      'Developed 6 engineers through promotions: 3 mid to senior, 2 senior to tech lead, 1 senior to engineering manager.',
    ],
    tags: ['Kafka', 'PySpark', 'AWS EMR', 'Snowflake', 'Engineering Leadership'],
  },
  {
    company: 'Cisco (Duo Security)',
    role: 'Senior Software Engineer — Data Infrastructure',
    start: 'January 2020',
    end: 'June 2021',
    location: 'Austin, Texas',
    summary: 'Built Duo data platforms for logging, orchestration, storage optimization, and ML scoring at scale.',
    bullets: [
      'Accelerated log onboarding from 12 weeks to 2 weeks (83% reduction) by shipping Customer Logging Platform (Redis/ElasticSearch/S3/EventBridge/Snowflake), a config-driven platform standardizing ingestion, storage, and retrieval.',
      'Built an Airflow-like DAG workflow engine (2-person team) that cut S3 storage 90% and log export time 90% (2hr to 10min) via predicate pushdown, partition filtering, and column pruning.',
      'Tripled ML scoring pipeline scale from 15K to 45K customers by tuning Spark jobs and EMR cluster configs through systematic scale testing.',
    ],
    tags: ['Redis', 'ElasticSearch', 'Snowflake', 'EventBridge', 'PySpark', 'AWS EMR'],
  },
  {
    company: 'The Big Willow Inc. (Aberdeen)',
    role: 'Senior Software Engineer',
    start: 'January 2017',
    end: 'January 2020',
    location: 'Wilton, CT (Greater New York City Area)',
    summary: 'Built real-time data infrastructure powering programmatic ad bidding at a data analytics company.',
    bullets: [
      'Engineered Intent Analytics Engine on AWS EMR processing 25B bid requests/day, powering the company\'s core auction revenue.',
      'Boosted click-through rates on bid-served ads 40% week-over-week by deploying an IP Intelligence system leveraging firmographics, intent signals, and geo-location data.',
      'Compressed log processing and report generation runtime 60% by migrating to Parquet, redesigning partitions, and shifting EMR clusters to Spot instances.',
      'Delivered 30+ internal services and tools including a Flask web portal on API Gateway/Lambda powering 100+ reports/week for sales and analytics teams.',
    ],
    tags: ['AWS EMR', 'PySpark', 'Kafka', 'Python', 'Parquet'],
  },
];
