import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MangasComponent } from './manga/manga.component';
import { AddMangaComponent } from './add-manga/add-manga.component';
import { UpdateMangaComponent } from './update-manga/update-manga.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    MangasComponent,
    AddMangaComponent,
    UpdateMangaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
