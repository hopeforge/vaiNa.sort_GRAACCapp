import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { NotfoundComponent } from './pages/notfound/notfound.component';
import { AboutComponent } from './pages/about/about.component';
import { DatabaseComponent } from './pages/database/database.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'sobre', component: AboutComponent },
  { path: 'database', component: DatabaseComponent },
  { path: '**', component: NotfoundComponent }
];

export const appRoutingModule = RouterModule.forRoot(routes);