import { Component, OnInit, ElementRef } from '@angular/core';
import { MenuComponent } from 'src/app/shared/menu/menu.component';
import { Lightbox } from 'ngx-lightbox';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent {

  public _albums = [];
  constructor(private _lightbox: Lightbox) {
    for (let i = 1; i <= 4; i++) {
      const src = './assets/images/shoubu/'+ i +'.png';
      const caption = 'Screenshot ' + i;
      const thumb = './assets/images/shoubu/'+ i +'.png';
      const album = {
         src: src,
         caption: caption,
         thumb: thumb
      };
 
      this._albums.push(album);
    }
  }

  open(index: number): void {
    // open lightbox
    this._lightbox.open(this._albums, index);
  }
 
  close(): void {
    // close lightbox programmatically
    this._lightbox.close();
  }

}
