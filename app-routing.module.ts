import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MangasComponent } from './manga/manga.component';
import { AddMangaComponent } from './add-manga/add-manga.component';
import { UpdateMangaComponent } from './update-manga/update-manga.component';


const routes: Routes = [
  { path: 'mangas', component: MangasComponent },
  { path: 'add-manga', component: AddMangaComponent },
  { path: 'updateManga/:id', component: UpdateMangaComponent },
  { path: '', redirectTo: '/mangas', pathMatch: 'full' },
  { path: '**', redirectTo: '/mangas' }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
