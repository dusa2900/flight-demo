import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
 public  images = [
  'https://assets.unenvironment.org/styles/article_billboard_image/s3/2021-02/nature-3558669_1920.jpg?VersionId=null&amp;itok=mmpO1_TY',
  "https://manavrachna.edu.in/wp-content/uploads/2017/02/Environment-blog-image.jpg",
  "https://www.azonano.com/images/Article_Images/ImageForArticle_5597_16057040829119968.png"
 
 ];
  actualImage: string='';
  changeBackgroundCounter = 0;
  constructor() { }

  ngOnInit(): void {
    this.actualImage = this.images[0];
    setInterval(() => {
      this.changeBackgroundCounter++;
      if (this.changeBackgroundCounter > this.images.length - 1) {
        this.changeBackgroundCounter = 0;
      }
      this.actualImage = this.images[this.changeBackgroundCounter];
    }, 1500);
 
  }

}
