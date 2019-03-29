import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AppService } from 'src/app/store/app.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private service: AppService,
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
    this.service.login({
      'email': 'admin@domain.com',
      'password': 'admin'
    }).subscribe((resp) => {
      console.log(resp);
    });
  }

}
