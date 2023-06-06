import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.css']
})
export class ReactiveComponent {
  public myForm:any;
  public allData:any=[];
  public showTable:boolean=false;
  public count:number=0;
  constructor(private fb:FormBuilder){
    this.myForm=this.fb.group({
      uname:[''],
      eml:[''],
      pass:[''],
    })
  }
  onSubmitData(data:any){
    data.value.id=this.count;
    console.log(this.myForm.value);
     this.allData.push(this.myForm.value);
     console.log(this.allData);
    if(this.allData.length>0){
    this.showTable=true;
  }
  this.count++;
  }
  onUpdateBtn(data:any){
    console.log(data);
    this.myForm.setValue({
      uname:data.uname,
      eml:data.eml,
      pass:data.pass,
    })
 
  }
  onDelBtn(data:any){
 this.allData.splice(this.allData.indexOf(data),1)
  }
  onClickUpdateBtn(data:any){
    this.allData.splice(data.value.id,1,data.value);
  }



}
