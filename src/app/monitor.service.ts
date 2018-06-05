import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';



export interface MonitorData{
    channel: {name: string};
    feeds: {
        created_at: string;
        field1: string;
        field2: string;
        field3: string;
    }[];
}

@Injectable()
export class MonitorService{
    constructor(private _http: HttpClient){

    }
    getMonitorData():Observable<MonitorData>{
        return this._http.get<MonitorData>("https://api.thingspeak.com/channels/331066/feeds.json?api_key=OSTQEKY6LNFG72ME")
    }
}