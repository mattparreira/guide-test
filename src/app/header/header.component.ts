import {Component} from '@angular/core';
import {Router} from '@angular/router';

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
      icon: 'pi pi-list',
      route: 'list'
    },
    {
      label: 'Gráfico',
      icon: 'pi pi-chart-bar',
      route: 'chart'
    }
  ]

  constructor(
    private router: Router
  ) {
  }

  navigate(route: string) {
    this.router.navigate([route])
  }
}
