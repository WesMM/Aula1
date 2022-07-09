import { Component, EventEmitter, OnInit, Output } from '@angular/core';

declare var $:any
@Component({
  selector: 'app-teste1',
  templateUrl: './teste1.component.html',
  styleUrls: ['./teste1.component.css']
})
export class Teste1Component implements OnInit {

  constructor() { }

  @Output() eventUpdate = new EventEmitter<any>();

  ngOnInit(): void {
  }
  openNavbar() {
    $('.ui.labeled.icon.sidebar') .sidebar('toggle') ;
  }
  mostrarAmigos() {
    console.log("chamou")
    this.eventUpdate.emit(true)
}
}
