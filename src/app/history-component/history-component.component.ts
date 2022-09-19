import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-history-component',
  templateUrl: './history-component.component.html',
  styleUrls: ['./history-component.component.css']
})
export class HistoryComponentComponent implements OnInit {

  isShowing: boolean = true;
  
  constructor() { }

  ngOnInit(): void {
  }

}
