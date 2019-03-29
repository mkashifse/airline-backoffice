import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AppService } from 'src/app/store/app.service';
import { AppActions } from 'src/app/store/app.actions';
import { Store } from '@ngxs/store';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private store: Store,
  ) {

    this.form = this.fb.group({
      officeId: [],
      userId: [],
      password: [],
      serviceEndpoint: [],
      pseudoCityCoe: [],
    });

  }

  ngOnInit() {
    this.store.dispatch(new AppActions.GetAmeduesSettings());
  }

  submit() {
    this.store.dispatch(new AppActions.PostAmeduesSettings(this.form.value));
  }

}
