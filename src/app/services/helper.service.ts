import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HelperService {

  // rxjs library and their operators
  //1 Subject
  //2 BehaviuorSubject
  //3 Observable


  // example source=> var data store
  // http.var => return observable.
  // subscribe.data
  // var data = data;
  private aboutval: boolean = false;
  private behSub$: BehaviorSubject<boolean>;


  constructor() {
    this.behSub$ = new BehaviorSubject(this.aboutval);
  }


  // get value
  getBehValue(): Observable<boolean> {
    return this.behSub$;
  }

  // set value
  setBehValue(val:boolean){
    this.aboutval = val;
    this.behSub$.next(this.aboutval);
  }

}
