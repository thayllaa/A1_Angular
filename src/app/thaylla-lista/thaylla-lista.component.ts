import { Component, OnInit } from '@angular/core';
import { ThayllaDisciplinasService } from '../thaylla-disciplinas.service';

@Component({
  selector: 'app-thaylla-lista',
  templateUrl: './thaylla-lista.component.html',
  styleUrls: ['./thaylla-lista.component.css']
})
export class ThayllaListaComponent implements OnInit {

  constructor(public lista: ThayllaDisciplinasService) { }

  ngOnInit() {
  }

}