import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './components/homepage/homepage.component';
import { CedarRiverTrailComponent } from './blog posts/cedar-river-trail/cedar-river-trail.component';
import { DuvalToBenHowardComponent } from './blog posts/duval-to-ben-howard/duval-to-ben-howard.component';
import { TahuyaComponent } from './blog posts/tahuya/tahuya.component';


const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'home/:typeId' , component: HomepageComponent },
  { path: 'cedar-river', component: CedarRiverTrailComponent },
  { path: 'duval-benhoward', component: DuvalToBenHowardComponent },
  { path: 'tahuya', component: TahuyaComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
