import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuNavBarComponent } from './menu-nav-bar.component';

describe('MenuNavBarComponent', () => {
  let component: MenuNavBarComponent;
  let fixture: ComponentFixture<MenuNavBarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MenuNavBarComponent]
    });
    fixture = TestBed.createComponent(MenuNavBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
