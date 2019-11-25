import { Component } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent {

  newLista: any[] = [];
  loading: boolean;

  // tslint:disable-next-line:variable-name
  constructor( private _spotify: SpotifyService )
  {
    this.loading = true;
    this._spotify.getNewReleases().subscribe( data => {
      this.loading = false;
      this.newLista = data;
    });
  }

}
