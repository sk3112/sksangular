import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ABOUTComponent } from './about/about.component';
import { CONTACTComponent } from './contact/contact.component';
import { HOMEComponent } from './home/home.component';
import { LOGINComponent } from './login/login.component';
import { NAVBARComponent } from './navbar/navbar.component';
import { REGISTERComponent } from './register/register.component';

const routes: Routes = [
  {path:"", redirectTo:"login", pathMatch:"full"},
  {path:"about ",component:ABOUTComponent },
  {path:"login", component:LOGINComponent},
  {path:"register",component:REGISTERComponent},
  {path:"contact",component:CONTACTComponent},
  {path:"home",component:HOMEComponent},
  {path:"navbar",component:NAVBARComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
