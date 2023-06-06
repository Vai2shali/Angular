import { Component } from '@angular/core';
import { ApiService } from './api.service';
import { AnimationPlayer } from '@angular/animations';
import { NO_ERRORS_SCHEMA } from '@angular/compiler';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css']
})
export class ServiceComponent {
  public showTable :any=false;
  public allData:any=[];
  public idd:any;
  public fn:any;
  public ln:any;
  public em:any;
  public ps:any;
  
constructor(private api:ApiService){
  this.getallData();
}
   



  onSubmitData(data:any){
console.log(data.value);
this.api.addData(data.value).subscribe(
  ((res:any)=>{
    console.log(res);
    this.allData=res;
    this.getallData();
  }),
  ((err:any)=>{
    console.log(err);
  })

  
)
  }

  getallData(){
this.api.getData().subscribe(
  ((res:any)=>{
    console.log(res);
    this.allData=res;
  }),
  ((err:any)=>{
    console.log(err);
  })
)
  }

  onDeldata(data:any){
console.log(data);
this.api. deleteData (data.id).subscribe(
  ((res:any)=>{
    console.log(res);
    this.getallData();
  }),
  ((err:any)=>{
    console.log(err);
  })

)
  }

  onUpdatadata(data:any){
console.log(data);
this.idd=data.id;
this.fn=data.fname;
this.ln=data.lname;
this.em=data.em;
this.ps=data.ps;
  }

  
  

  
  onClickUpdateBtn(data:any){
console.log(data);
this.api.updateData(data.value).subscribe(
  ((res:any)=>{
    console.log(res);
    this.getallData();
  }),
  ((err:any)=>{
    console.log(err);
  })
)
  }
  

}
