import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Store, Select } from '@ngxs/store';
import { AppActions } from 'src/app/store/app.actions';
import { AppState } from 'src/app/store/app.state';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-amadeus-settings-view',
  templateUrl: './amadeus-settings-view.component.html',
  styleUrls: ['./amadeus-settings-view.component.scss']
})
export class AmadeusSettingsViewComponent implements OnInit {

  form: FormGroup;
  @Select(AppState.amadeusSettings)
  $amadues: Observable<any>;

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
  }

}
