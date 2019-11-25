import { Component } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: []
})
export class SearchComponent {

  lista: any;
  loading = false;

  // tslint:disable-next-line:variable-name
  constructor( private _spotify: SpotifyService ) { }

  buscar( termino: string) {
    this.loading = true;
    if ( termino.length > 0 ) {
      this._spotify.getArtist( termino ).subscribe(
        (res: any) => {
          this.loading = false;
          this.lista = res;
      });
    } else {
      this.lista = [];
      this.loading = false;
    }
  }

}
