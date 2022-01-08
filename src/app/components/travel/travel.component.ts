import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TravelService } from 'src/app/services/travel.service';

@Component({
  selector: 'app-travel',
  templateUrl: './travel.component.html',
  styleUrls: ['./travel.component.css']
})
export class TravelComponent implements OnInit {
 public travels : any;
  myParams : string =''
  constructor(private activtedRoute:ActivatedRoute,private travel:TravelService) { }

  ngOnInit(): void {
    this.activtedRoute.params.subscribe((params:any) => this.myParams =  params.caller);
    this.travel.getTravels().subscribe( (res:any)=>{
      res.map((item:any)=>{
        console.log(item);
        if(item.key === this.myParams)
        {
          this.travels = item.buses;
          console.log(this.travels);
        }
      })
        },err=>console.log(err)
        )
  }

}
