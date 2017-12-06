import { DetalleSalaPage } from '../detalle-sala/detalle-sala';
import { SalasServiceProvider } from '../../providers/salas-service/salas-service';
import { Component } from '@angular/core';
import { AlertController, IonicPage, LoadingController, NavController, NavParams } from 'ionic-angular';
import { CrearSalaPage } from '../crear-sala/crear-sala';

/**
 * Generated class for the SalasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-salas',
  templateUrl: 'salas.html',
})
export class SalasPage {

  salasList:any=[];
  salas:any;
  
    constructor(private _salasService : SalasServiceProvider, public navCtrl:NavController, 
                public navParams:NavParams, public loadingCtrl:LoadingController, public alert: AlertController)  { 
  
    }
  
    cargarSalas(){
      this.salasList=[];
      let loader = this.loadingCtrl.create({
        content: "Cargando salas....."
      });
  
      loader.present().then(() => {
        this._salasService.getSalas().then(data => {
          this.salas=data;
          for(var key in this.salas){
            this.salasList.push({nombre: key, imagen:this.salas[key].imagen, asientos:this.salas[key].asientos, 
                                  ubicacion:this.salas[key].ubicacion, ultimaLimpieza:this.salas[key].ultimaLimpieza,
                                  estado: this.salas[key].estado})
          }
          loader.dismiss();
        });
      });
  
    }
    agregar(){
      this.navCtrl.push(CrearSalaPage);
    }
    verDetalle(nombre){
      this.navCtrl.push(DetalleSalaPage, nombre);
    }
    ionViewWillEnter(){
      this.cargarSalas();
    }
    eliminarSala(nombre){
      let alert =this.alert.create({
        title: 'Eliminar sala',
        message: `Esta seguro que desea eliminar a ${nombre} ?`,
        buttons: [{
          text:"Aceptar",
          handler: () => {
           this._salasService.borrarSala(nombre).then(data =>{
             this.cargarSalas();
           });
          }
        }]
    })
    alert.present();
    }

}
