import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { PersonalComponent } from './personal/personal.component';
import { ContactInfoComponent } from './contact-info/contact-info.component';
import { EducComponent } from './educ/educ.component';
import { WorkComponent } from './work/work.component';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    PersonalComponent,
    ContactInfoComponent,
    EducComponent,
    WorkComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
