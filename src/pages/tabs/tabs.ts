import { SalasPage } from '../salas/salas';
import { Component } from '@angular/core';


@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = SalasPage;

  constructor() {

  }
}
