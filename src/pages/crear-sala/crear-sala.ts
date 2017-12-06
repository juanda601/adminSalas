import { ImagePicker } from '@ionic-native/image-picker';
import { SalasServiceProvider } from '../../providers/salas-service/salas-service';
import { Component } from '@angular/core';
import { AlertController, IonicPage, NavController } from 'ionic-angular';

/**
 * Generated class for the CrearSalaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-crear-sala',
  templateUrl: 'crear-sala.html',
})
export class CrearSalaPage {

  sala:any={
    asientos: "",
    estado:"Desocupada",
    imagen: "",
    ubicacion: "",
    ultimaLimpieza: ""
  };
  nombreSala:string ="";
  ubicaciones:any=[];

  constructor(public navCtrl: NavController, private _salasService : SalasServiceProvider, public imagePicker: ImagePicker,
              public alert: AlertController) {
  }

  ionViewDidLoad() {
    this._salasService.getUbicacion().then(res =>{
      this.ubicaciones=res;
    });
  }
  crearSala(){
    this._salasService.crearSala(this.sala,this.nombreSala).then(data =>{
      let alert =this.alert.create({
          title: 'Crear sala',
          message: 'Sala creada correctamente',
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
