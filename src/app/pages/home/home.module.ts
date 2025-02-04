import { NgModule } from '@angular/core';

import { IonicModule } from '@ionic/angular';

import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';


@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule, 
    FormsModule, 
    IonicModule,
    HomeRoutingModule, 
    ReactiveFormsModule,
    AngularFirestoreModule.enablePersistence()
  ]
})
export class HomeModule {}
