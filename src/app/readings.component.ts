import { Component } from '@angular/core';
import { MonitorService, MonitorData } from './monitor.service';


@Component({
  selector: 'readings-table',
  template: `   <h2>{{name}}</h2>
                <table>
                    <tr>
                        <th>Created at:</th>
                        <th>PM1.0</th>
                        <th>PM2.5</th>
                        <th>PM10.0</th>
                    </tr>
                    <tr *ngFor="let reading of readings">
                        <th>{{reading.created_at}}</th>
                        <th>{{reading.field1}}</th>
                        <th>{{reading.field2}}</th>
                        <th>{{reading.field3}}</th>
                    </tr>
                </table>
  `,
  styleUrls: ['./readings.component.css'],
  providers: [MonitorService]
})
export class ReadingsComponent {
  data: MonitorData;
  name: string;
  readings = [];
  constructor(private _monitorService: MonitorService){
  }
  ngOnInit(){
    this._monitorService.getMonitorData()
    .subscribe(data => {
      this.name = data.channel.name;
      this.readings = data.feeds;
    });
  }
}