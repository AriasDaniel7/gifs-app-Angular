import { Component, Input } from '@angular/core';
import { SharedService } from '../../services/shared.service';
import { GifsService } from 'src/app/gifs/services/gifs.service';

@Component({
  selector: 'shared-navbar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {

  public cantidadListado: number = 0;

  constructor(private gifsService: GifsService, private sharedService: SharedService) {
    this.cantidadListado = this.gifsService.size;
  }

  get activo(): boolean {
    return this.sharedService.activo;
  }

  recibirCantidad(num: number): void {
    this.cantidadListado = num;
  }

  activado() {
    this.sharedService.activado();
  }

  desactivado() {
    this.sharedService.desactivado();
  }
}
