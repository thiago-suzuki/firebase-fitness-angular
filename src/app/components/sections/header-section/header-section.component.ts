import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'HeaderSection',
  templateUrl: './header-section.component.html',
  styleUrls: ['./header-section.component.scss'],
  standalone: false
})
export class HeaderSectionComponent  implements OnInit {
  @Output() onShowAlert: EventEmitter<string> = new EventEmitter();

  constructor() { }

  ngOnInit() {}

  alertNotifications(message: string) {
    this.onShowAlert.emit(message);
  }
}
