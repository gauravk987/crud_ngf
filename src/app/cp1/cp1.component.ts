import { Component, OnInit } from '@angular/core';
import { ShowService } from '../show.service';
import { Subscription } from 'rxjs';
import { FormControl } from '@angular/forms';


@Component({
  selector: 'app-cp1',
  templateUrl: './cp1.component.html',
  styleUrls: ['./cp1.component.css','../../../node_modules/bootstrap/dist/css/bootstrap.min.css'],
  providers:[ShowService]
})


export class Cp1Component implements OnInit {
  enroll= new FormControl();
  name= new FormControl();
  dept= new FormControl();
  private subscription: Subscription = new Subscription()
  constructor(private showService: ShowService) { }
  static udata : any;
  static isShowAddComponent : boolean = false;
  public classReference = Cp1Component;
  interval : any;
  isShowEditInput : boolean = false;
  showBtn = "";
  ngOnInit(): void {
    this.showData();
   
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
    clearInterval(this.interval);
}
  deleteData(enroll : string)
  {
   
    this.showService.deleteUsers(enroll).subscribe(data =>{
      console.log(data)
    this.showData();

    });
  }

  showAddComponent()
  {
      Cp1Component.isShowAddComponent = true;
      

  }
  hideAddComponent()
  {
      Cp1Component.isShowAddComponent = false;
      

  }
  showData()
  {
    this.showService.getUsers()
    .subscribe(data=> {Cp1Component.udata = data;
      console.log(Cp1Component.udata.enroll)
      
    });
  }
  
  updateData()
  {
    this.showService.editUsers(this.enroll.value,this.name.value,this.dept.value).subscribe(data =>{
      console.log(this.name.value);
      this.showBtn="";
      this.showData();

    });
  }
  showEdit(enroll : string)
  {
      this.showBtn=enroll;
  }
  gridEdit(enroll : string,name:string,dept:string)
  {
      this.enroll.setValue(enroll);
      this.name.setValue(name);
      this.dept.setValue(dept);
      this.showEdit(enroll);
  }
  hideEdit()
  {
      this.showBtn="";
  }
}
