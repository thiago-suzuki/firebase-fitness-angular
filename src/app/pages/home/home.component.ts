import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { GymService } from 'src/app/services/gym.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  standalone: false
})
export class HomeComponent  implements OnInit {
  personals: any[] = []
  programs: any[] = []
  loading: boolean = false;

  constructor(
    private gymService: GymService,
    private alertController: AlertController
  ) { }

  ngOnInit() {
    this.gymService.getAllPersonals().subscribe(personals => {
      this.personals = personals
    });
    this.gymService.getAllPrograms().subscribe(programs => {
      this.programs = programs
    });
  }

  async alertNotifications(message: string) {
    const alert = await this.alertController.create({
      mode: 'md',
      backdropDismiss : false,
      header: 'Aviso',
      subHeader: message,
      cssClass: 'alert-confirm-delete-train',
      buttons: [
        {
          text: 'OK',
          handler: () => {}
        }
      ]
    });

    await alert.present();
  }
}
