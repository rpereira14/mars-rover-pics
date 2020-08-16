import { Component, OnInit } from '@angular/core';
import { PictureService} from '../picture.service';
import { Picture } from '../picture';
import { count } from 'rxjs/operators';
import { RootObject, Photo, Rover, Camera} from '../namespace';

@Component({
  selector: 'app-picture',
  templateUrl: './picture.component.html',
  styleUrls: ['./picture.component.scss']
})
export class PictureComponent implements OnInit {

  constructor(private pictureService: PictureService) {
    
   }
   teste:any[] = [];
  photos: Photo[] = [];
  rootObject: RootObject;

  selectedPicture: Picture;
  ngOnInit() {
    //this.getPictures();
    for(let i = 0; i <10; i++){
      this.teste.push({id:i});
    }
    //console.log(this.rootObject);
  }

  mouseOver(pic:Picture){
    this.selectedPicture = pic;
    //console.log(pic.id);
  }
  mouseLeave(){
    console.log("mouseleave")
    this.selectedPicture = null;
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
