import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-operations',
  templateUrl: './operations.page.html',
  styleUrls: ['./operations.page.scss'],
})
export class OperationsPage implements OnInit {

  constructor(private navCtrl:NavController) { }

  ngOnInit() {
  }
  orangeMoney(){
    this.navCtrl.navigateForward('/orange-money');
  }
}
