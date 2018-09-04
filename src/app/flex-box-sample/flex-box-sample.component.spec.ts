import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlexBoxSampleComponent } from './flex-box-sample.component';

describe('FlexBoxSampleComponent', () => {
  let component: FlexBoxSampleComponent;
  let fixture: ComponentFixture<FlexBoxSampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlexBoxSampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlexBoxSampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
