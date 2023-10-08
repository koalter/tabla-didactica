import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
    children: [
      {
        path: 'colors',
        loadChildren: () => import('../colors/colors.module').then(m => m.ColorsPageModule)
      },
      {
        path: 'numbers',
        loadChildren: () => import('../numbers/numbers.module').then(m => m.NumbersPageModule)
      },
      {
        path: 'animals',
        loadChildren: () => import('../animals/animals.module').then(m => m.AnimalsPageModule)
      },
      {
        path: '',
        redirectTo: 'colors',
        pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
