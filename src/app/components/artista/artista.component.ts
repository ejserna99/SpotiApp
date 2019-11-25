import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',
  styles: []
})
export class ArtistaComponent implements OnInit {
  
  artist: any[] = [];
  tracks: any[] = [];
  loading = true;

  constructor( private aR: ActivatedRoute, private _spotify: SpotifyService ) {
    this.aR.params.subscribe( param => {
      this.getArtist( param.id );
      this.getTopTracks( param.id );
      this.loading = false;
    });
  }

  getArtist( id: any ) {
    return this._spotify.getArtistById( id ).subscribe( (param: any) => {
      this.artist = param;
    });
  }

  getTopTracks( id: string ) {
    this._spotify.getTrackArtist( id ).subscribe( (param: any) => {
      this.tracks = param.tracks;
      console.log( this.tracks );
    });
  }

  ngOnInit() { }

}
