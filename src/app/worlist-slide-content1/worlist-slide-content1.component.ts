import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-worlist-slide-content1',
  templateUrl: './worlist-slide-content1.component.html',
  styleUrls: ['./worlist-slide-content1.component.css']
})
export class WorlistSlideContent1Component implements OnInit {

  @Input() name;

  constructor() { }

  ngOnInit() {
  }

}
