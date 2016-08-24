import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { HTTP_PROVIDERS } from '@angular/http'
import { Title } from '@angular/platform-browser'
import { AppComponent } from './component'
import { PortfolioComponent } from '../components/portfolio'
import { RouteModule } from './routing'

export class AppModule {

  static get annotations () {
    return [
      new NgModule({
        imports: [ BrowserModule, RouteModule ],
        providers: [HTTP_PROVIDERS, Title],
        declarations: [ AppComponent, PortfolioComponent ],
        bootstrap: [ AppComponent ]
      })
    ]
  }
}
