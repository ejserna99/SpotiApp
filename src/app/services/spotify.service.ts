import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor( private http: HttpClient ) { }

  getNewReleases(): any {
    return this.getQuery('browse/new-releases').pipe( map( data => data['albums'].items ) );
  }

  getArtist( artist: string) {
    return this.getQuery(`search?q=${ artist }&type=artist&limit=15`).pipe( map( data => data['artists'].items ) );
  }

  getArtistById( id: string) {
    return this.getQuery(`artists/${ id }`);
  }

  getTrackArtist( id: string) {
    return this.getQuery(`artists/${ id }/top-tracks?country=es`);
  }

  getQuery( query: string ) {
    const url = `https://api.spotify.com/v1/${ query }`;
    const headers = new HttpHeaders({
      Authorization: 'Bearer BQADHL1L6LQrV2HxXZSwaBfoZgxqotljbup9pi5JQUxir-c9mOMxlfl7fWiKTSYhdH5TKh304GWuLWuWdro'});

    return this.http.get(url, { headers } );
  }

}
