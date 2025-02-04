import { Component, Input, OnInit } from '@angular/core';
import { ProgramDTO } from 'src/app/models/program.model';

@Component({
  selector: 'ProgramListSection',
  templateUrl: './program-list-section.component.html',
  styleUrls: ['./program-list-section.component.scss'],
  standalone: false
})
export class ProgramListSectionComponent  implements OnInit {
  @Input() programs: ProgramDTO[] = [];
  
  constructor() { }

  ngOnInit() {}
}
