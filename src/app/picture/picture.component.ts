import { Component, OnInit } from '@angular/core';
import { PictureService} from '../picture.service';
import { count } from 'rxjs/operators';
import * as _ from 'lodash';
import { RootObject, Photo, Rover, Camera} from '../namespace';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-picture',
  templateUrl: './picture.component.html',
  styleUrls: ['./picture.component.scss']
})
export class PictureComponent implements OnInit {

  constructor(private pictureService: PictureService, private formBuilder: FormBuilder) {
    this.changeSolForm = this.formBuilder.group({
      sol: ''
    });
   }
  changeSolForm;
  currentSol:string="1000";
  selectedRover:string = "Curiosity";
  photos: Photo[] = [];
  rootObject: RootObject;
  selectedPicture: Photo;
  ngOnInit() {
    this.pictureService.$isRoverClicked.subscribe((data:string) => {this.changeRover(data); this.selectedRover = _.startCase(data);})
    this.getPictures();
  }

  mouseOver(pic:Photo){
    this.selectedPicture = pic;
  }
  mouseLeave(){
    this.selectedPicture = null;
  }

  onSubmit(input) {
    this.changeSolForm.reset();
    this.currentSol = input.sol != ""? input.sol : "0";
    let response = this.pictureService.getPictures(this.selectedRover, this.currentSol);
    response.subscribe((res:RootObject)=>{
      this.rootObject = res;
      this.photos = this.rootObject.photos;
    });
  }

  changeRover(rover:string){
    let response = this.pictureService.getPictures(rover, this.currentSol);
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
