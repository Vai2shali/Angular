import { Component } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent {
  public showText:any="Hello this is data show";
  public showFlag:boolean=false;
  public age:number=19;
  public country:any=["India","Chaina","MP","UP","Bihar"];
  onselectedCountry="MP";
  public state="MH";
  testClass1:any;
  testStyle1:any;
  testStyle2:any={'background-color':'yellow'};
  testStyle3:any={'background-color':'green'};
  constructor(){
    if(this.age && ! this.showFlag){
      this.testClass1="test1";
      this.testStyle1={'color':'voilet'};
    }else{
      this.testClass1="test2";
      this.testStyle1={'color':'pink'};
    }
  }

}
