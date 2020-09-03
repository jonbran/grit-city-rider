import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './components/homepage/homepage.component';
import { CedarRiverTrailComponent } from './blog posts/cedar-river-trail/cedar-river-trail.component';


const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'cedar-river', component: CedarRiverTrailComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
