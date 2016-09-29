import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { HTTP_PROVIDERS, HttpModule } from '@angular/http'
import { Title } from '@angular/platform-browser'
import { AppComponent } from './component'
import { PortfolioComponent } from '../components/portfolio'
import { RouteModule } from './routing'

export class AppModule {

  static get providers () {
    return [HTTP_PROVIDERS, Title]
  }

  static get annotations () {
    return [
      new NgModule({
        imports: [ BrowserModule, RouteModule, HttpModule ],
        declarations: [ AppComponent, PortfolioComponent ],
        bootstrap: [ AppComponent ]
      })
    ]
  }
}
