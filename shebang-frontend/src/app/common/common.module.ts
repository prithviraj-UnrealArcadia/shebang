import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingComponent } from './landing/landing.component';
import { SidenavBarComponent } from './sidenav-bar/sidenav-bar.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';

@NgModule({
  declarations: [LandingComponent, SidenavBarComponent, NavBarComponent],
  imports: [CommonModule],
  exports: [SidenavBarComponent, NavBarComponent],
})
export class CommonApplicationModule {}
