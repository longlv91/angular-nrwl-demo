import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserLayoutComponent } from './user-layout.component';
import { Router, RouterOutlet, ChildrenOutletContexts } from '@angular/router';
import { Renderer } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';

class MockRouter {
  public navigate() {};
}

describe('UserLayoutComponent', () => {
  let component: UserLayoutComponent;
  let fixture: ComponentFixture<UserLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [ UserLayoutComponent ],
      providers: [
        Renderer,
        ChildrenOutletContexts,
        {provide: Router, useClass: MockRouter},
        RouterOutlet
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
