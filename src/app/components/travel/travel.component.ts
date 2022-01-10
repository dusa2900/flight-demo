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
  busObject :any;
  busftr :any;
  isHandledModel : boolean = false;
  constructor(private activtedRoute:ActivatedRoute,private travel:TravelService) { }

  ngOnInit(): void {
    this.activtedRoute.params.subscribe((params:any) => this.myParams =  params.caller);
    this.travel.getTravels().subscribe( (res:any)=>{
      res.map((item:any)=>{
      //  console.log(item);
        if(item.key === this.myParams)
        {
          this.travels = item.buses;
         // console.log(this.travels);
          //console.log(item);
        }
      })
        },err=>console.log(err)
        )
  }


  bookTicket(id:number)
  {
   this.isHandledModel= !this.isHandledModel
    this.travel.getTravels().subscribe( (res:any)=>{
      res.map((item:any)=>{
       // console.log("x",item);
        if(item.key === this.myParams)
        {
          this.busftr = item
         // console.log("bbb",this.busftr.from);
          
          item.buses.map( (x:any)=>{
            //console.log(x.id) 
            if(x.id === id)
            {
              this.busObject = x;
              //console.log("c",this.busObject);
              
            }
          }
          )
        }
      })
        },err=>console.log(err)
        )
  }
  print()
  {
    window.print()
  }
  close()
  {
    this.isHandledModel = !this.isHandledModel;
  }
}
