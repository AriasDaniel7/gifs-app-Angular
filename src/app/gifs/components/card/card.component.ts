import { Component, Input, OnInit } from '@angular/core';
import { Gif, User } from '../../interfaces/gifs.interface';

@Component({
  selector: 'gifs-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input()
  public gif!: Gif;

  ngOnInit(): void {
    if (!this.gif) throw new Error('La propiedad Gif es requerida!');
  }
}
