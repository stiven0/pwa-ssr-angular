import { Component, OnInit } from '@angular/core';

import { HandleStorageService } from 'src/app/core/handle-storage.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.sass']
})
export class LogoutComponent implements OnInit {

  constructor(
    private handleStorageService: HandleStorageService
  ) { }

  ngOnInit(): void {
  }

  logout() {
    this.handleStorageService.logout();
  }

}
