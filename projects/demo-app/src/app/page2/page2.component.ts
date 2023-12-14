import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page2',
  templateUrl: './page2.component.html',
  styleUrls: []
})
export class Page2Component implements OnInit{
  

  page2 = 'loading...';

  ngOnInit() {
    setTimeout(()=>{
      this.page2 = 'PAGE 2';
    },3000);
  }
}
