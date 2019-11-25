import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',
  styles: []
})
export class ArtistaComponent implements OnInit {

  artist: any;
  loading: boolean;

  constructor( private aR: ActivatedRoute, private _spotify: SpotifyService ) {
    this.loading = true;
  }

  getArtist( id: any ) {
    return this._spotify.getArtistById( id ).subscribe( param => {
      this.artist = param;
    });
  }

  ngOnInit() {
    this.aR.params.subscribe( param => {
      this.loading = false;
      this.getArtist( param.id );
    });
  }

}
