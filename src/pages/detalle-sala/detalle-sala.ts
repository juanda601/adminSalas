import { SalasServiceProvider } from '../../providers/salas-service/salas-service';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import {ImagePicker} from '@ionic-native/image-picker';

/**
 * Generated class for the DetalleSalaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-detalle-sala',
  templateUrl: 'detalle-sala.html',
})
export class DetalleSalaPage {
  sala:any={};
  nombreSala:any;
  ubicaciones:any=[];

  constructor(public navCtrl: NavController, public navParams: NavParams, 
              private _salasService : SalasServiceProvider, public imagePicker: ImagePicker,
              public alert: AlertController) {
  }

  ionViewDidLoad() {
    this.nombreSala=this.navParams.data;
    this._salasService.getDetalleSalas(this.nombreSala).then(data =>{
      this.sala=data;
    });
    this._salasService.getUbicacion().then(res =>{
      this.ubicaciones=res;
    });
  }
  actualizarSala(){
    this._salasService.actualizarSala(this.sala,this.nombreSala).then(data =>{
      let alert =this.alert.create({
          title: 'Editar sala',
          message: 'Sala actualizada correctamente',
          buttons: [{
            text:"Aceptar",
            role:"cancel",
            handler: () => {
             this.navCtrl.pop();
            }
          }]
      })
      alert.present();
    });
  }
  selectImagen(){
    this.imagePicker.getPictures({maximumImagesCount: 1}).then((results) =>{
      for(var i=0; i<results.length; i++){
          this.sala.imagen=results[i];
      }
    },(err) =>{});
  }
}
