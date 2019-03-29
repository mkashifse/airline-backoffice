import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Store } from '@ngxs/store';
import { AppActions } from 'src/app/store/app.actions';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private store: Store,
  ) {

    this.form = this.fb.group({
      email: ['admin@domain.com'],
      password: ['admin'],
    });

  }

  ngOnInit() {
  }

  submit() {
    this.store.dispatch(new AppActions.Login(this.form.value));
  }

}
