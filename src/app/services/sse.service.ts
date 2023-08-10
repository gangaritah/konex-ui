import { Injectable, NgZone } from '@angular/core';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class SseService {

  constructor(private zone: NgZone) { }

  sse(url: string) {
    
    return new Observable(observer => {
      let eventSource =  new EventSource(url);
      eventSource.onmessage = (event) => {
          observer.next(event); 
      };
      eventSource.onerror = (error) => {
        this.zone.run(() => {
          observer.error(error); 
        })
      };
    })
    
  }


}
