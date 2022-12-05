import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IncludePathsComponent } from './include-paths.component';

describe('IncludePathsComponent', () => {
  let component: IncludePathsComponent;
  let fixture: ComponentFixture<IncludePathsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IncludePathsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IncludePathsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
