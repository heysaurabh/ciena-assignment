import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  bellIconData$ = new BehaviorSubject(null);

  constructor() { }
}
