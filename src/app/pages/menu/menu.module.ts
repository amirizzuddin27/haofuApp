import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { MenuPage } from './menu.page';

const routes: Routes = [
  {
    path: 'menu',
    component: MenuPage,
    children: [
      {
      path: 'first',
      loadChildren: '../first/first.module#FirstPageModule'
      },
      {
        path: 'second',
        loadChildren: '../second/second.module#SecondPageModule'
      },
      {
        path: 'third',
        loadChildren: '../third/third.module#ThirdPageModule'
      },
      {
        path: 'fourth',
        loadChildren: '../fourth/fourth.module#FourthPageModule'
      },
      {
        path: 'menu2',
        loadChildren: '../menu2/menu2.module#Menu2PageModule'
      },
      {
        path: 'fifth',
        loadChildren: '../fifth/fifth.module#FifthPageModule'
      },
      {
        path: 'login',
        loadChildren: '../login/login.module#LoginPageModule'
      },
      {
        path: 'sup',
        loadChildren: '../sup/sup.module#SupPageModule'
      },
      {
        path: 'supfind',
        loadChildren: '../supfind/supfind.module#SupfindPageModule'
      }

    ]
  },
  {
    path: '',
    redirectTo: '/menu/login'
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [MenuPage]
})
export class MenuPageModule {}
