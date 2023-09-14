import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipeCardViewComponent } from './recipe-card-view.component';

describe('RecipeCardViewComponent', () => {
  let component: RecipeCardViewComponent;
  let fixture: ComponentFixture<RecipeCardViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecipeCardViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecipeCardViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
