import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhraselistComponent } from './phraselist.component';

describe('PhraselistComponent', () => {
  let component: PhraselistComponent;
  let fixture: ComponentFixture<PhraselistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhraselistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PhraselistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
