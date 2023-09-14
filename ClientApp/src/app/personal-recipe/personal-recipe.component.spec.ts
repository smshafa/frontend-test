import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalRecipeComponent } from './personal-recipe.component';

describe('PersonalRecipeComponent', () => {
  let component: PersonalRecipeComponent;
  let fixture: ComponentFixture<PersonalRecipeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersonalRecipeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PersonalRecipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
