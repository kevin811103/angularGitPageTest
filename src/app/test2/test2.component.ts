import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test2',
  templateUrl: './test2.component.html',
  styleUrls: ['./test2.component.scss']
})
export class Test2Component implements OnInit {


  textString: string = "";

  errorMessage: string = '';

  constructor() { }

  ngOnInit() {


    this.textString = "123546";

  }

  ipsfpj() {
    console.log("test")

  }
}
