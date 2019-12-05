import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { AddBillComponent } from './add-bill/add-bill.component';
import { EditBillComponent } from './edit-bill/edit-bill.component';
import { TotalComponent } from './total/total.component';
import { AboutComponent } from './about/about.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { ResetpasswordComponent } from './resetpassword/resetpassword.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'add_bill',
    component: AddBillComponent
  },
  {
    path: 'edit_bill',
    component: EditBillComponent
  },
  {
    path: 'total',
    component: TotalComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'sign-up',
    component: SignUpComponent
  },
  {
    path: 'reset',
    component: ResetpasswordComponent
  },






//last route
  {
    path: '**',
    component: NotFoundComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
