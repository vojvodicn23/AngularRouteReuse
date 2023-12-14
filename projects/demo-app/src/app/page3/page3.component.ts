import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page3',
  templateUrl: './page3.component.html',
  styleUrls: []
})
export class Page3Component implements OnInit{
  

  page3 = 'loading...';

  ngOnInit() {
    setTimeout(()=>{
      this.page3 = 'PAGE 3';
    },3000);
  }
}

