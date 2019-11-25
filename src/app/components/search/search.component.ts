import { Component } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: []
})
export class SearchComponent {

  constructor( private _spotify: SpotifyService ) { }

  buscar( termino: string)
  {
    if ( termino.length > 0 )
    {
      this._spotify.getArtist( termino ).subscribe(
        (res: any) => {
          console.log(res.artists.items);
      });
    }
  }

}
