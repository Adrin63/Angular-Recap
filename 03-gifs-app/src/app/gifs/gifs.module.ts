import { NgModule } from '@angular/core';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { SearchBoxComponent } from './components/search-box/search-box.component';
import { CardListComponent } from './components/card-list/card-list.component';
import { CommonModule } from '@angular/common';
import { GifsCardComponent } from './components/gifs-card/gifs-card.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
    imports: [
      CommonModule,
      SharedModule,
    ],
    exports: [HomePageComponent],
    declarations: [
    HomePageComponent,
    SearchBoxComponent,
    CardListComponent,
    GifsCardComponent
  ],
    providers: [],
})
export class GifsModule { }
