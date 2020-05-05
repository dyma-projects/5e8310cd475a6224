// @ts-ignore
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-exercice1-enfant',
  templateUrl: './exercice1-enfant.component.html',
  styleUrls: ['./exercice1-enfant.component.css']
})
export class Exercice1EnfantComponent implements OnInit {

  @Input() public compteur : number = 0;

  @Output() public incremente:EventEmitter<number> = new EventEmitter();
  @Output() public decremente:EventEmitter<number> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  incrementeCompteur() {
    this.incremente.emit(this.compteur++);
  }

  decrementeCompteur() {
    this.decremente.emit(this.compteur--);
  }
}
