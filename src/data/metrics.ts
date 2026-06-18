export type Metric = {
  value: string;
  label: string;
  sublabel?: string;
};

export const heroMetrics: Metric[] = [
  { value: '50TB', label: 'ingested per month', sublabel: 'Snowflake Iceberg lakehouse' },
  { value: '200M', label: 'events per day', sublabel: 'Customer Logging Platform' },
  { value: '$146.8M', label: 'international bookings growth', sublabel: 'UAE infrastructure buildout' },
  { value: '5 → 11', label: 'engineers across 4 countries', sublabel: 'team built and grown' },
];
