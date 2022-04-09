import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { listData } from '../list';


@Component({
  selector: 'app-thaylla-detalhes',
  templateUrl: './thaylla-detalhes.component.html',
  styleUrls: ['./thaylla-detalhes.component.css']
})
export class ThayllaDetalhesComponent implements OnInit {
  item;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      this.item = listData[params.get('index')];
    });
  }

}