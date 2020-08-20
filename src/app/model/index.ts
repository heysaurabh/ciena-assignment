import {
  ChartComponent,
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexDataLabels,
  ApexTitleSubtitle,
  ApexStroke,
  ApexGrid
} from 'ng-apexcharts';

export interface DashboardMetaData {
  offset: number;
  limit: number;
  total: number;
  items: ItemMetaData[];
  errors: any[];
  facets: FacetsMetaData;
}

export interface ItemMetaData {
  rollback: boolean;
  'node-id': string;
  'additional-text': string;
  resource: string;
  'alarm-id': string;
  'node-type': string;
  'manual-clearable': boolean;
  'severity-value': string;
  'sequence-id': string;
  'first-raise-time': string;
  'condition-severity': string;
  'number-of-occurrences': number;
  'additional-attrs'?: {
    productId: string;
    resourceTypeId: string;
    label: string;
    id: string;
  } | object;
  'resource-id': string;
  'ra-alarm-id': string;
  partition: object;
  'native-condition-type': string;
  'last-raise-time': string;
  id: string;
  state: string;
  'acknowledge-state': string;
  'device-id'?: string;
  'mac-address'?: string;
  'device-name'?: string;
  resourceBpoId?: string;
  'ip-address'?: string;
  'card-type'?: any;
  'device-attributes'?: any;
}

export interface FacetsMetaData {
  'condition-severity': ConditionSeverity[];
}

export interface ConditionSeverity {
  key: string;
  count: number;
}

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  dataLabels: ApexDataLabels;
  grid: ApexGrid;
  stroke: ApexStroke;
  title: ApexTitleSubtitle;
};
