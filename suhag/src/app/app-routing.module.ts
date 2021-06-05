import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { StocksellComponent } from './home/subpages/stocksell/stocksell.component';
import { SigninComponent } from './signin/signin.component';
import { SizeComponent } from './size/size.component';
import { StockComponent } from './stock/stock.component';

const routes: Routes = [
  {path: '', component: StocksellComponent, pathMatch: 'full'},
  {path: 'signin', component: SigninComponent},
  {path: 'size', component: SizeComponent},
  {path: 'stock', component: StockComponent},
  {path: 'home', component: HomeComponent},
  {path: 'stocksell', component: StocksellComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
