import { Component, OnInit, Input } from '@angular/core';

import { AppService } from '../service/app.service';
import { ItemMetaData } from '../model';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.sass'],
  // providers: [AppService]
})
export class DataTableComponent implements OnInit {
  @Input() columns: any;
  @Input() tableData: ItemMetaData[];
  @Input() highlightRow: boolean;

  severityColorCode = {
    critical: '#e71d1d',
    major: '#ef8e00',
    minor: '#ddd326',
    warning: '#7d85b2',
    undefined: '#99b4ba'
  };

  constructor(private appService: AppService) {}

  ngOnInit(): void {
  }

  getColor(severity: string): void {
    return this.severityColorCode[severity.toLowerCase()];
  }

  onRowSelect(event): void {
    this.appService.bellIconData$.next(event.data);
  }

  onRowUnselect(event): void {
    this.appService.bellIconData$.next(event.data);
  }

}
