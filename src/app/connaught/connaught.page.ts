import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-connaught',
  templateUrl: './connaught.page.html',
  styleUrls: ['./connaught.page.scss'],
})
export class ConnaughtPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  counties: string[] = ["Roscommon",  "Galway", "Mayo", "Sligo", "Leithrem"];

}
