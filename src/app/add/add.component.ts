import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ShowService } from '../show.service';
import { Cp1Component } from '../cp1/cp1.component';
import { HttpErrorResponse } from '@angular/common/http';
@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css','../../../node_modules/bootstrap/dist/css/bootstrap.min.css'],
  providers:[ShowService,Cp1Component]
})
export class AddComponent implements OnInit {

  enroll= new FormControl();
  name= new FormControl();
  dept= new FormControl();
  enrollAlert = false;
  constructor(private showService:ShowService,protected cp1:Cp1Component) { }

  ngOnInit(): void {
  }
  addData()
  {
    this.showService.addUsers(this.enroll.value,this.name.value,this.dept.value).subscribe(data =>{
      console.log(data)
      
      this.cp1.showData();
      if(!data)
      {
          this.showEnrollAlert();

      }
      else
      {
        this.cp1.hideAddComponent();
      }
    });
    
    
  }
  
  hideEnrollAlert()
    {
        this.enrollAlert=false;
    }
    showEnrollAlert()
    {
        this.enrollAlert=true;
    }
}
