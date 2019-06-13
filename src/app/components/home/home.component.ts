import { Component, OnInit } from '@angular/core';
import { ipcRenderer, remote, BrowserWindow, app } from 'electron';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor() {}

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
}
