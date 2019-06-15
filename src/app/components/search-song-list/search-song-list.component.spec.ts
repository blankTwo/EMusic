import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchSongListComponent } from './search-song-list.component';

describe('SearchSongListComponent', () => {
  let component: SearchSongListComponent;
  let fixture: ComponentFixture<SearchSongListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchSongListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchSongListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
