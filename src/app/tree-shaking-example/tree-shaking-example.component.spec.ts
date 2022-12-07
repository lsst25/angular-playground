import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TreeShakingExampleComponent } from './tree-shaking-example.component';

describe('TreeShakingExampleComponent', () => {
  let component: TreeShakingExampleComponent;
  let fixture: ComponentFixture<TreeShakingExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TreeShakingExampleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TreeShakingExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
