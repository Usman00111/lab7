import { Component, OnInit } from '@angular/core';
import {NavController} from '@ionic/angular';
@Component({
  selector: 'app-leinster',
  templateUrl: './leinster.page.html',
  styleUrls: ['./leinster.page.scss'],
})
export class LeinsterPage implements OnInit {

  constructor(private NavCtrl:NavController) { }
  counties:string[]=["Down","Derry"];
  ngOnInit() {
  }
  onButtonClick(){
    this.NavCtrl.navigateForward('/leinster-counties');
  }
  // counties: string[] = ["Carlow", "Dublin", "Kildare",
  // "Kilkenny", "Laois", "Longford", "Louth", "Meath",
  // "Offaly", "Westmeath", "Wexford", "Wicklow"];

}
