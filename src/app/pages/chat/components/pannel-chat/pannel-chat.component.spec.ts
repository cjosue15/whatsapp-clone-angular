import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PannelChatComponent } from './pannel-chat.component';

describe('PannelChatComponent', () => {
  let component: PannelChatComponent;
  let fixture: ComponentFixture<PannelChatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PannelChatComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PannelChatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
