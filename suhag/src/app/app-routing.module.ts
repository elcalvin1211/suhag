import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ReturnComponent } from './home/subpages/return/return.component';
import { StocksellComponent } from './home/subpages/stocksell/stocksell.component';
import { AddStockItemComponent } from './stock/floatingforms/add-stock-item/add-stock-item.component';
import { EditStockItemComponent } from './stock/floatingforms/edit-stock-item/edit-stock-item.component';
import { SigninComponent } from './signin/signin.component';
import { SizeComponent } from './size/size.component';
import { StockComponent } from './stock/stock.component';

const routes: Routes = [
  {path: '', component: StocksellComponent, pathMatch: 'full'},
  {path: 'signin', component: SigninComponent},
  {path: 'size', component: SizeComponent},
  {path: 'stock', component: StockComponent, children: [
    {path: 'addstock', component: AddStockItemComponent},
    {path: 'editstock', component: EditStockItemComponent},
  ]},
  {path: 'home', component: HomeComponent},
  {path: 'stocksell', component: StocksellComponent},
  {path: 'return', component: ReturnComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
