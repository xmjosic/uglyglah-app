import { AuthGuard } from './auth/auth.guard';
import { UserProfileComponent } from './auth/user-profile/user-profile.component';
import { ViewPostComponent } from './post/view-post/view-post.component';
import { PostTileComponent } from './shared/post-tile/post-tile.component';
import { ListSubuglyglahComponent } from './subuglyglah/list-subuglyglah/list-subuglyglah.component';
import { CreateSubuglyglahComponent } from './subuglyglah/create-subuglyglah/create-subuglyglah.component';
import { CreatePostComponent } from './post/create-post/create-post.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'view-post/:id', component: ViewPostComponent },
  {
    path: 'user-profile/:name',
    component: UserProfileComponent,
    canActivate: [AuthGuard],
  },
  { path: 'list-subuglyglah', component: ListSubuglyglahComponent },
  {
    path: 'create-post',
    component: CreatePostComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'create-subuglyglah',
    component: CreateSubuglyglahComponent,
    canActivate: [AuthGuard],
  },
  { path: 'sign-up', component: SignupComponent },
  { path: 'login', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
