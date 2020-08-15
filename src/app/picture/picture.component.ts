import { Component, OnInit } from '@angular/core';
import { PictureService} from '../picture.service';
import { Picture } from '../picture';
import { Camera } from '../camera';
import { Rover } from '../rover';
import { count } from 'rxjs/operators';

@Component({
  selector: 'app-picture',
  templateUrl: './picture.component.html',
  styleUrls: ['./picture.component.scss']
})
export class PictureComponent implements OnInit {

  constructor(private pictureService: PictureService) { }

  pictures: Picture[];
  selectedPictureId: number;
  firstPic = new Picture(1, 1000, new Camera(),"https://solarsystem.nasa.gov/internal_resources/3841", Date.now(), new Rover());
  ngOnInit() {
    //this.getPictures()
    this.pictures = [{
      id:1,
      earth_date: Date.now(),
      rover: new Rover(),
      sol: 1000,
      img_src:"https://solarsystem.nasa.gov/internal_resources/3841", 
      camera: new Camera()},
    {
      id:2,
      earth_date: Date.now(),
      rover: new Rover(),
      sol: 1000,
      img_src:"https://solarsystem.nasa.gov/internal_resources/3841", 
      camera: new Camera()},
    {
      id:3,
      earth_date: Date.now(),
      rover: new Rover(),
      sol: 1000,
      img_src:"https://solarsystem.nasa.gov/internal_resources/3841", 
      camera: new Camera()}
  ]
  }
  mouseOver(pic){
    console.log(pic);
    //this.selectedPictureId = pic.id;
  }
  mouseLeave(){
    this.selectedPictureId = null;
  }

  getPictures()
  {
    let response = this.pictureService.getPictures();
    //response.subscribe(pics => this.pictures = pics);
    response.subscribe(pics => console.log(pics));
  }
}
