import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-song-list',
  templateUrl: './song-list.component.html',
  styleUrls: ['./song-list.component.scss'],
})
export class SongListComponent implements OnInit {
  constructor() {}

  private _dataList: any[] = [];
  private _keyword: any;

  songInfo = {};
  @Output() dbClick = new EventEmitter();
  ngOnInit() {}

  @Input() set dataList(value: any[]) {
    this._dataList = value;
  }
  get dataList() {
    return this._dataList;
  }

  @Input() set keyword(value: any[]) {
    this._keyword = value;
  }
  get keyword() {
    return this._keyword;
  }

  onPlaySong(item: any) {
    this.songInfo = {
      Id: item.id,
      Name: item.name,
    };
    this.dbClick.emit(this.songInfo);
  }
}
