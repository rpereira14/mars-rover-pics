import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})

export class PictureService {
  
  apiKey:string = "&api_key=DEMO_KEY";
  $isRoverClicked = new EventEmitter();
  constructor(private client:HttpClient ) { }
 
  public getPictures(rover?:string, sol?:number,date?:Date)
  {
    let baseUrl = "https://api.nasa.gov/mars-photos/api/v1/rovers/";
    let url = baseUrl + ((rover != null)? rover : "curiosity") + "/";
    if(sol == null && date != null) url = url + "photos?earth_date=" + date.toString() + this.apiKey;
    else if(sol == null && date == null) url = url + "photos?sol=1000" + this.apiKey;
    else url = url + "photos?sol=" + sol + this.apiKey;
    return this.client.get(url);
  }

  changeRover(rover:string){
    this.$isRoverClicked.emit(rover);
  }
}
