// This typescript component file will teach you what interpolation can and cannot do
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `
            <!--displaying strings dynamically-->
            <h2 style="text-align:center">
              Hello {{name}}
            </h2>
            <!--displaying expressions-->
            <h2>{{2+2}}</h2>
            <!--displaying variable as well as constant strings-->
            <h2>{{"My name is " + name}}</h2>
            <!--we can use javascript properties and methods within the curly braces-->
            <h2>{{name.length}}</h2>
            <h2>{{name.toUpperCase()}}</h2>
            <!--Using methods of component class-->
            <h2>{{greetUser()}}</h2>
            <!--
            Now lets talk about what interpolation cannot do:
            #assignment operation is not valid inside curly braces [for eg-{{a=2+2}}]
            #U can not directly access the global JS variables inside curly braces [for eg-{{window.location.href}}]
             if u want to access global JS variables it can be done using a variable in the component as shown below
            -->
            <h2>{{siteUrl}}</h2>
             `,
  styleUrls: []
})
export class TestComponent implements OnInit {

  public name = 'Mittul';
  public siteUrl = window.location.href;
  constructor() { }

  ngOnInit() {
  }

  greetUser() {
    return 'Good Morning ' + this.name;
  }

}
