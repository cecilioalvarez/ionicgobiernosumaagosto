import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  items:string[]=["java","net","php"];
  lenguaje:string;
  constructor(public navCtrl: NavController,public alertCtrl:AlertController) {

  }

  pulsaste() {

    
    const alert = this.alertCtrl.create({
      title: 'Mensaje',
      subTitle: 'Estamos en la formacion de ionicxx',
      buttons: ['OK']
    });
    alert.present();

  }
  itemseleccionado(item:string) {

    console.log(item);
  }

  seleccion() {

    console.log(this.lenguaje);
  }

}
