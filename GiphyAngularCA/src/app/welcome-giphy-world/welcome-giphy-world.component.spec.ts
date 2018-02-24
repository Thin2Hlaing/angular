import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WelcomeGiphyWorldComponent } from './welcome-giphy-world.component';

describe('WelcomeGiphyWorldComponent', () => {
  let component: WelcomeGiphyWorldComponent;
  let fixture: ComponentFixture<WelcomeGiphyWorldComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WelcomeGiphyWorldComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WelcomeGiphyWorldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
