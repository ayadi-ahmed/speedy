import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './educal/Home/Home/home.component';
import { HomeTwoComponent } from './educal/home-two/home-two-main/home-two.component';
import { HomeThreeComponent } from './educal/home-three/home-three-main/home-three.component';
import { CoursesPageComponent } from './educal/courses/courses-page/courses-page.component';
import { CoursesListPageComponent } from './educal/courses-list-page/courses-list-main/courses-list-page.component';
import { CourseSidebarMainComponent } from './educal/course-sidebar/course-sidebar-main/course-sidebar-main.component';
import { CourseDetailsComponent } from './educal/course-details/course-details-main/course-details.component';
import { BlogComponent } from './educal/blog/blog-main/blog.component';
import { BlogDetailsMainComponent } from './educal/blog-details/blog-details-main/blog-details-main.component';
// import { AboutMainComponent } from './educal/about/about-main/about-main.component';
import { InstructorMainComponent } from './educal/instructor/instructor-main/instructor-main.component';
import { InstructorDetailsComponent } from './educal/instructor-details/instructor-details-main/instructor-details.component';
import { EventDetailsMainComponent } from './educal/event-details/event-details-main/event-details-main.component';
import { CartComponent } from './educal/cart/cart-main/cart.component';
import { WishlistMainComponent } from './educal/wishlist/wishlist-main/wishlist-main.component';
import { CheckoutMainComponent } from './educal/checkout/checkout-main/checkout-main.component';
import { SignInMainComponent } from './educal/sign-in/sign-in-main/sign-in-main.component';
import { SignUpMainComponent } from './educal/sign-up/sign-up-main/sign-up-main.component';
import { ErrorPageComponent } from './educal/error-page/error-page.component';
import { ContactMainComponent } from './educal/contact/contact-main/contact-main.component';
import { DashboardComponent } from './educal/dashboard/dashboard.component';
import { DashboardBricoComponent } from './educal/dashboard/dashboard-brico/dashboard-brico.component';
import { DashParticuliersComponent } from './educal/dashboard/dash-particuliers/dash-particuliers.component';
import { DashServicesComponent } from './educal/dashboard/dash-services/dash-services.component';
import { DashRdvComponent } from './educal/dashboard/dash-rdv/dash-rdv.component';
import { DashProfilComponent } from './educal/dashboard/dash-profil/dash-profil.component';



const routes: Routes = [
  { path: '', component: HomeTwoComponent },
  { path: 'home', component: HomeTwoComponent },
  {
    path: 'home-two',
    component: HomeTwoComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'dashboard/profil',
    component: DashProfilComponent
  },
  {
    path: 'dashboard/bricoleurs',
    component: DashboardBricoComponent
  },
  {
    path: 'dashboard/particuliers',
    component: DashParticuliersComponent
  },
  {
    path: 'dashboard/services',
    component: DashServicesComponent
  },
  {
    path: 'dashboard/rdv',
    component: DashRdvComponent
  },
  {
    path: 'courses',
    component: CoursesPageComponent
  },
  {
    path: 'courses-list',
    component: CoursesListPageComponent
  },
  {
    path: 'nos-services',
    component: CourseSidebarMainComponent
  },
  {
    path: 'service/:id',
    component: CourseDetailsComponent
  },
  {
    path: 'blog',
    component: BlogComponent
  },
  {
    path: 'blog-details',
    component: BlogDetailsMainComponent
  },
  // {
  //   path: 'about',
  //   component: AboutMainComponent
  // },
  {
    path: 'instructor',
    component: InstructorMainComponent
  },
  {
    path: 'instructor-details',
    component: InstructorDetailsComponent
  },
  {
    path: 'event-details',
    component: EventDetailsMainComponent
  },
  {
    path: 'cart',
    component: CartComponent
  },
  {
    path: 'wishlist',
    component: WishlistMainComponent
  },
  {
    path: 'checkout',
    component: CheckoutMainComponent
  },
  {
    path: 'sign-in',
    component: SignInMainComponent
  },
  {
    path: 'sign-up',
    component: SignUpMainComponent
  },
  {
    path: 'error',
    component: ErrorPageComponent
  },
  {
    path: 'partenaire',
    component: ContactMainComponent
  },
  {
    path: '**', pathMatch: 'full',
    component: ErrorPageComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
