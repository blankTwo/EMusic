import { State, Action, StateContext } from '@ngxs/store';
import { Song, SongModel } from './song.actions';

@State<any>({
  name: 'Song',
  defaults: {
    Id: 0,
    Nmae: null,
    Artists: [],
    album: {},
  },
})
export class PlaySong {
  @Action(Song) pSong(ctx: StateContext<SongModel>, action: Song) {
    const state = ctx.getState();
    ctx.setState({
      ...state,
      ...action,
    });
  }
}
