import { Component, OnInit } from '@angular/core';
import { mockedData } from '../mockedData';
import { DashboardMetaData, ConditionSeverity, ItemMetaData } from '../model';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.sass']
})
export class TabsComponent implements OnInit {
  items;
  severityColorCode = {
    critical: '#e71d1d',
    major: '#ef8e00',
    minor: '#ddd326',
    warning: '#7d85b2',
    undefined: '#99b4ba'
  };
  columns = [
    { field: 'condition-severity', header: 'Severity' },
    { field: 'additional-text', header: 'Desciption' },
    { field: 'node-type', header: 'Node Type' },
    { field: 'manual-clearable', header: 'Clearable' },
    { field: 'state', header: 'State' },
    { field: 'first-raise-time', header: 'Raise Time' }
  ];
  itemData: DashboardMetaData = mockedData;
  tabData: ConditionSeverity[];

  ngOnInit(): void {
    this.tabData = this.itemData.facets['condition-severity'];
  }

  getTabHeader(item: ConditionSeverity): string {
    return `${item.key}(${item.count})`;
  }

  getTableData(type: string): ItemMetaData[] {
    if (type === 'alarms') {
      return mockedData.items;
    } else if (type === 'node_type') {
      const items = [...mockedData.items];
      return items.sort((a, b) => a['node-type'].localeCompare(b['node-type']));
    } else {
      return mockedData.items.filter(item => item['condition-severity'] === type);
    }
  }

  onTabChange(event): void {
    console.log('event', event);
  }
}
