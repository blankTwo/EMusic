import 'reflect-metadata';
import '../polyfills';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { HttpClientModule, HttpClient } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';

// NG Translate
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { ElectronService } from './providers/electron.service';

import { WebviewDirective } from './directives/webview.directive';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { MenuComponent } from './components/menu/menu.component';
import { MenuItemDirective } from './directives/menu-item/menu-item.directive';
import { SearchSongListComponent } from './components/search-song-list/search-song-list.component';
import { JoinPipe } from './pipe/join/join.pipe';
import { KeywordPipe } from './pipe/keyword/keyword.pipe';
import { TabActiveDirective } from './directives/tab-active/tab-active.directive';
import { SongListComponent } from './components/search-song-list/song-list/song-list.component';
import { SongSheetListComponent } from './components/search-song-list/song-sheet-list/song-sheet-list.component';
import { AlbumListComponent } from './components/search-song-list/album-list/album-list.component';

// AoT requires an exported function for factories
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    WebviewDirective,
    MenuComponent,
    MenuItemDirective,
    SearchSongListComponent,
    JoinPipe,
    KeywordPipe,
    TabActiveDirective,
    SongListComponent,
    SongSheetListComponent,
    AlbumListComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
    }),
  ],
  providers: [ElectronService],
  bootstrap: [AppComponent],
})
export class AppModule {}
