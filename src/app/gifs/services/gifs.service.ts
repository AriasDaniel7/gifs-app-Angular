import { Injectable } from '@angular/core';
import { Busqueda, Gif } from '../interfaces/gifs.interface';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GifsService {
  private _historialList: string[] = [];
  private _gifList: Gif[] = [];
  private apiKey: string = 'C3dxFL1fZgLfW2dWmyw1T3voSCyDYXOt';
  private serviceUrl: string = 'https://api.giphy.com/v1/gifs';
  private _size: number = 0;

  constructor(private http: HttpClient) {
    this.leerLocalStorage();
  }

  get historialList(): string[] {
    return this._historialList;
  }

  get gifList(): Gif[] {
    return this._gifList;
  }

  get size(): number {
    this._size = this._historialList.length;
    return this._size;
  }

  private guardarLocalStorage(): void {
    localStorage.setItem('history', JSON.stringify(this._historialList));
  }

  private leerLocalStorage(): void {
    if (!localStorage.getItem('history')) return;
    this._historialList = JSON.parse(localStorage.getItem('history')!);

    if (this._historialList.length === 0) return;
    this.busqueda(this._historialList[0]);
  }

  private guardarHistorial(busqueda: string) {
    busqueda = busqueda.toLowerCase();

    if (this._historialList.includes(busqueda)) {
      this._historialList = this._historialList.filter((tag) => tag !== busqueda);
    }

    this._historialList.unshift(busqueda);
    this._historialList = this._historialList.splice(0, 10);
  }

  private busquedaHttp(busqueda: string) {
    const params: HttpParams = new HttpParams()
      .set('api_key', this.apiKey)
      .set('limit', '10')
      .set('q', busqueda);

    this.http.get<Busqueda>(`${this.serviceUrl}/search`, { params })
      .subscribe(resp => {
        this._gifList = resp.data;
      });
  }

  busqueda(tag: string): void {
    if (tag.length === 0) return;
    this.guardarHistorial(tag);
    this.busquedaHttp(tag);
    this.guardarLocalStorage();
  }

  eliminar(index: number): void {
    this._historialList.splice(index, 1);
    this.guardarLocalStorage();
    if (this._historialList.length === 0) {
      this._gifList = [];
      return;
    };
    this.busqueda(this._historialList[0]);
  }
}
