import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'single-spa-angular-hello-world',
  templateUrl: './hello-world.component.html',
  styleUrls: ['./hello-world.component.scss']
})
export class HelloWorldComponent implements OnInit {

  constructor () {
    console.log('it works??')
   }

  ngOnInit(): void {
    
  }

}
