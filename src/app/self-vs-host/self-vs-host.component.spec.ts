import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelfVsHostComponent } from './self-vs-host.component';

describe('SelfVsHostComponent', () => {
  let component: SelfVsHostComponent;
  let fixture: ComponentFixture<SelfVsHostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelfVsHostComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SelfVsHostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
