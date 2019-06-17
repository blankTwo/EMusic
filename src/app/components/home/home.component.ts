import { Component, OnInit } from '@angular/core';
import { remote } from 'electron';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor(private http: HttpClient) {}

  dataList: any;
  searchv: any;

  playSongInfo: any;

  ngOnInit() {}

  onMinEvent() {
    remote.getCurrentWindow().minimize();
  }

  onMaxEvent() {
    const _max = remote.getCurrentWindow().isMaximized();
    if (_max) {
      remote.getCurrentWindow().unmaximize();
    } else {
      remote.getCurrentWindow().maximize();
    }
  }
  onCloseEvent() {
    remote.getCurrentWindow().close();
  }

  onSearch(value: any) {
    if (!value) {
      return;
    }
    this.searchv = value;
  }

  onPlaySong(event: any) {
    this.playSongInfo = event;
  }
}
