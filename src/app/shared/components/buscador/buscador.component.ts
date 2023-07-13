import { Component, ElementRef, ViewChild, Output, EventEmitter } from '@angular/core';
import { GifsService } from 'src/app/gifs/services/gifs.service';

@Component({
  selector: 'shared-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.css']
})
export class BuscadorComponent {

  @ViewChild('txtBusqueda')
  public inputBusqueda!: ElementRef<HTMLInputElement>;

  @Output()
  cantidad: EventEmitter<number> = new EventEmitter();

  constructor(private gifsService: GifsService) { }

  busqueda() {
    const newBusqueda = this.inputBusqueda.nativeElement.value;
    this.gifsService.busqueda(newBusqueda);
    this.inputBusqueda.nativeElement.value = '';
    this.cantidad.emit(this.gifsService.size);
  }
}
