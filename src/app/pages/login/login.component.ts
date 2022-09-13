import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { HandleStorageService } from 'src/app/core/handle-storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {

  email: FormControl = new FormControl( '', [ Validators.required, Validators.email ] );

  constructor(
    private router: Router,
    private handleStorageService: HandleStorageService,
  ) { }

  ngOnInit(): void {
  }

  login() {

    if ( this.email.valid ) {
      
          // guardar correo en el locastorga
          this.handleStorageService.setEmail( this.email.value );

          // navegar a home
          this.router.navigateByUrl('/home');

    }

  }

}
