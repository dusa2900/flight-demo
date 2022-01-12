import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DatePipe } from '@angular/common';
import { TravelService } from 'src/app/services/travel.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  searchForm: FormGroup | any;
  departureDate: any;
  returnDate: any;
  maxDate: any;
  myParams: any;

  constructor(datepipe: DatePipe, private formBuilder: FormBuilder, private travel: TravelService, private route: Router, private activate: ActivatedRoute) {
    this.travel.getTravels().subscribe(x=> console.log("s",x))
    const dateFormat = "yyyy-mm-dd";
    console.log(datepipe.transform(new Date().setDate(new Date().getDate())));
    this.departureDate = datepipe.transform(
      new Date().setDate(new Date().getDate() - 1),
      dateFormat
    );
    this.returnDate = this.maxDate = datepipe.transform(new Date(), dateFormat);
  }

  ngOnInit(): void {
   this.activate.params.subscribe((params: any) => this.myParams = params.caller);
    if (this.myParams) {
      this.travel.getTravels().subscribe((res: any) => {
        res.map((item: any) => {
          if (item.key === this.myParams) {
            this.searchForm.patchValue({
              from: item.from,
              to: item.to,
              departure:localStorage.getItem("dates")
            })
          }
        })
      })
    }
    this.searchForm = this.formBuilder.group({
      from: ['', Validators.required],
      to: ['', Validators.required],
      departure: [this.departureDate, Validators.required],
      return: [this.returnDate, Validators.required],
    })
  }
  onSearch() {
    console.log(this.searchForm.value);
    const search = this.searchForm.value;
    // const dates:any = {};
    // dates['departure'] = search.departure;
    // dates['return'] = search.return;
    this.travel.getTravels().subscribe((res: any) => {
      res.map((item: any) => {
    //    console.log(item);
        if (item.from === search.from && item.to === search.to) {
          // const key:any = item.id;
          // search.dTime = dates;
          // console.log("hhg",item.id,dates);
         localStorage.setItem("dates",search.departure);
          //this.travel.postTravels(key,dates);
          this.route.navigate(["travel", item.key]);
        }
      })
    }, err => console.log(err)
    )
  }

  onDateChange() {
    this.departureDate = this.searchForm.get('departure').value;
    this.returnDate = this.searchForm.get('return').value;

  }
}
