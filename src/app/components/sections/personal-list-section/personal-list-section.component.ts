import { Component, Input, OnInit } from '@angular/core';
import { PersonalDTO } from 'src/app/models/personal.model';

@Component({
  selector: 'PersonalListSection',
  templateUrl: './personal-list-section.component.html',
  styleUrls: ['./personal-list-section.component.scss'],
  standalone: false
})
export class PersonalListSectionComponent  implements OnInit {
  @Input() personals: PersonalDTO[] = [];

  constructor() { }

  ngOnInit() {}

}
