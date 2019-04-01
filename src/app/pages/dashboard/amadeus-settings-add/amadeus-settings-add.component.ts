import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Store } from '@ngxs/store';
import { AppActions } from 'src/app/store/app.actions';

@Component({
  selector: 'app-amadeus-settings-add',
  templateUrl: './amadeus-settings-add.component.html',
  styleUrls: ['./amadeus-settings-add.component.scss']
})
export class AmadeusSettingsAddComponent implements OnInit {

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
