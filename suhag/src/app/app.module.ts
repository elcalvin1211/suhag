import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { SigninComponent } from './signin/signin.component';
import { StockComponent } from './stock/stock.component';
import { SizeComponent } from './size/size.component';
import { HomeComponent } from './home/home.component';
import { SizetableComponent } from './size/components/sizetable/sizetable.component';
import { SizedashComponent } from './size/components/sizedash/sizedash.component';
import { StockdashComponent } from './stock/components/stockdash/stockdash.component';
import { StocktableComponent } from './stock/components/stocktable/stocktable.component';
import { StocksellComponent } from './home/subpages/stocksell/stocksell.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    SigninComponent,
    StockComponent,
    SizeComponent,
    HomeComponent,
    SizetableComponent,
    SizedashComponent,
    StockdashComponent,
    StocktableComponent,
    StocksellComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
