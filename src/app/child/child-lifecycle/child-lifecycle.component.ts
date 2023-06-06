import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-child-lifecycle',
  templateUrl: './child-lifecycle.component.html',
  styleUrls: ['./child-lifecycle.component.css']
})
export class ChildLifecycleComponent {


@Input ()message:any;
}