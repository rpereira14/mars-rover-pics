import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Picture} from './picture';
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})

export class PictureService {
  baseUrl:string = "https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/";
  apiKey:string = "api_key=DEMO_KEY";
  constructor(private client:HttpClient ) { }
 
  public getPictures()
  {
    return this.client.get(this.baseUrl + "photos?sol=1&" + this.apiKey);
  }
}
