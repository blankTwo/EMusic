import { Component, OnInit, Input, forwardRef, SimpleChanges, Output, EventEmitter } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-search-song-list',
  templateUrl: './search-song-list.component.html',
  styleUrls: ['./search-song-list.component.scss'],
  providers: [{ provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => SearchSongListComponent), multi: true }],
})
export class SearchSongListComponent implements OnInit, ControlValueAccessor {
  constructor(private http: HttpClient) {}

  _onChange: (_: any) => {};

  dataList = [];
  dataCount = 0;
  name: any;
  keyword: any;

  _Song = true;
  _SongSheet: boolean;
  _Album: boolean;

  @Output() onDbClick = new EventEmitter();

  ngOnInit() {}

  writeValue(obj: any): void {
    this.name = obj;
    this.keyword = obj;
    this.loadData(obj);
  }

  registerOnChange(fn: any): void {
    this._onChange = fn;
  }

  registerOnTouched(fn: any): void {}

  setDisabledState?(isDisabled: boolean): void {}

  loadData(v: any) {
    if (!v) {
      return;
    }
    const ed = encodeURIComponent(v);
    const url = `https://v1.hitokoto.cn/nm/search/${ed}`;

    this.http.get(url).subscribe((x: any) => {
      this.dataList = x.result.songs;
      this.dataCount = x.result.songCount;
    });
  }

  // 歌曲
  onSong() {
    this._Song = true;
    this._SongSheet = false;
    this._Album = false;
  }
  // 歌单
  onSongSheet() {
    this._Song = false;
    this._SongSheet = true;
    this._Album = false;
  }

  // 专辑
  onAlbum() {
    this._Song = false;
    this._SongSheet = false;
    this._Album = true;
  }

  _onDbClick(event: any) {
    this.onDbClick.emit(event);
  }
}
