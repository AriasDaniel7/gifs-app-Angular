import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  public activo: boolean = false;

  activado() {
    if(this.activo){
      this.activo = false;
    }else{
      this.activo = true;
    }
  }

  desactivado() {
    this.activo = false;
  }
}
