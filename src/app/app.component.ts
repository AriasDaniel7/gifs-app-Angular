import { AfterViewInit, Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  public year: Date = new Date();

  calcularYear(): string {
    return this.year.getUTCFullYear().toString();
  }
}
