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

  getArtist( termino: string) {
    return this.getQuery(`search?q=${ termino }&type=artist&limit=15`).pipe( map( data => data['artists'].items ) );
  }

  getArtistById( termino: string) {
    return this.getQuery(`artists/${ termino }`);
  }

  getQuery( query: string ) {
    const url = `https://api.spotify.com/v1/${ query }`;
    const headers = new HttpHeaders({
      Authorization: 'Bearer BQDzlULjyrL8a63aGEqO1nuZwQhIqgSbAn7-0a57qzMVEqb3g2KYi3VpFJJ-d8A9hmHxDm27VmOihVN1_yA'});

    return this.http.get(url, { headers } );
  }
}
