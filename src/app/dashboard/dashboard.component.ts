import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.sass']
})
export class DashboardComponent implements OnInit {
  items: any;

  constructor(private messageService: MessageService) { }

  ngOnInit(): void {
    this.items = [
      {
        label: 'Menu',
        items: [
          { label: 'Item 1', command: (event) => this.menuItemClick(event) },
          { label: 'Item 2', command: (event) => this.menuItemClick(event) },
          { label: 'Item 3', command: (event) => this.menuItemClick(event) },
        ]
      }
    ];
  }

  menuItemClick(event): void {
    this.messageService.add({key: 'tc', severity: 'success', summary: 'Success', detail: event.item.label });
  }

}
