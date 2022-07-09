import { Component, OnInit } from '@angular/core';

declare var $:any
@Component({
  selector: 'app-teste1',
  templateUrl: './teste1.component.html',
  styleUrls: ['./teste1.component.css']
})
export class Teste1Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  openNavbar() {
    $('.ui.labeled.icon.sidebar') .sidebar('toggle') ;
  }

}
