import { NgModule } from '@angular/core';

import { IonicModule } from '@ionic/angular';

import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { HeaderSectionComponent } from 'src/app/components/sections/header-section/header-section.component';
import { PerfilContentComponent } from 'src/app/components/contents/perfil-content/perfil-content.component';
import { PersonalListSectionComponent } from 'src/app/components/sections/personal-list-section/personal-list-section.component';
import { ProgramListSectionComponent } from 'src/app/components/sections/program-list-section/program-list-section.component';
import { MoreContentListSectionComponent } from 'src/app/components/sections/more-content-list-section/more-content-list-section.component';


@NgModule({
  declarations: [
    HomeComponent, 
    HeaderSectionComponent,
    MoreContentListSectionComponent,
    PerfilContentComponent,
    PersonalListSectionComponent,
    ProgramListSectionComponent
  ],
  imports: [
    CommonModule, 
    FormsModule, 
    IonicModule,
    HomeRoutingModule, 
    ReactiveFormsModule,
    AngularFirestoreModule.enablePersistence()
  ],
  //providers: [HeaderSectionComponent]
})
export class HomeModule {}
