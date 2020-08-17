import { Component, OnInit } from '@angular/core';
import { PictureService} from '../picture.service';
import { count } from 'rxjs/operators';
import * as _ from 'lodash';
import { RootObject, Photo, Rover, Camera} from '../namespace';

@Component({
  selector: 'app-picture',
  templateUrl: './picture.component.html',
  styleUrls: ['./picture.component.scss']
})
export class PictureComponent implements OnInit {

  constructor(private pictureService: PictureService) {
    
   }
  selectedRover:string = "Curiosity";
  photos: Photo[] = [];
  rootObject: RootObject;
  selectedPicture: Photo;
  ngOnInit() {
    this.pictureService.$isRoverClicked.subscribe((data:string) => {this.changeRover(data); this.selectedRover = _.startCase(data)})
    this.getPictures();
  }

  mouseOver(pic:Photo){
    this.selectedPicture = pic;
  }
  mouseLeave(){
    this.selectedPicture = null;
  }

  changeRover(rover:string){
    let response = this.pictureService.getPictures(rover);
    response.subscribe((res:RootObject)=>{
      this.rootObject = res;
      this.photos = this.rootObject.photos;
    });
  }
  getPictures()
  {
    let response = this.pictureService.getPictures();
    response.subscribe((res:RootObject)=>{
      this.rootObject = res;
      this.photos = this.rootObject.photos;
    });
  }
}
