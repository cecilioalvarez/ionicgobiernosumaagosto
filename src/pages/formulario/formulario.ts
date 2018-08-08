import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Libro } from '../../negocio/libro';
import { LibroRestProvider } from '../../providers/libro-rest/libro-rest';
import { Pagina3Page } from '../pagina3/pagina3';

/**
 * Generated class for the FormularioPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-formulario',
  templateUrl: 'formulario.html',
})
export class FormularioPage {

  libro:Libro= new Libro();
  constructor(public navCtrl: NavController, public navParams: NavParams, public servicio:LibroRestProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FormularioPage');
  }

  insertar() {

    console.log(this.libro);

    this.servicio.insert(this.libro).subscribe((datos)=> {

      this.navCtrl.push(Pagina3Page);
    })
  }

}
