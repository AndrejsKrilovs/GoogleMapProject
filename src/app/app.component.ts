import { Component } from '@angular/core';
import { Marker } from './marker';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  lat: number = 57;
  lng: number = 24;
  clickCount: number = 0;
  markers: Marker[] = [];
  clickedMarker: string;

  mapClicked($event: MouseEvent) {
    let json = JSON.stringify($event);
    let coords = JSON.parse(json).coords;

    this.markers.push({
      lat: coords.lat,
      lng: coords.lng
    });

    this.sortArray();
    this.clickCount = 0;
  }

  markerClicked(marker: Marker) {
    this.clickCount ++;
    this.clickedMarker = JSON.stringify(marker);

    if(this.clickCount === 2) {
      let index: number = this.markers.indexOf(marker);
      this.markers.splice(index, 1);
      this.sortArray();
      this.clickCount = 0;
    }
  }

  sortArray() {
    let currentMarker = this.markers.filter(item => this.markers.indexOf(item) === 0).pop();

    this.markers.sort((value1, value2) => {
      if(
        Math.sqrt(Math.pow(value1.lat - currentMarker.lat, 2) + Math.pow(value1.lng - currentMarker.lng, 2)) >=
        Math.sqrt(Math.pow(value2.lat - currentMarker.lat, 2) + Math.pow(value2.lng - currentMarker.lng, 2))
      )
        return 1;
      else
        return -1;
    });
  }
}
