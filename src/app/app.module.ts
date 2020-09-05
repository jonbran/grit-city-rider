import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { TileComponent } from './components/tile/tile.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { CedarRiverTrailComponent } from './blog posts/cedar-river-trail/cedar-river-trail.component';
import { ImageSliderComponent } from './components/image-slider/image-slider.component';
/* angular material */
import { AngularMaterialModule } from './angular-material.module';
import { DuvalToBenHowardComponent } from './blog posts/duval-to-ben-howard/duval-to-ben-howard.component';
import { TahuyaComponent } from './blog posts/tahuya/tahuya.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    TileComponent,
    HomepageComponent,
    CedarRiverTrailComponent,
    ImageSliderComponent,
    DuvalToBenHowardComponent,
    TahuyaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    AngularMaterialModule,

  ],
  providers: [],
  // schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule { }
