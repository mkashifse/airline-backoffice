import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AmadeusSettingsViewComponent } from './amadeus-settings-view.component';

describe('AmadeusSettingsViewComponent', () => {
  let component: AmadeusSettingsViewComponent;
  let fixture: ComponentFixture<AmadeusSettingsViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AmadeusSettingsViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AmadeusSettingsViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
