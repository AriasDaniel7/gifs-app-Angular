import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuNavBarComponent } from './components/menu-nav-bar/menu-nav-bar.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { GifsModule } from '../gifs/gifs.module';
import { BuscadorComponent } from './components/buscador/buscador.component';
import { LazyImagesComponent } from './components/lazy-images/lazy-images.component';



@NgModule({
  declarations: [
    MenuNavBarComponent,
    NavBarComponent,
    BuscadorComponent,
    LazyImagesComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    NavBarComponent,
    LazyImagesComponent
  ]
})
export class SharedModule { }
