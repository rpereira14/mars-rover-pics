import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Picture} from './picture';
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class PictureService {

  constructor(private client:HttpClient ) { }

  public getPictures()
  {
    return this.client.get("https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=2015-6-3&api_key=DEMO_KEY");
  }
}
