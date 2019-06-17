export class Song {
  static readonly type = 'Song';
  constructor(public Id: any, public Nmae: String, public Artists: [], public album: {}) {}
}

export interface SongModel {
  Id: String;
  Nmae: String;
  Artists: [];
  album: {};
}
