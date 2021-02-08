import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-start',
  templateUrl: './start.page.html',
  styleUrls: ['./start.page.scss'],
})
export class StartPage implements OnInit {

  constructor(public alertController: AlertController, public router: Router) { }

  ngOnInit() {
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      cssClass: 'wrongButtonMsg',
      header: 'Haha no',
      message: 'Wrong button. Search for another one',
      buttons: ['OK :(']
    });

    await alert.present();
  }

  async nextLevel() {
    this.router.navigateByUrl('level2')
  }

}
