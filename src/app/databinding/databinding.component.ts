import { Component } from '@angular/core';

@Component({
  selector: 'app-databinding',
  templateUrl: './databinding.component.html',
  styleUrls: ['./databinding.component.css']
})
export class DatabindingComponent {
public name:any="Chhagan";
public text="http://www.google.com"
Event(){
  console.log("This is event");
}
public fname:any;

}
