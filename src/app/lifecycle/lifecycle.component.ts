import { Component } from '@angular/core';

@Component({
  selector: 'app-lifecycle',
  templateUrl: './lifecycle.component.html',
  styleUrls: ['./lifecycle.component.css']
})
export class LifecycleComponent {
  constructor() {
    console.log("this is construtre")
  }
  ngOnChanges() {
    console.log("this is a onchanges ")
  }
  ngOnInit() {
    console.log("this is onInit")
  }
  ngdoCheck() {
    console.log("This ia docheck")
    



  }
  ngAfterContentInit(){
    console.log("This is the ngafterinit")
  }
  ngAfterContentCheked(){
    console.log("This is the ngaftercontentcheked")
  }
  

  
}
