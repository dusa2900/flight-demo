import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TravelService } from 'src/app/services/travel.service';

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.css']
})
export class TicketComponent implements OnInit {
  busObject:any;
  busftr :any;
  id :  number = 0;
  myParams: any;
  constructor(private activtedRoute:ActivatedRoute,private travel:TravelService) { }

  ngOnInit(): void {
    this.activtedRoute.params.subscribe((params:any) => console.log("s",params)
    );
    // this.activtedRoute.params.subscribe((params:any) => this.id =  params.id);
    this.travel.getTravels().subscribe( (res:any)=>{
      res.map((item:any)=>{
        console.log("x",item);
        if(item.key === this.myParams)
        {
          this.busftr = item
          console.log("bbb",this.busftr.from);
          
          item.buses.map( (x:any)=>{
            console.log(x.id) 
            if(x.id == this.id)
            {
              this.busObject = x;
              console.log("c",this.busObject['bus']);
              
            }
          }
          )
        }
      })
        },err=>console.log(err)
        )
  }

}
