import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { HttpModule } from '@angular/http'
import { Title } from '@angular/platform-browser'
import { AppComponent } from './app.component'
import { PortfolioComponent } from '../components/portfolio'
import { RouteModule } from './app.routing'

@NgModule({
  imports: [ BrowserModule, RouteModule, HttpModule ],
  declarations: [ AppComponent, PortfolioComponent ],
  bootstrap: [ AppComponent ],
  providers: [ Title ]
})
export class AppModule { }