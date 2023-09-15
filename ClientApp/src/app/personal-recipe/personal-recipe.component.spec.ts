import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalRecipeComponent } from './personal-recipe.component';
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {RouterTestingModule} from "@angular/router/testing";

describe('PersonalRecipeComponent', () => {
  let component: PersonalRecipeComponent;
  let fixture: ComponentFixture<PersonalRecipeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersonalRecipeComponent ],
      imports: [RouterTestingModule, HttpClientTestingModule],
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
