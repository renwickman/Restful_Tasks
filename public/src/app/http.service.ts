import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class HttpService {
  constructor(private _http: HttpClient){
     this.getTasks();
     var id = "";
     this.getTask(id);
   }
   getTasks(){
     console.log('hi');
   
      let tempObservable = this._http.get('/tasks');
   
      tempObservable.subscribe(data => console.log("Got our tasks!", data));
   }

getTask(id){
  console.log('Id is', id);

   let tempObservable = this._http.get('/tasks/'+id);

   tempObservable.subscribe(data => console.log("Got the task!", data));
}
}
