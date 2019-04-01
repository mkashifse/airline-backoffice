import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AmadeusSettingsAddComponent } from './amadeus-settings-add.component';

describe('AmadeusSettingsAddComponent', () => {
  let component: AmadeusSettingsAddComponent;
  let fixture: ComponentFixture<AmadeusSettingsAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AmadeusSettingsAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AmadeusSettingsAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
