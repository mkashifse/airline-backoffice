import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Store, Select } from '@ngxs/store';
import { AppActions } from 'src/app/store/app.actions';
import { Observable } from 'rxjs';
import { AppState } from 'src/app/store/app.state';

@Component({
  selector: 'app-amadeus-settings-edit',
  templateUrl: './amadeus-settings-edit.component.html',
  styleUrls: ['./amadeus-settings-edit.component.scss']
})
export class AmadeusSettingsEditComponent implements OnInit {

  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private store: Store,
  ) {

    this.form = this.fb.group({
      _id: [],
      officeId: [],
      userId: [],
      password: [],
      serviceEndpoint: [],
      pseudoCityCoe: [],
    });


    this.store.select(AppState.amadeusSettings).subscribe((resp) => {
      if (resp) {
        this.form.patchValue(resp);
      }
    });

  }

  ngOnInit() {
    this.store.dispatch(new AppActions.GetAmeduesSettings());
  }

  submit() {
    this.store.dispatch(new AppActions.PostAmeduesSettings(this.form.value));
  }


}
