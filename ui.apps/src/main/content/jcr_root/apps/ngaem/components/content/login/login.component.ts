import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {first} from "rxjs/operators";
import {AuthenticationService} from "../service/auth.service";

@Component({
  selector: 'app-login',
  templateUrl: '/apps/ngaem/components/content/login/login.component.html',
  styleUrls: ['/apps/ngaem/components/content/login/login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  submitted: boolean = false;
  invalidLogin: boolean = false;
  constructor(private formBuilder: FormBuilder, private router: Router, private authService: AuthenticationService) { }

  onSubmit() {
    this.submitted = true;
    if (this.loginForm.invalid) {
      return;
    }
    if (this.loginForm.controls.email.value && this.loginForm.controls.password.value) {
      this.authService.login(this.loginForm.controls.email.value, this.loginForm.controls.password.value)
            .pipe(first())
            .subscribe(
                data => {
                     this.router.navigate(['user-details']);
                },
                error => {

                });

    } else {
      this.invalidLogin = true;
    }
  }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }



}
