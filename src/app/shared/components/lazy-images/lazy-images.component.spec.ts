import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LazyImagesComponent } from './lazy-images.component';

describe('LazyImagesComponent', () => {
  let component: LazyImagesComponent;
  let fixture: ComponentFixture<LazyImagesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LazyImagesComponent]
    });
    fixture = TestBed.createComponent(LazyImagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
