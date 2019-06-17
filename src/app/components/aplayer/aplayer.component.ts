import { Component, OnInit, SimpleChanges, Input } from '@angular/core';
import APlayer from '../../../../src/assets/APlayer.min';
import { PlaySong } from '../song-play-ngxs/song.state';
import { Observable, of, observable, forkJoin } from 'rxjs';
import { SongModel, Song } from '../song-play-ngxs/song.actions';
import { Select, Store } from '@ngxs/store';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-aplayer',
  templateUrl: './aplayer.component.html',
  styleUrls: ['./aplayer.component.scss'],
})
export class APlayerComponent implements OnInit {
  babyPandas$: Observable<string[]>;

  constructor(private http: HttpClient) {}

  private _playSongInfo: any;
  songId = null;
  ap: any;
  ngOnInit() {
    this.createAudio();
  }

  @Input() set SongInfo(value: any[]) {
    this._playSongInfo = value;
    this.loadPlayData(value);
  }
  get SongInfo() {
    return this._playSongInfo;
  }

  loadPlayData(value: any) {
    if (!value) {
      return;
    }
    this.songId = value.Id;

    forkJoin([this.getMp3(), this.getImgeoralbumorArtists(), this.getlyric()]).subscribe((results: any) => {
      // console.log(results[0]);
      // console.log(results[1]);
      // console.log(results[2]);

      const a = value.Name;
      const b = results[1][this.songId].artists.join('/');
      const c = results[0].data[0].url;
      const d = results[1][this.songId].album.picture;
      const e = results[2].lrc.lyric;

      this.ap.list.add([
        {
          name: a,
          artist: b,
          url: c,
          cover: d,
          lrc: e,
        },
      ]);
    });
  }

  // 创建播放器
  createAudio() {
    this.ap = new APlayer({
      container: document.getElementById('aplayer'),
      lrcType: 1,
      audio: [
        {
          name: '',
          artist: '',
          url: '',
          cover: '',
        },
      ],
    });
  }

  getMp3() {
    const url = `https://v1.hitokoto.cn/nm/url/${this.songId}`;
    return this.http.get(url);
  }

  getImgeoralbumorArtists() {
    const url = `https://v1.hitokoto.cn/nm/summary/${this.songId}`;
    return this.http.get(url);
  }

  getlyric() {
    const url = `https://v1.hitokoto.cn/nm/lyric/${this.songId}`;
    return this.http.get(url);
  }
}
