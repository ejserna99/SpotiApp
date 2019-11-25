import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor( private http: HttpClient ) {
    
   }

   getNewReleases(): any
   {
    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQANFIpVOBupyM5vS9qtQ3eLHJGwLD3-X9DX2TwF8EHbTyQ_NUknuy6UQi-GWJ1ddnIwY6hPfqI2awYBD1w'
    });
    return this.http.get('https://api.spotify.com/v1/browse/new-releases', { headers });
   }

   getArtist( termino: string)
   {
    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQANFIpVOBupyM5vS9qtQ3eLHJGwLD3-X9DX2TwF8EHbTyQ_NUknuy6UQi-GWJ1ddnIwY6hPfqI2awYBD1w'
    });
    return this.http.get(`https://api.spotify.com/v1/search?q=${ termino }&type=artist&limit=15`, { headers });
   }
}
