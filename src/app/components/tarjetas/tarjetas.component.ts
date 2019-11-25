import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tarjetas',
  templateUrl: './tarjetas.component.html',
  styleUrls: ['./tarjetas.component.css']
})
export class TarjetasComponent implements OnInit {

  // tslint:disable-next-line:no-input-rename
  @Input() item;

  constructor( private router: Router) {
  }

  ngOnInit() {
  }

  verArtist( artist ) {
    let id: string;

    if ( artist.type === 'album' ) {
      id = artist.artists[0].id;
    } else {
      id = artist.id;
    }

    this.router.navigate(['/Artist/',id]);
  }

}
