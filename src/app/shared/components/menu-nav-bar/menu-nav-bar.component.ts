import { Component, Output, EventEmitter } from '@angular/core';
import { GifsService } from 'src/app/gifs/services/gifs.service';
import { SharedService } from '../../services/shared.service';

@Component({
  selector: 'shared-menu-navbar',
  templateUrl: './menu-nav-bar.component.html',
  styleUrls: ['./menu-nav-bar.component.css']
})
export class MenuNavBarComponent {

  @Output()
  cantidad: EventEmitter<number> = new EventEmitter();

  constructor(private gifsService: GifsService, private sharedService: SharedService) { }

  get activo(): boolean {
    return this.sharedService.activo;
  }

  get historialBusqueda(): string[] {
    return this.gifsService.historialList;
  }

  eliminar(index: number): void {
    this.gifsService.eliminar(index);
    this.cantidad.emit(this.gifsService.size);
  }

  busqueda(tag: string): void {
    this.gifsService.busqueda(tag);
  }

  activado() {
    this.sharedService.activado();
  }

  desactivado() {
    this.sharedService.desactivado();
  }
}
