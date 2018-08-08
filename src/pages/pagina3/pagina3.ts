import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Libro} from "../../negocio/libro";
import { LibroRestProvider } from '../../providers/libro-rest/libro-rest';
import { FormularioPage } from '../formulario/formulario';
/**
 * Generated class for the Pagina3Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-pagina3',
  templateUrl: 'pagina3.html',
})
export class Pagina3Page {

  listaLibros:Libro[]=[];


  constructor(public navCtrl: NavController,
     public navParams: NavParams,
     public miservicio:LibroRestProvider) {
    /*

    this.listaLibros.push(new Libro ("titulo1","autor1",100,"java"));
    this.listaLibros.push(new Libro ("titulo2","autor2",100,"net"));
    this.listaLibros.push(new Libro ("titulo3","autor3",100,"php"));
    console.log(this.listaLibros);
    */

    this.miservicio.findAll().subscribe((datos)=> {

      this.listaLibros=datos;
    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Pagina3Page');
  }

  seleccionarLibro(libro:Libro){


  }

  siguiente() {

    this.navCtrl.push(FormularioPage);
  }

}
