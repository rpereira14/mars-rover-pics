import { Component, OnInit } from '@angular/core';
import { PictureService } from '../picture.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(private pictureService: PictureService) { }

  ngOnInit() {
  }

  changeRover(rover:string){
    console.log("change rover clicked")
    this.pictureService.changeRover(rover);
  }
}
