import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable()

export class ShowService {

  constructor(private http: HttpClient) { }

   rootURL = 'http://127.0.0.1:5000/';

  getUsers() {
    

      return this.http.get(this.rootURL);
    
  }
  deleteUsers(enroll : string) {
    let URL = this.rootURL+'delete?enroll='+enroll;

      return this.http.get(URL);
    
  }
  addUsers(enroll:string,name : string, dept:string)
  {
    let URL = this.rootURL+'add?enroll='+enroll+'&name='+name+'&dept='+dept;

    return this.http.get(URL);
  }
  editUsers(enroll:string,name : string, dept:string)
  {
    let URL = this.rootURL+'edit?enroll='+enroll+'&name='+name+'&dept='+dept;

    return this.http.get(URL);
  }
  
    
    
    


}
