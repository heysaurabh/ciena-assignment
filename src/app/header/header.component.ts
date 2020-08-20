import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { AppService } from '../service/app.service';
import { ItemMetaData } from '../model';

export interface BellIconMetaData {
  severity: string;
  description: string;
  'node-type': string;
}

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements OnInit {
  items: MenuItem[];
  count = 0;
  bellIconData: ItemMetaData[] = [];
  columns = [
    { field: 'condition-severity', header: 'Severity' },
    { field: 'additional-text', header: 'Desciption' },
    { field: 'node-type', header: 'Node Type' },
  ];

  constructor(private appService: AppService) { }

  ngOnInit(): void {
    this.appService.bellIconData$.subscribe((data: ItemMetaData) => {
      if (!data) {
        this.bellIconData = [];
        return;
      }
      // Assuming {id} will be unique for every item
      const alreadyExist = this.bellIconData.some((obj) => obj.id === data.id);
      if (alreadyExist) {
        this.bellIconData = this.bellIconData.filter(obj => obj.id !== data.id);
      } else {
        this.bellIconData.push(data);
      }
    });
  }

  logout(): void {
    if (window.confirm('Are you sure you want to leave the current page?')) {
      window.close();
    }
  }

}
