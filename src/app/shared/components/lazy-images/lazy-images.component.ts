import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'shared-lazy-images',
  templateUrl: './lazy-images.component.html',
  styleUrls: ['./lazy-images.component.css']
})
export class LazyImagesComponent implements OnInit {
  public cargaImage: boolean = false;

  @Input()
  public url!: string;

  @Input()
  public alt: string = '';

  ngOnInit(): void {
    if (!this.url) throw new Error('La propiedad url es requerida!');
  }

  onLoad() {
    this.cargaImage = true;
  }
}
