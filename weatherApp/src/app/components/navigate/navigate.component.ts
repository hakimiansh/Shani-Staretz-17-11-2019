import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-navigate',
  templateUrl: './navigate.component.html',
  styleUrls: ['./navigate.component.css']
})
export class NavigateComponent implements OnInit {
  @Input() title: string;
  constructor() { }

  ngOnInit() {
  }

}
