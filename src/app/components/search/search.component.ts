import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DatePipe } from '@angular/common';
import { TravelService } from 'src/app/services/travel.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  searchForm : FormGroup | any;
  departureDate : any ;

  returnDate : any ;
  maxDate : any ;
  constructor(datepipe:DatePipe,private formBuilder:FormBuilder,private travel:TravelService,private route:Router) { 
    const dateFormat = "yyyy-mm-dd";
    console.log(datepipe.transform(new Date().setDate(new Date().getDate())));
      this.departureDate = datepipe.transform(
      new Date().setDate(new Date().getDate()-1),
      dateFormat
    );
    this.returnDate = this.maxDate = datepipe.transform(new Date(),dateFormat);
  }

  ngOnInit(): void {
    this.searchForm=this.formBuilder.group({
      from:['',Validators.required],
      to:['',Validators.required],
      departure:[this.departureDate,Validators.required],
      return:[this.returnDate,Validators.required],
    } )
  }
onSearch()
{
  console.log(this.searchForm.value);
  const search = this.searchForm.value;
  this.travel.getTravels().subscribe( (res:any)=>{
    res.map((item:any)=>{
      console.log(item);
      if(item.from === search.from && item.to === search.to)
      {
        this.route.navigate(["travel",item.key]);
      }
    })
      },err=>console.log(err)
      )
  
}
onDateChange() {
  this.departureDate = this.searchForm.get('departure').value ;
  this.returnDate = this.searchForm.get('return').value;
  
}
}
