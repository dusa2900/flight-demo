import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
 imgString='https://assets.unenvironment.org/styles/article_billboard_image/s3/2021-02/nature-3558669_1920.jpg?VersionId=null&amp;itok=mmpO1_TY';
  constructor() { }

  ngOnInit(): void {
  }

}
