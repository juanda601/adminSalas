import { Http } from '@angular/http';
import { Injectable } from '@angular/core';


/*
  Generated class for the SalasServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class SalasServiceProvider {
  baseUrl="https://adminsalas.firebaseio.com/";
  constructor(public http: Http) {

  }

  getUbicacion(){
    return new Promise(resolve=>{
      this.http.get(`${this.baseUrl}/Ubicacion.json`)
               .subscribe(res => resolve(res.json()));

    });
  }
  getSalas(){
    return new Promise(resolve=>{
      this.http.get(`${this.baseUrl}/Salas.json`)
               .subscribe(res => resolve(res.json()));

    });
  }
  getDetalleSalas(nombre){
    return new Promise(resolve=>{
      this.http.get(`${this.baseUrl}/Salas/${nombre}.json`)
               .subscribe(res => resolve(res.json()));

    });
  }
  actualizarSala(sala, nombre){
    return new Promise(resolve=>{
      this.http.patch(`${this.baseUrl}/Salas/${nombre}.json`,JSON.stringify(sala))
               .subscribe(res => resolve(res.json()));

    });
  }
  crearSala(sala, nombre){
    return new Promise(resolve=>{
      this.http.patch(`${this.baseUrl}/Salas/${nombre}.json`,JSON.stringify(sala))
               .subscribe(res => resolve(res.json()));

    });
  }
  borrarSala(nombre){
    return new Promise(resolve=>{
      this.http.delete(`${this.baseUrl}/Salas/${nombre}.json`)
               .subscribe(res => resolve(res.json()));

    });
  }
}
