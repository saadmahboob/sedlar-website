import { Component } from '@angular/core'

@Component({
  selector: 'app',
  template: `<router-outlet></router-outlet>`,
  styles: [
    require('bootstrap/dist/css/bootstrap.min.css'),
    require('bootstrap/dist/css/bootstrap-theme.min.css'),
    require('font-awesome/css/font-awesome.min.css')
  ]
})
export class AppComponent { }