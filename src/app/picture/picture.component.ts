import { Component, OnInit } from '@angular/core';
import { PictureService} from '../picture.service';
import { Picture } from '../picture';

@Component({
  selector: 'app-picture',
  templateUrl: './picture.component.html',
  styleUrls: ['./picture.component.scss']
})
export class PictureComponent implements OnInit {

  constructor(private pictureService: PictureService) { }

  pictures: any;
  ngOnInit() {
    this.getPictures()
  }

  getPictures()
  {
    let response = this.pictureService.getPictures();
    //response.subscribe(pics => this.pictures = pics);
    response.subscribe(pics => console.log(pics));
    console.log(this.pictures.photos);
  }
}
