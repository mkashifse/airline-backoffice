import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AmadeusSettingsEditComponent } from './amadeus-settings-edit.component';

describe('AmadeusSettingsEditComponent', () => {
  let component: AmadeusSettingsEditComponent;
  let fixture: ComponentFixture<AmadeusSettingsEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AmadeusSettingsEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AmadeusSettingsEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
