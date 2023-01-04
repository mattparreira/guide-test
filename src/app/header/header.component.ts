import {Component} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: 'header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  title = 'Guide TI'
  buttons = [
    {
      label: 'Listagem',
      icon: 'pi pi-list'
    },
    {
      label: 'Gráfico',
      icon: 'pi pi-chart-bar'
    }
  ]
}
