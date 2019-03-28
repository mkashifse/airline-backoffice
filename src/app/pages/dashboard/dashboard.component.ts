import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  form: FormGroup;

  constructor(
    private fb: FormBuilder,
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
  }

  submit() {
    console.log(this.form.value);
  }

}
