import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SongSheetListComponent } from './song-sheet-list.component';

describe('SongSheetListComponent', () => {
  let component: SongSheetListComponent;
  let fixture: ComponentFixture<SongSheetListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SongSheetListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SongSheetListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
