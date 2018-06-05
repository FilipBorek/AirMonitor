import { Component } from '@angular/core';
import { MonitorService, MonitorData } from './monitor.service';


@Component({
  selector: 'app-root',
  template: `<readings-table></readings-table>`,
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
}
