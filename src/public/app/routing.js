import { RouterModule } from '@angular/router'
import { PortfolioComponent } from '../components/portfolio'

const appRoutes = [
  { path: '', redirectTo: 'portfolio', pathMatch: 'full' },
  { path: 'portfolio', component: PortfolioComponent }
]

export const RouteModule = RouterModule.forRoot(appRoutes, { useHash: true })
