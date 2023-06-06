import { Component } from '@angular/core';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.css']
})
export class CrudComponent {
  public allData:any=[];
  public showTable:boolean=true;

public idd:any;
  public un:any;
  public el:any;
  public ps:any;
  public count:number=1;
data: any;

onSubmitData(data:any){
 console.log(data.value);
 if(data.value.id==undefined){
  data.value.id=this.count;
  this.allData.push(data.value);
  if(this.allData.length>0){
    this.showTable=true;
  }
  this.count++;
 } else{
  this.allData.forEach((element:any)=>{
    if(data.value.id==element.id){
      console.log(element);
      element.uname=data.value.uname
      element.eml=data.value.eml
      element.pass=data.value.pass

    }
  });
  console.log(this.allData);
 }   
     
   }
  




  onDelData(data:any){
         console.log(data);
         console.log(this.allData);
         this.allData.forEach((element:any,index:any)=>{
          if(element.id=data.id){
            this.allData.splice(index,1);
          }
         })
  }

  onUpdate(data1:any){
     console.log(data1);
     this.un=data1.uname;
     this.el=data1.eml;
     this.ps=data1.ps;
     this.idd=data1.id;

  }


  onClickUpdateBtn(data2:any){
    
  }
}
