import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'operations',
    loadChildren: () => import('./operations/operations.module').then( m => m.OperationsPageModule)
  },
  {
    path: 'orange-money',
    loadChildren: () => import('./orange-money/orange-money.module').then( m => m.OrangeMoneyPageModule)
  },
  {
    path: 'free-money',
    loadChildren: () => import('./free-money/free-money.module').then( m => m.FreeMoneyPageModule)
  },
  {
    path: 'yup',
    loadChildren: () => import('./yup/yup.module').then( m => m.YupPageModule)
  },
  {
    path: 'wizeul-money',
    loadChildren: () => import('./wizeul-money/wizeul-money.module').then( m => m.WizeulMoneyPageModule)
  },
  {
    path: 'e-money',
    loadChildren: () => import('./e-money/e-money.module').then( m => m.EMoneyPageModule)
  },
  {
    path: 'paiement-facture',
    loadChildren: () => import('./paiement-facture/paiement-facture.module').then( m => m.PaiementFacturePageModule)
  },
  {
    path: 'senelec',
    loadChildren: () => import('./senelec/senelec.module').then( m => m.SenelecPageModule)
  },
  {
    path: 'sen-eau',
    loadChildren: () => import('./sen-eau/sen-eau.module').then( m => m.SenEauPageModule)
  },
  {
    path: 'woyafal',
    loadChildren: () => import('./woyafal/woyafal.module').then( m => m.WoyafalPageModule)
  },
  {
    path: 'transactions',
    loadChildren: () => import('./transactions/transactions.module').then( m => m.TransactionsPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
