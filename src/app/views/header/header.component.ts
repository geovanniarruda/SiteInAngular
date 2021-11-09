import { Component, OnInit } from '@angular/core';
import { Search } from 'src/app/models/search';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

 

  constructor() { }

  ngOnInit(): void {
  }

  searchModel = new Search("")

  onSubmit(){
    console.log(this.searchModel)
  }


}
