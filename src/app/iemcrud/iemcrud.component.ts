import { AnimationPlayer } from '@angular/animations';
import { Component } from '@angular/core';

@Component({
  selector: 'app-iemcrud',
  templateUrl: './iemcrud.component.html',
  styleUrls: ['./iemcrud.component.css']
})
export class IemcrudComponent {
  public allData:any=[];
  public showTable:boolean=false;
  public idd:any;
  public fn:any;
  public ln:any;
  public em:any;
  public count:number=1;





  onSubmitData(data:any){
    console.log(data.value);
    if(data.value.id === undefined){
      data.value.id = this.count;
      this.allData.push(data.value);
      if(this.allData.length > 0){
        this.showTable=true;
      }
      this.count++;
    }else{
      this.allData.forEach((element:any)=>{
        if(data.value.id==element.id){
          console.log(element);
          element.fname= data.value.fname;
          element.lname= data.value.lname;
          element.eml= data.value.eml;


        }

      });
      console.log(this.allData) ; 

      
    }

  }

  onDelData(dt:any){
    console.log(dt);
    this.allData.forEach((element:any,index:any)=>{
      if(element.id=dt.id){
        this.allData.splice(index ,1);
      }
    })           


  }
  onUpdateData(dt1:any){
    console.log(dt1);
    this.idd=dt1.id;
    this.fn=dt1.fname;
    this.ln=dt1.lname;
    this.em=dt1.eml;



  }





  onClickUpdateBtn(dt2:any){

  }

  
  }
