import { Component } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent {

  newLista: any[] = [];

  constructor( private _spotify: SpotifyService )
  {
    this._spotify.getNewReleases().subscribe(arg => {
      this.newLista = arg.albums.items;
      console.log(arg.albums.items)
    });
  }

}
